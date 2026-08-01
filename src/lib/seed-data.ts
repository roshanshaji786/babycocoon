// Seed catalogue for Baby Cocoon.
// Used by:
//  - scripts/seed.ts   -> populates the PostgreSQL database
//  - src/lib/static-shim.ts -> serves the static (GitHub Pages) demo

export interface SeedCategory {
  id: number;
  name: string;
  slug: string;
  description: string;
  image: string;
  sortOrder: number;
}

export interface SeedProduct {
  id: number;
  name: string;
  slug: string;
  description: string;
  shortDescription: string;
  price: string;
  compareAtPrice: string | null;
  images: string[];
  features: string[];
  isFeatured: boolean;
  isBestseller: boolean;
  ageRange: string;
  material: string;
  rating: string;
  reviewCount: number;
  inStock: boolean;
  categoryId: number;
}

export interface SeedReview {
  id: number;
  productId: number;
  authorName: string;
  rating: number;
  title: string;
  body: string;
  verified: boolean;
}

export const seedCategories: SeedCategory[] = [
  { id: 1, name: "Newborn Essentials", slug: "newborn-essentials", description: "Everything your newborn needs for a soft, safe start.", image: "/products/newborn-essentials.jpg", sortOrder: 1 },
  { id: 2, name: "Baby Bedding", slug: "baby-bedding", description: "Cozy, breathable bedding sets for peaceful sleep.", image: "/products/baby-bedding.jpg", sortOrder: 2 },
  { id: 3, name: "Carry Beds", slug: "carry-beds", description: "Portable comfort for baby on the go.", image: "/products/carry-beds.jpg", sortOrder: 3 },
  { id: 4, name: "Combo Sets", slug: "combo-sets", description: "Complete newborn gift combos, ready to wrap.", image: "/products/combo-sets.jpg", sortOrder: 4 },
  { id: 5, name: "Baby Cradles", slug: "baby-cradles", description: "Handcrafted cradles for gentle, rocking sleep.", image: "/products/baby-cradles.jpg", sortOrder: 5 },
  { id: 6, name: "Feeding Pillows", slug: "feeding-pillows", description: "Ergonomic support for comfortable feeding.", image: "/products/feeding-pillows.jpg", sortOrder: 6 },
  { id: 7, name: "Net Beds", slug: "net-beds", description: "Breathable net beds with mosquito protection.", image: "/products/net-beds.jpg", sortOrder: 7 },
  { id: 8, name: "Hooded Towels", slug: "hooded-towels", description: "Super-soft hooded towels for bath time.", image: "/products/hooded-towels.jpg", sortOrder: 8 },
  { id: 9, name: "Jablas & Clothing", slug: "jablas-clothing", description: "Comfortable everyday clothing for little ones.", image: "/products/jablas-clothing.jpg", sortOrder: 9 },
  { id: 10, name: "Muslin Collection", slug: "muslin-collection", description: "Breathable, gentle muslin essentials.", image: "/products/muslin-collection.jpg", sortOrder: 10 },
  { id: 11, name: "Storage Baskets", slug: "storage-baskets", description: "Beautiful, practical storage for the nursery.", image: "/products/storage-baskets.svg", sortOrder: 11 },
  { id: 12, name: "Swaddles & Wrappers", slug: "swaddles-wrappers", description: "Soft swaddles that keep baby snug and calm.", image: "/products/swaddles-wrappers.svg", sortOrder: 12 },
];

export const seedProducts: SeedProduct[] = [
  {
    id: 1, name: "Cloud Soft Muslin Swaddle Set (3 Pack)", slug: "cloud-soft-muslin-swaddle-set",
    description: "Our signature 3-pack of extra-large muslin swaddles in dreamy pastel tones. Each swaddle is pre-washed for maximum softness and becomes even gentler with every wash. Use as a swaddle, nursing cover, stroller shade, or burp cloth — the most versatile piece in your nursery.",
    shortDescription: "Extra-soft pre-washed muslin swaddles, 3 in a pack.",
    price: "1299", compareAtPrice: "1799", images: ["/products/newborn-essentials.jpg", "/products/muslin-collection.jpg"],
    features: ["100% breathable cotton muslin", "Pre-washed, gets softer with every wash", "Multi-use: swaddle, cover, shade", "Generous 120 x 120 cm size"],
    isFeatured: true, isBestseller: true, ageRange: "0-6 months", material: "100% Cotton Muslin", rating: "4.9", reviewCount: 214, inStock: true, categoryId: 1,
  },
  {
    id: 2, name: "Snuggle Nest Baby Lounger", slug: "snuggle-nest-baby-lounger",
    description: "A portable baby nest that keeps your little one comfortable and secure anywhere in the house. Lightweight, machine-washable cover, and a gentle raised rim that mimics the feeling of being held.",
    shortDescription: "Portable lounger nest for supervised rest.",
    price: "2499", compareAtPrice: "3299", images: ["/products/newborn-essentials.jpg", "/products/carry-beds.jpg"],
    features: ["Lightweight & portable", "Removable machine-washable cover", "Breathable 3D mesh sides", "Grows with baby (0-12 months)"],
    isFeatured: true, isBestseller: true, ageRange: "0-12 months", material: "Cotton + 3D mesh", rating: "4.8", reviewCount: 156, inStock: true, categoryId: 1,
  },
  {
    id: 3, name: "Organic Cotton Bibs & Burp Cloths (6 Pack)", slug: "organic-cotton-bibs-burp-cloths",
    description: "A complete pack of ultra-absorbent organic cotton bibs and burp cloths. Double-layered for mess-proof feeding, with snap closures that adjust as baby grows.",
    shortDescription: "6-piece absorbent feeding essentials.",
    price: "899", compareAtPrice: "1199", images: ["/products/newborn-essentials.jpg"],
    features: ["GOTS-certified organic cotton", "Double-layer absorbency", "Adjustable snap closure", "Stain-resistant finish"],
    isFeatured: false, isBestseller: false, ageRange: "0-24 months", material: "Organic Cotton", rating: "4.7", reviewCount: 98, inStock: true, categoryId: 1,
  },
  {
    id: 4, name: "Dreamy Nights Fitted Crib Sheet Set (2 Pack)", slug: "dreamy-nights-fitted-crib-sheet-set",
    description: "Two ultra-soft fitted sheets that stay snugly in place all night. Deep pockets fit standard crib mattresses, and the gentle elastic band keeps the sheet smooth and safe for sleeping.",
    shortDescription: "2-pack soft fitted crib sheets.",
    price: "1499", compareAtPrice: "1999", images: ["/products/baby-bedding.jpg"],
    features: ["Deep pockets, universal fit", "Breathable 300TC cotton", "Set of 2, easy to rotate", "Safe snug fit"],
    isFeatured: true, isBestseller: false, ageRange: "0-3 years", material: "Cotton Percale", rating: "4.8", reviewCount: 132, inStock: true, categoryId: 2,
  },
  {
    id: 5, name: "Whimsical Garden Crib Bedding Set", slug: "whimsical-garden-crib-bedding-set",
    description: "A complete 4-piece bedding set featuring a hand-drawn garden print. Includes fitted sheet, quilt, bumper and crib skirt — everything needed to dress up the nursery beautifully.",
    shortDescription: "4-piece quilted crib bedding set.",
    price: "3999", compareAtPrice: "5499", images: ["/products/baby-bedding.jpg", "/products/baby-cradles.jpg"],
    features: ["4-piece complete set", "Soft quilted cotton", "Watercolor garden print", "Machine washable"],
    isFeatured: true, isBestseller: true, ageRange: "0-3 years", material: "Cotton Quilt", rating: "4.9", reviewCount: 87, inStock: true, categoryId: 2,
  },
  {
    id: 6, name: "Cozy Knit Baby Blanket", slug: "cozy-knit-baby-blanket",
    description: "A chunky hand-knit style blanket made from breathable cotton yarn. Warm without overheating, it's perfect for stroller walks and tummy time.",
    shortDescription: "Chunky knit cotton blanket, breathable & warm.",
    price: "1799", compareAtPrice: null, images: ["/products/baby-bedding.jpg"],
    features: ["Breathable cotton yarn", "Chunky knit texture", "70 x 90 cm size", "Hypoallergenic"],
    isFeatured: false, isBestseller: false, ageRange: "0-3 years", material: "Cotton Yarn", rating: "4.6", reviewCount: 64, inStock: true, categoryId: 2,
  },
  {
    id: 7, name: "Wanderlust Portable Carry Bed", slug: "wanderlust-portable-carry-bed",
    description: "A foldable carry bed with a sturdy frame and plush mattress. Perfect for travels, grandparent visits, or a safe nap spot in the living room. Sets up in seconds with no tools.",
    shortDescription: "Foldable travel carry bed with plush mattress.",
    price: "3499", compareAtPrice: "4499", images: ["/products/carry-beds.jpg", "/products/newborn-essentials.jpg"],
    features: ["Folds flat, carry handle included", "Sturdy aluminium frame", "Plush washable mattress", "Sets up in 5 seconds"],
    isFeatured: true, isBestseller: true, ageRange: "0-18 months", material: "Aluminium + Cotton", rating: "4.8", reviewCount: 143, inStock: true, categoryId: 3,
  },
  {
    id: 8, name: "Boho Chic Bassinet Carry Cot", slug: "boho-chic-bassinet-carry-cot",
    description: "A stylish wicker-style bassinet that doubles as a carry cot. The breathable lining and padded base make it perfect for daytime naps, and the elegant design looks beautiful in any room.",
    shortDescription: "Wicker-style bassinet with carry handles.",
    price: "2999", compareAtPrice: "3899", images: ["/products/carry-beds.jpg"],
    features: ["Handwoven wicker look", "Padded, washable lining", "Comfortable carry handles", "Breathable sides"],
    isFeatured: false, isBestseller: true, ageRange: "0-6 months", material: "Rattan + Cotton", rating: "4.7", reviewCount: 76, inStock: true, categoryId: 3,
  },
  {
    id: 9, name: "Baby Cocoon Gift Combo - Classic", slug: "baby-cocoon-gift-combo-classic",
    description: "The perfect newborn gift. This beautifully packed combo includes a muslin swaddle, a soft cap, mittens, booties, a bib and a mini blanket — all in our signature pastel palette.",
    shortDescription: "6-piece newborn gift combo in gift box.",
    price: "2850", compareAtPrice: "3799", images: ["/products/combo-sets.jpg", "/products/newborn-essentials.jpg"],
    features: ["Beautiful gift-ready packaging", "6 essential newborn pieces", "Premium cotton fabrics", "Includes greeting card slot"],
    isFeatured: true, isBestseller: true, ageRange: "0-6 months", material: "Cotton", rating: "5.0", reviewCount: 189, inStock: true, categoryId: 4,
  },
  {
    id: 10, name: "Baby Cocoon Gift Combo - Deluxe", slug: "baby-cocoon-gift-combo-deluxe",
    description: "Our grandest combo set: swaddles, bedding essentials, clothing, feeding accessories and a plush toy — 12 pieces of pure baby luxury in a keepsake box.",
    shortDescription: "12-piece deluxe newborn gift set.",
    price: "5499", compareAtPrice: "7499", images: ["/products/combo-sets.jpg"],
    features: ["12 premium pieces", "Keepsake storage box", "Includes plush toy", "Mix of bedding & clothing"],
    isFeatured: true, isBestseller: false, ageRange: "0-12 months", material: "Cotton", rating: "4.9", reviewCount: 67, inStock: true, categoryId: 4,
  },
  {
    id: 11, name: "Heritage Wooden Baby Cradle", slug: "heritage-wooden-baby-cradle",
    description: "A handcrafted cradle from sustainably sourced mango wood. Gentle rocking motion soothes baby to sleep, and the low-height design is perfect for modern nurseries.",
    shortDescription: "Handcrafted mango-wood rocking cradle.",
    price: "7999", compareAtPrice: "9999", images: ["/products/baby-cradles.jpg"],
    features: ["Sustainably sourced mango wood", "Smooth rocking motion", "Natural non-toxic finish", "Easy assembly"],
    isFeatured: true, isBestseller: false, ageRange: "0-12 months", material: "Mango Wood", rating: "4.8", reviewCount: 41, inStock: true, categoryId: 5,
  },
  {
    id: 12, name: "Dream Rocker Baby Cradle with Canopy", slug: "dream-rocker-baby-cradle-canopy",
    description: "A dreamy cradle with a soft canopy that keeps light and drafts away. The padded rim and gentle rocker base create the perfect sleep environment.",
    shortDescription: "Cradle with canopy, padded rim & rocker base.",
    price: "6499", compareAtPrice: "8499", images: ["/products/baby-cradles.jpg", "/products/baby-bedding.jpg"],
    features: ["Detachable canopy", "Padded safety rim", "Smooth rocker base", "Fits standard mattress"],
    isFeatured: false, isBestseller: true, ageRange: "0-12 months", material: "Wood + Cotton", rating: "4.7", reviewCount: 53, inStock: true, categoryId: 5,
  },
  {
    id: 13, name: "ErgoComfort Nursing Pillow", slug: "ergocomfort-nursing-pillow",
    description: "Designed with ergonomic contours that support your back, arms and baby during feeding. The adjustable strap keeps it in place, and the cover unzips for easy washing.",
    shortDescription: "Ergonomic nursing pillow with washable cover.",
    price: "1999", compareAtPrice: "2699", images: ["/products/feeding-pillows.jpg"],
    features: ["Ergonomic C-shape design", "Adjustable waist strap", "Removable washable cover", "Firm yet plush fill"],
    isFeatured: true, isBestseller: true, ageRange: "Parent use", material: "Cotton + Polyfill", rating: "4.9", reviewCount: 178, inStock: true, categoryId: 6,
  },
  {
    id: 14, name: "Feeding & Tummy Time Support Pillow", slug: "feeding-tummy-time-support-pillow",
    description: "A versatile pillow that supports comfortable feeding positions and doubles as a tummy time aid. The gentle incline helps with reflux and makes playtime more fun.",
    shortDescription: "2-in-1 feeding & tummy time pillow.",
    price: "1599", compareAtPrice: "2099", images: ["/products/feeding-pillows.jpg"],
    features: ["2-in-1 feeding & tummy time", "Gentle anti-reflux incline", "Soft, supportive fill", "Easy-clean cover"],
    isFeatured: false, isBestseller: false, ageRange: "0-6 months", material: "Cotton + Polyfill", rating: "4.6", reviewCount: 59, inStock: true, categoryId: 6,
  },
  {
    id: 15, name: "Breezy Mosquito Net Baby Bed", slug: "breezy-mosquito-net-baby-bed",
    description: "A foldable net bed with fine mesh that protects baby from mosquitoes while allowing maximum airflow. Perfect for naps anywhere, indoors or out.",
    shortDescription: "Foldable net bed with full mosquito protection.",
    price: "2199", compareAtPrice: "2899", images: ["/products/net-beds.jpg"],
    features: ["Fine 3D mesh, full coverage", "Foldable frame with carry bag", "Maximum airflow", "Easy to clean"],
    isFeatured: true, isBestseller: true, ageRange: "0-12 months", material: "Mesh + Metal frame", rating: "4.7", reviewCount: 92, inStock: true, categoryId: 7,
  },
  {
    id: 16, name: "Tropical Palm Net Play Bed", slug: "tropical-palm-net-play-bed",
    description: "A stylish play-and-rest net bed with a tropical print. Baby stays safe from insects while enjoying the breeze — indoors or on the balcony.",
    shortDescription: "Play/rest net bed, tropical print.",
    price: "2399", compareAtPrice: "2999", images: ["/products/net-beds.jpg"],
    features: ["Tropical fade-resistant print", "Foldable & portable", "Mesh side panels", "Machine washable"],
    isFeatured: false, isBestseller: false, ageRange: "0-18 months", material: "Mesh + Cotton", rating: "4.5", reviewCount: 38, inStock: true, categoryId: 7,
  },
  {
    id: 17, name: "CuddleSoft Hooded Towel - Bunny", slug: "cuddlesoft-hooded-towel-bunny",
    description: "Wrap your little one in cloud-soft hooded towel with adorable bunny ears. Highly absorbent, gentle on delicate skin, and sized to grow with baby.",
    shortDescription: "Hooded bath towel with bunny ears.",
    price: "1299", compareAtPrice: "1699", images: ["/products/hooded-towels.jpg"],
    features: ["Ultra-soft coral fleece", "Adorable bunny hood", "Highly absorbent", "Size: 75 x 75 cm"],
    isFeatured: true, isBestseller: true, ageRange: "0-3 years", material: "Coral Fleece", rating: "4.8", reviewCount: 121, inStock: true, categoryId: 8,
  },
  {
    id: 18, name: "Organic Cotton Hooded Towel & Washcloth Set", slug: "organic-cotton-hooded-towel-washcloth-set",
    description: "A bath-time duo in 100% organic cotton: a generous hooded towel plus two matching washcloths. Soft, absorbent and free from harsh chemicals.",
    shortDescription: "Hooded towel + 2 washcloths, organic cotton.",
    price: "1599", compareAtPrice: null, images: ["/products/hooded-towels.jpg"],
    features: ["100% organic cotton", "3-piece bath set", "Free from chemicals", "Gets softer with washing"],
    isFeatured: false, isBestseller: false, ageRange: "0-3 years", material: "Organic Cotton", rating: "4.7", reviewCount: 44, inStock: true, categoryId: 8,
  },
  {
    id: 19, name: "Everyday Cotton Jabla Set (5 Pack)", slug: "everyday-cotton-jabla-set",
    description: "Five everyday jablas in soft pastel shades. Side-tie or envelope necklines make dressing and diaper changes effortless, day and night.",
    shortDescription: "5-pack soft cotton jablas.",
    price: "1499", compareAtPrice: "1999", images: ["/products/jablas-clothing.jpg"],
    features: ["5-piece everyday pack", "Envelope neckline", "Soft breathable cotton", "Wide-cut for easy changes"],
    isFeatured: true, isBestseller: true, ageRange: "0-12 months", material: "Cotton", rating: "4.8", reviewCount: 167, inStock: true, categoryId: 9,
  },
  {
    id: 20, name: "Snug Fit Baby Romper & Pants Set", slug: "snug-fit-baby-romper-pants-set",
    description: "A cute 2-piece romper and pants set with elastic waistbands for a comfortable fit. Perfect for playdates, outings and everyday cuteness.",
    shortDescription: "2-piece romper and pants outfit.",
    price: "999", compareAtPrice: "1399", images: ["/products/jablas-clothing.jpg"],
    features: ["2-piece outfit set", "Stretchy comfortable fit", "Easy snap closure", "Machine washable"],
    isFeatured: false, isBestseller: false, ageRange: "3-24 months", material: "Cotton Blend", rating: "4.6", reviewCount: 72, inStock: true, categoryId: 9,
  },
  {
    id: 21, name: "Muslin Burp Cloths & Swaddle Bundle", slug: "muslin-burp-cloths-swaddle-bundle",
    description: "The ultimate muslin bundle: 4 burp cloths and 2 large swaddles in coordinated prints. Muslin's open weave means breathability and quick drying.",
    shortDescription: "4 burp cloths + 2 swaddles in muslin.",
    price: "1799", compareAtPrice: "2399", images: ["/products/muslin-collection.jpg"],
    features: ["6-piece muslin bundle", "Breathable open weave", "Quick-drying", "Coordinated prints"],
    isFeatured: true, isBestseller: true, ageRange: "0-24 months", material: "100% Cotton Muslin", rating: "4.9", reviewCount: 204, inStock: true, categoryId: 10,
  },
  {
    id: 22, name: "Muslin Stroller Blanket - Star Print", slug: "muslin-stroller-blanket-star-print",
    description: "A light, breathable muslin blanket with a dreamy star print. Perfect for stroller rides, car seats and summer naps — folds into a tiny bundle.",
    shortDescription: "Lightweight star-print muslin blanket.",
    price: "1199", compareAtPrice: "1499", images: ["/products/muslin-collection.jpg"],
    features: ["Feather-light muslin", "Dreamy star print", "Folds into small pouch", "Multi-season use"],
    isFeatured: false, isBestseller: false, ageRange: "0-3 years", material: "100% Cotton Muslin", rating: "4.7", reviewCount: 56, inStock: true, categoryId: 10,
  },
  {
    id: 23, name: "Woven Storage Basket Set (3 Sizes)", slug: "woven-storage-basket-set",
    description: "Three hand-woven baskets in natural tones for nursery storage. Use them for diapers, toys, swaddles or laundry — beautiful and endlessly useful.",
    shortDescription: "3-piece woven nursery storage set.",
    price: "1999", compareAtPrice: "2599", images: ["/products/storage-baskets.svg"],
    features: ["Hand-woven natural fibre", "3 sizes included", "Sturdy handles", "Folds flat for storage"],
    isFeatured: true, isBestseller: true, ageRange: "Nursery use", material: "Water Hyacinth", rating: "4.8", reviewCount: 84, inStock: true, categoryId: 11,
  },
  {
    id: 24, name: "Nursery Organizer Caddy & Basket", slug: "nursery-organizer-caddy-basket",
    description: "A portable organizer caddy with side pockets that keeps all baby essentials within arm's reach — from changing table to living room.",
    shortDescription: "Portable organizer caddy for baby essentials.",
    price: "1299", compareAtPrice: "1699", images: ["/products/storage-baskets.svg"],
    features: ["6 storage pockets", "Sturdy carry handles", "Easy-clean fabric", "Fits standard shelves"],
    isFeatured: false, isBestseller: false, ageRange: "Nursery use", material: "Cotton Canvas", rating: "4.6", reviewCount: 49, inStock: true, categoryId: 11,
  },
  {
    id: 25, name: "Butter Soft Swaddle Wraps (2 Pack)", slug: "butter-soft-swaddle-wraps",
    description: "Two generously sized swaddle wraps with a hint of stretch for a snug, secure wrap that soothes the startle reflex. Gentle on skin and easy to wrap, even for first-time parents.",
    shortDescription: "2-pack stretchy swaddle wraps.",
    price: "1399", compareAtPrice: "1899", images: ["/products/swaddles-wrappers.svg", "/products/newborn-essentials.jpg"],
    features: ["Gentle 4-way stretch", "Prevents startle reflex", "Large 60 x 60 size", "Breathable & soft"],
    isFeatured: true, isBestseller: true, ageRange: "0-4 months", material: "Cotton Spandex", rating: "4.9", reviewCount: 226, inStock: true, categoryId: 12,
  },
  {
    id: 26, name: "Silk Touch Swaddle Sack", slug: "silk-touch-swaddle-sack",
    description: "A no-fuss swaddle sack with zipper closure — no wrapping skills needed. The silky-soft fabric keeps baby comfortable while the zipper allows quick diaper changes.",
    shortDescription: "Zipper swaddle sack, silk-touch fabric.",
    price: "1099", compareAtPrice: "1499", images: ["/products/swaddles-wrappers.svg"],
    features: ["No-wrap zipper design", "Silky soft fabric", "Quick diaper access", "Sizes for 0-6 months"],
    isFeatured: false, isBestseller: false, ageRange: "0-6 months", material: "Viscose Blend", rating: "4.7", reviewCount: 63, inStock: true, categoryId: 12,
  },
];

export const seedReviews: SeedReview[] = [
  { id: 1, productId: 1, authorName: "Sara C.", rating: 5, title: "Softest swaddles ever", body: "Absolutely loved the quality! The fabric is incredibly soft and gentle on my baby's skin. The stitching and finish are excellent. Highly recommended!", verified: true },
  { id: 2, productId: 1, authorName: "Priya M.", rating: 5, title: "Perfect gift", body: "Bought these as a gift and the recipient couldn't stop raving about them. Beautiful pastel colours.", verified: true },
  { id: 3, productId: 7, authorName: "Neha S.", rating: 5, title: "Travel essential", body: "This carry bed saved our trips! Sets up in seconds and baby sleeps soundly in it.", verified: true },
  { id: 4, productId: 9, authorName: "Anjali R.", rating: 5, title: "Beautiful combo", body: "The gift box is stunning and everything inside is premium quality. Worth every rupee.", verified: true },
  { id: 5, productId: 13, authorName: "Divya K.", rating: 4, title: "Very comfortable", body: "My back thanks me! The strap keeps it in place while feeding. Cover washes well.", verified: true },
  { id: 6, productId: 25, authorName: "Meera V.", rating: 5, title: "Baby sleeps like a dream", body: "The stretch makes swaddling so easy. My baby's startle reflex is much calmer now.", verified: true },
  { id: 7, productId: 17, authorName: "Ritika S.", rating: 5, title: "Adorable and soft", body: "The bunny hood is too cute and the towel is super absorbent. Bath time is fun now!", verified: true },
  { id: 8, productId: 21, authorName: "Shruti P.", rating: 5, title: "Great value bundle", body: "Six pieces for this price is amazing. The muslin is breathable and dries quickly.", verified: true },
  { id: 9, productId: 5, authorName: "Kavya R.", rating: 4, title: "Beautiful bedding", body: "The print is even prettier in person. Washed well, no fading.", verified: false },
  { id: 10, productId: 15, authorName: "Anita D.", rating: 5, title: "Peace of mind", body: "No more worrying about mosquitoes during afternoon naps. Great airflow too.", verified: true },
];
