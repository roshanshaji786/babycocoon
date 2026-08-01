/**
 * Static-mode data shim.
 *
 * When the site is exported as a fully static bundle (GitHub Pages demo,
 * NEXT_PUBLIC_STATIC=1), there is no Next.js server, so the /api/* endpoints
 * don't exist. This module intercepts window.fetch on the client and answers
 * API-style requests from the bundled seed catalogue instead, so the exact
 * same components work unchanged in both modes.
 */
import {
  seedCategories,
  seedProducts,
  seedReviews,
} from "./seed-data";

export const isStaticMode =
  process.env.NEXT_PUBLIC_STATIC === "1" && typeof window !== "undefined";

const sortProducts = (
  list: typeof seedProducts,
  sort: string
): typeof seedProducts => {
  const copy = [...list];
  switch (sort) {
    case "price-low":
      return copy.sort(
        (a, b) => parseFloat(a.price) - parseFloat(b.price)
      );
    case "price-high":
      return copy.sort(
        (a, b) => parseFloat(b.price) - parseFloat(a.price)
      );
    case "rating":
      return copy.sort(
        (a, b) => parseFloat(b.rating) - parseFloat(a.rating)
      );
    case "newest":
      return copy.reverse();
    case "featured":
    default:
      return copy.sort(
        (a, b) => Number(b.isFeatured) - Number(a.isFeatured)
      );
  }
};

const withCategory = (p: (typeof seedProducts)[number]) => {
  const cat = seedCategories.find((c) => c.id === p.categoryId);
  return {
    ...p,
    categoryName: cat?.name ?? null,
    categorySlug: cat?.slug ?? null,
  };
};

export function handleStaticFetch(
  input: RequestInfo | URL,
  init?: RequestInit
): Promise<Response> | undefined {
  const url =
    typeof input === "string"
      ? new URL(input, window.location.origin)
      : input instanceof URL
      ? input
      : new URL(input.url, window.location.origin);

  const path = url.pathname;
  const method = init?.method ?? "GET";

  const json = (data: unknown, status = 200) =>
    Promise.resolve(
      new Response(JSON.stringify(data), {
        status,
        headers: { "Content-Type": "application/json" },
      })
    );

  // Health check
  if (path === "/api/health") return json({ ok: true });

  // Categories
  if (path === "/api/categories" && method === "GET") {
    return json(
      seedCategories.map(({ id, name, slug, description, image, sortOrder }) => ({
        id,
        name,
        slug,
        description,
        image,
        sortOrder,
      }))
    );
  }

  // Product detail
  const detailMatch = path.match(/^\/api\/products\/([^/]+)$/);
  if (detailMatch && method === "GET") {
    const slug = decodeURIComponent(detailMatch[1]);
    const product = seedProducts.find((p) => p.slug === slug);
    if (!product) return json({ error: "Product not found" }, 404);
    const productReviews = seedReviews.filter(
      (r) => r.productId === product.id
    );
    const related = seedProducts
      .filter((p) => p.categoryId === product.categoryId && p.id !== product.id)
      .slice(0, 4)
      .map(withCategory);
    return json({ product: withCategory(product), reviews: productReviews, relatedProducts: related });
  }

  // Products list
  if (path === "/api/products" && method === "GET") {
    const category = url.searchParams.get("category");
    const sort = url.searchParams.get("sort") || "featured";
    const search = url.searchParams.get("search");
    const featured = url.searchParams.get("featured");
    const page = parseInt(url.searchParams.get("page") || "1");
    const limit = parseInt(url.searchParams.get("limit") || "50");

    let list = [...seedProducts];

    if (category) {
      const cat = seedCategories.find((c) => c.slug === category);
      if (cat) list = list.filter((p) => p.categoryId === cat.id);
    }
    if (featured === "true") {
      list = list.filter((p) => p.isBestseller);
    }
    if (search) {
      const q = search.toLowerCase();
      list = list.filter((p) => p.name.toLowerCase().includes(q));
    }

    const total = list.length;
    list = sortProducts(list, sort);
    const start = (page - 1) * limit;
    const paged = list.slice(start, start + limit);

    return json({
      products: paged.map(withCategory),
      total,
      page,
      limit,
    });
  }

  // Orders — demo mode: accept and return a simulated order id
  if (path === "/api/orders" && method === "POST") {
    try {
      JSON.parse(init?.body?.toString() ?? "{}");
    } catch {
      return json({ error: "Invalid body" }, 400);
    }
    return json(
      { success: true, orderId: `DEMO-${Date.now().toString(36).toUpperCase()}` },
      200
    );
  }

  return undefined;
}

export function installStaticShim() {
  if (!isStaticMode || typeof window === "undefined") return;
  if ((window as unknown as { __bcStaticShim?: boolean }).__bcStaticShim)
    return;

  const realFetch = window.fetch.bind(window);
  window.fetch = ((input: RequestInfo | URL, init?: RequestInit) => {
    const handled = handleStaticFetch(input, init);
    if (handled) return handled;
    return realFetch(input, init);
  }) as typeof fetch;

  (window as unknown as { __bcStaticShim?: boolean }).__bcStaticShim = true;
}

installStaticShim();
