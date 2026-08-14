# ⚡ n8n — "New Shopify Order → Admin's WhatsApp" Workflow (handoff doc)

**Goal:** the store owner gets a WhatsApp message the instant an order lands on the Shopify store.

---

## 🧭 Architecture

```
Shopify (new order)
   ↓  (webhook / API poll)
n8n workflow (running 24/7 on your server)
   ↓  (format message)
WhatsApp sender (Fast2SMS OR Meta Cloud API)
   ↓
Admin's WhatsApp receives order alert 🛒
```

---

## 🔧 Step 0 — Run n8n (pick one)

| Option | Cost | Effort | Good for |
|---|---|---|---|
| **Docker on a VPS** (recommended) | ₹300–500/mo VPS | Medium | Production, always-on |
| **Railway / Render / Fly.io** | ~$5/mo | Easy | Quick deploy |
| **n8n Cloud (free tier)** | Free | Easiest | Testing first |

```bash
# Docker (on a VPS with 24/7 uptime)
docker run -d --name n8n -p 5678:5678 \
  -v n8n_data:/home/node/.n8n \
  -e N8N_SECURE_COOKIE=false \
  n8nio/n8n
```
Then open `http://YOUR_SERVER_IP:5678` → create your admin account.

> ⚠️ n8n must run 24/7 — never run it on your work laptop. Use a VPS or cloud.

---

## 🥇 Path A — Fast2SMS (recommended for India: no Meta template approval, ₹0.25/msg)

### A1. Get your Fast2SMS API key
1. Sign up free at **fast2sms.com** (Dev API key is in your dashboard, no cost).
2. Connect your **WhatsApp Business number** in their panel (free).
3. Get a **utility template approved** for order updates (Fast2SMS handles Meta approval).

### A2. Create the n8n workflow

**Nodes (top → bottom):**
1. **Shopify Trigger** → Event: **Order Created** (add Shopify credentials via OAuth — needs `read_orders` scope).
2. **Code / Set** — build the message. In a **Code** node paste this JavaScript (this is the "format the message" brain):

```javascript
// n8n Code node — formats the order alert message
const order = $input.first().json;
const items = (order.line_items || [])
  .slice(0, 3)                       // show first 3 items
  .map(i => `• ${i.quantity}× ${i.title} (₹${(Number(i.price)||0).toFixed(2)})`)
  .join('\n');

const msg =
  `🛒 *NEW ORDER!*\n` +
  `━━━━━━━━━━━━━━\n` +
  `Order #: ${order.name}\n` +
  `Customer: ${order.customer ? (order.customer.first_name + ' ' + order.customer.last_name) : '—'}\n` +
  `Phone: ${order.phone || (order.customer && order.customer.phone) || '—'}\n` +
  `Total: ₹${(Number(order.total_price)||0).toFixed(2)} (${order.financial_status})\n` +
  `Payment: ${order.payment_gateway_names ? order.payment_gateway_names.join(', ') : '—'}\n` +
  `Items:\n${items}\n` +
  `Address: ${order.shipping_address ? [order.shipping_address.address1, order.shipping_address.city].filter(Boolean).join(', ') : '—'}\n` +
  `━━━━━━━━━━━━━━\n` +
  `Open admin: ${order.admin_graphql_api_id}`;

return [{ json: { message: msg, to: '+91XXXXXXXXXX' } }]; // ← replace with ADMIN number
```

3. **HTTP Request node** → POST to Fast2SMS (see A3 for exact config).
4. **Done.** Activate the workflow.

### A3. HTTP Request node config (Fast2SMS)

- **Method:** POST
- **URL:** `https://www.fast2sms.com/dev/bulkV2`  *(check their current docs — the WhatsApp endpoint may differ from SMS; confirm in your Fast2SMS Dev panel)*
- **Headers:**
  ```
  Authorization: YOUR_FAST2SMS_API_KEY
  Content-Type: application/json
  ```
- **JSON body** (adjust field names to Fast2SMS's current API — verify in their docs):
  ```json
  {
    "route": "whatsapp",
    "numbers": "ADMIN_PHONE_WITH_COUNTRY_CODE",
    "message": "{{ $json.message }}",
    "template_id": "YOUR_APPROVED_UTILITY_TEMPLATE_ID"
  }
  ```
- **Map fields:** click "Add Expression" on the body fields and wire `{{ $json.message }}` from the Code node.

> ⚠️ **Verify before trusting:** Fast2SMS's WhatsApp endpoint/param names change. Open **docs.fast2sms.com** → copy their current WhatsApp send example → paste it into the HTTP Request node. The architecture above is correct; just match their latest field names.

### A4. Test
- Use n8n's **"Execute workflow"** with sample Shopify order data, then
- Place a real test order on the store (or use the Shopify Trigger's test event) → confirm the WhatsApp lands.

---

## 🥈 Path B — Meta WhatsApp Cloud API (official look, no third-party sender)

Use this if you want the message to come from your **verified business name** (e.g., "Baby Cocoon").

### B1. Prereqs
1. Meta Developer account → create an app → add **WhatsApp** product.
2. Create a **WhatsApp Business Account**, add your number, get a **permanent access token** (System User token, not the 24h temp one).
3. Create & get approved a **utility template** named e.g. `order_alert` with variables: `{{1}} order number, {{2}} customer, {{3}} total, {{4}} items`.

### B2. n8n nodes
1. **Shopify Trigger** → Order Created.
2. **Code node** — same as Path A (builds `{{ $json.message }}`), plus set `to: ADMIN_PHONE`.
3. **HTTP Request node:**
   - **Method:** POST
   - **URL:** `https://graph.facebook.com/v23.0/{{FROM_PHONE_NUMBER_ID}}/messages`
   - **Headers:**
     ```
     Authorization: Bearer {{YOUR_PERMANENT_ACCESS_TOKEN}}
     Content-Type: application/json
     ```
   - **Body:**
     ```json
     {
       "messaging_product": "whatsapp",
       "recipient_type": "individual",
       "to": "+91XXXXXXXXXX",
       "type": "template",
       "template": {
         "name": "order_alert",
         "language": { "code": "en" },
         "components": [{
           "type": "body",
           "parameters": [
             { "type": "text", "text": "{{ $json.orderNumber }}" },
             { "type": "text", "text": "{{ $json.customerName }}" },
             { "type": "text", "text": "{{ $json.total }}" },
             { "type": "text", "text": "{{ $json.items }}" }
           ]
         }]
       }
     }
     ```

> 💡 **Free-form (non-template) messages** only work within 24h of the admin messaging *you*. For a one-way alert, use the approved **template** — it's the correct, reliable path.

---

## 📦 Bonus — the same workflow, extended later (no extra app cost)
Once n8n is running, the same Shopify trigger can branch to:
- ✅ **Customer order confirmation** ("Your order #123 is confirmed 🎉")
- ✅ **COD one-tap confirm** (cuts fake orders + RTO — big for Indian stores)
- ✅ **Out-for-delivery** update
- ✅ **Review request** 7 days after delivery (ties into your Judge.me plan)
- ✅ Log every order to **Google Sheets** for your own records

Each is just another node/branch off the same trigger.

---

## 🧠 Quick-reference

| | Fast2SMS (A) | Meta Cloud API (B) |
|---|---|---|
| Setup | ~30 min | ~1–2 hrs + template approval |
| Who sends | Your WA Business number | Verified business name |
| Template approval | Handled by Fast2SMS | You create it in Meta |
| Per message | ₹0.25 | ~₹0.15–0.30 (utility) |
| Monthly fee | None | None |

**Recommendation:** start with **Path A (Fast2SMS)** for speed; if you want the "official branded" sender, upgrade to Path B later — same n8n workflow, just swap the HTTP Request node.

---

## ✅ Handoff checklist for staff

- [ ] n8n installed on an always-on server (VPS/Railway/n8n Cloud)
- [ ] Shopify credentials added (read_orders scope)
- [ ] Fast2SMS API key pasted (or Meta token) — in n8n credentials, **never in chat**
- [ ] Code node message template pasted, admin number replaced
- [ ] HTTP Request node matches current Fast2SMS/Meta docs
- [ ] Test order placed → alert landed in admin WhatsApp
- [ ] Workflow **activated** (green toggle)
- [ ] Uptime check: n8n reachable 24/7
