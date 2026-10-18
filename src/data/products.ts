export interface Product {
  id: string;
  slug: string;
  title: string;
  category: string;
  price: string;
  originalPrice: string | null;
  images: string[];
  badge: string | null;
  inStock: boolean;
  colors: string[];
  sizes: string[];
  description: string;
  details: string[];
}

export interface CartItem {
  product: Product;
  size: string;
  color: string;
  quantity: number;
}

export interface Story {
  title: string;
  linkText: string;
  linkUrl: string;
  videoUrl: string;
  duration: number;
}

export const STORIES: Story[] = [
  {
    title: "MOST WANTED",
    linkText: "Most Wanted",
    linkUrl: "most-wanted",
    videoUrl: "https://cdn.shopify.com/videos/c/o/v/cd417ebef4184c04b792429d8d1eeab3.mp4",
    duration: 13
  },
  {
    title: "NEW IN",
    linkText: "New Ins",
    linkUrl: "new-in",
    videoUrl: "https://cdn.shopify.com/videos/c/o/v/31d5ac2ee5c74eb98c1fc20ecf064e79.mp4",
    duration: 5
  }
];

export const CATEGORIES = [
  {
    name: "Tops",
    count: 238,
    slug: "tops",
    image: "/images/categories/tops.jpg"
  },
  {
    name: "Sleeveless",
    count: 123,
    slug: "sleeveless",
    image: "/images/categories/sleeveless.jpg"
  },
  {
    name: "Deep Back",
    count: 37,
    slug: "deep-back",
    image: "/images/categories/deep-back.jpg"
  },
  {
    name: "Corset",
    count: 87,
    slug: "corset-tops",
    image: "/images/categories/corset.jpg"
  },
  {
    name: "Dresses",
    count: 48,
    slug: "dresses",
    image: "/images/categories/dresses.jpg"
  },
  {
    name: "Sets",
    count: 44,
    slug: "sets",
    image: "/images/categories/sets.jpg"
  },
  {
    name: "Short Kurti",
    count: 17,
    slug: "kurti-short",
    image: "/images/categories/short-kurti.jpg"
  },
  {
    name: "Pants",
    count: 19,
    slug: "pants",
    image: "/images/categories/pants.jpg"
  },
  {
    name: "Accessories",
    count: 52,
    slug: "accessories",
    image: "/images/categories/accessories.jpg"
  },
  {
    name: "Long Kurti",
    count: 16,
    slug: "kurti-long",
    image: "/images/categories/long-kurti.jpg"
  },
  {
    name: "Skirt",
    count: 23,
    slug: "skirts",
    image: "/images/categories/skirt.jpg"
  },
  {
    name: "Bottoms",
    count: 34,
    slug: "bottoms",
    image: "/images/categories/bottoms.jpg"
  }
];

export const PRODUCTS: Product[] = [
  {
    id: "white-cotton-pants",
    slug: "white-cotton-pants",
    title: "White Loose Fitting Pants",
    category: "Bottoms",
    price: "₹1,899",
    originalPrice: "₹2,449",
    images: [
      "/images/products/whitepant-hero-AI.jpg",
      "/images/products/white_pants.jpg"
    ],
    badge: "Sale",
    inStock: true,
    colors: ["Ivory White", "Oatmeal Beige"],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    description: "Relaxed silhouette crafted from premium breathable summer cotton. Tailored for comfort with modern structured aesthetics.",
    details: [
      "Pure organic breathable cotton",
      "Elasticated waistband with front clean yoke",
      "Functional deep side pockets",
      "Pre-shrunk, gentle machine or hand wash"
    ]
  },
  {
    id: "rasha-jacquard-cape-kurti",
    slug: "rasha-jacquard-cape-kurti",
    title: "Rasha Jacquard Cape Structured Kurti Top",
    category: "Kurtis",
    price: "₹2,549",
    originalPrice: "₹3,149",
    images: [
      "/images/products/4_75b27698-8ab4-4256-871d-c30de3d13799.jpg",
      "/images/products/2_32179f35-fe0a-41f3-be62-6ab9be8b0cce.jpg"
    ],
    badge: "New In",
    inStock: true,
    colors: ["Obsidian Black", "Gold Weave"],
    sizes: ["XS", "S", "M", "L", "XL"],
    description: "Signature jacquard woven fabric sculpted into a modern cape kurti top. An assertive silhouette fusing contemporary power tailoring with heritage weaving.",
    details: [
      "Structured self-embossed jacquard",
      "Detachable dramatic cape detail",
      "Concealed side zipper closure",
      "Dry clean recommended"
    ]
  },
  {
    id: "jamna-halter-co-ord-set",
    slug: "jamna-halter-co-ord-set-h",
    title: "Jamna Halter Co-ord Set",
    category: "Sets",
    price: "₹3,449",
    originalPrice: "₹4,199",
    images: [
      "/images/products/hero_146e09cb-490c-4c70-810f-45bd864a15ee.jpg",
      "/images/products/back_4780b892-a13c-4d40-b0df-06ac4ef7791d.jpg"
    ],
    badge: "Sale",
    inStock: true,
    colors: ["Crimson Rust", "Desert Ochre"],
    sizes: ["XS", "S", "M", "L", "XL"],
    description: "The viral two-piece halterneck top paired with sculpted fluid trousers. Engineered for effortless festive dressing and high-fashion comfort.",
    details: [
      "Halter neckline with self-tie ribbons",
      "Full back smocking for flexible fit",
      "High-rise straight leg fluid pants",
      "Soft rayon-linen touch"
    ]
  },
  {
    id: "dabu-halter-neck-corset-kurti",
    slug: "dabu-halter-neck-corset-kurti",
    title: "Dabu Halter Corset Kurti Top",
    category: "Kurtis",
    price: "₹1,899",
    originalPrice: "₹2,399",
    images: [
      "/images/products/DABU-HERO-AI_6d535ce6-0c5b-4e51-a966-edb9e2e3c7ab.jpg",
      "/images/products/DABU-NEW-BACK-AI.jpg"
    ],
    badge: "Most Wanted",
    inStock: true,
    colors: ["Indigo Dabu", "Mud Brown"],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    description: "Authentic block-printed mud-resist Dabu artisan fabric formed over modern flexible corsetry. A defining statement of the Taanvi signature look.",
    details: [
      "Artisanal handcrafted mud-resist print",
      "Soft cotton lining against skin",
      "Lightweight flexi-boning through torso",
      "Lace-up back for custom cinch"
    ]
  },
  {
    id: "ishaya-skirt-set",
    slug: "ishaya-skirt-set",
    title: "Ishaya Skirt Co-Ord Set",
    category: "Sets",
    price: "₹3,049",
    originalPrice: "₹3,699",
    images: [
      "/images/products/hero_06104a0c-1d9b-49c0-b112-ab3175bfbc73.jpg",
      "/images/products/back_8023fd14-07bd-4ba5-8d20-05dd401ea9e7.jpg"
    ],
    badge: "New In",
    inStock: true,
    colors: ["Sunset Coral", "Mocha"],
    sizes: ["XS", "S", "M", "L"],
    description: "Structured wrap-around crop top styled effortlessly with a matching tiered sweep maxi skirt. Moves like poetry with every step.",
    details: [
      "Two-piece ensemble",
      "Tiered full-volume skirt with concealed zip",
      "Fully lined premium cotton mul",
      "Hand wash cold"
    ]
  },
  {
    id: "chashni-set",
    slug: "chashni-set",
    title: "Chashni Set",
    category: "Sets",
    price: "₹4,199",
    originalPrice: "₹5,199",
    images: [
      "/images/products/hero_919f9cc1-bc8a-42d4-becc-bf14ce45e25c.jpg",
      "/images/products/back_a04f0c57-eb5b-4e65-8cb1-6648a5c95a0e.jpg"
    ],
    badge: "Festive Bangers",
    inStock: true,
    colors: ["Syrup Gold", "Ivory Zari"],
    sizes: ["S", "M", "L", "XL"],
    description: "Lustrous festive coordination loaded with opulent textural motifs and intricate border work. Perfect for festive celebrations.",
    details: [
      "Woven zari accenting",
      "Includes tailored kurti top and matching flared pants",
      "Comfort fit with internal side zip",
      "Dry clean only"
    ]
  },
  {
    id: "aarti-top",
    slug: "aarti-top",
    title: "Aarti Top",
    category: "Tops",
    price: "₹2,699",
    originalPrice: "₹3,449",
    images: [
      "/images/products/hero_6ec2d54c-33c4-428a-9089-1206d2d77827.jpg",
      "/images/products/4_0d0805c7-4843-4d9c-a4b9-5d33ba810574.jpg"
    ],
    badge: "Sale",
    inStock: true,
    colors: ["Deep Emerald", "Noir"],
    sizes: ["XS", "S", "M", "L", "XL"],
    description: "An architectural top with clean geometric neck lines and an alluring sculpted back. Pair with palazzos or denim for high-fashion contrast.",
    details: [
      "Structured crepe touch",
      "Double lined for seamless opacity",
      "Signature brass hardware accents",
      "Dry clean"
    ]
  },
  {
    id: "payal-sheer-bandhani-kurti",
    slug: "payal-sheer-bandhani-kurti",
    title: "Payal Sheer Bandhani Kurti Top",
    category: "Kurtis",
    price: "₹2,299",
    originalPrice: "₹2,899",
    images: [
      "/images/products/payal-hero-AI.jpg",
      "/images/products/payal-back-AI.jpg"
    ],
    badge: "Most Wanted",
    inStock: true,
    colors: ["Midnight Blue", "Crimson"],
    sizes: ["XS", "S", "M", "L", "XL"],
    description: "Sheer organza hand-tied Bandhani with a playful contemporary peek-a-boo finish. Effortlessly chic over tonal bralettes.",
    details: [
      "Handcrafted Bandhani tie-dye dots",
      "Ultra-lightweight sheer organza",
      "Dramatic side slits",
      "Gentle cold hand wash"
    ]
  },
  {
    id: "umang-kurta",
    slug: "umang-kurta",
    title: "Umang Kurta",
    category: "Nisho Men",
    price: "₹2,549",
    originalPrice: "₹3,199",
    images: [
      "/images/products/hf_20260928_131331_bdd27980-e173-486f-a61b-ed892a43d841.png",
      "/images/products/hf_20260928_131320_16952cac-46ac-4a53-84c1-b7a7cea291c3.png"
    ],
    badge: "Nisho Men",
    inStock: true,
    colors: ["Ivory Raw", "Charcoal"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    description: "The redefined men's kurta. Clean asymmetric lines, refined mandarin collar, and raw edge textures tailored for the modern man.",
    details: [
      "100% fine slub cotton linen",
      "Front hidden placket with metal snap buttons",
      "Side in-seam pockets",
      "Machine wash cold"
    ]
  },
  {
    id: "ramta-top",
    slug: "ramta-top",
    title: "Ramta Top",
    category: "Tops",
    price: "₹2,549",
    originalPrice: "₹3,049",
    images: [
      "/images/products/hero_26db0295-89de-4fe4-ac51-b32691e355c3.jpg",
      "/images/products/back_b508b472-4050-4b75-9ecc-b34abc0029ac.jpg"
    ],
    badge: "Sale",
    inStock: true,
    colors: ["Clay Terracotta", "Olive"],
    sizes: ["XS", "S", "M", "L"],
    description: "Relaxed drape meet sharp asymmetrical tailoring. Features adjustable drawcord sides for versatile styling.",
    details: [
      "Pure textured handloom cotton",
      "Adjustable ruched drawstring sides",
      "Keyhole button back",
      "Hand wash separately"
    ]
  },
  {
    id: "sanedo-skirt",
    slug: "sanedo-skirt",
    title: "Sanedo Skirt",
    category: "Bottoms",
    price: "₹2,549",
    originalPrice: "₹3,199",
    images: [
      "/images/products/15.png",
      "/images/products/Sanedo_Back.png"
    ],
    badge: "New In",
    inStock: true,
    colors: ["Multi Folk", "Indigo Patch"],
    sizes: ["XS", "S", "M", "L", "XL"],
    description: "High-drama festive volume skirt infused with Gujarati folklore motifs and rich gathered flares. Dance-ready design.",
    details: [
      "Extensive 8-meter flare circumference",
      "Embroidered border hem with mirror accents",
      "Drawstring tie with handcrafted latkans",
      "Dry clean only"
    ]
  },
  {
    id: "jhanjhar-bandhani-corset-kurti",
    slug: "jhanjhar-bandhani-corset-kurti",
    title: "Jhanjhar Bandhani Corset Kurti Top",
    category: "Kurtis",
    price: "₹2,449",
    originalPrice: "₹3,049",
    images: [
      "/images/products/97.jpg",
      "/images/products/101.jpg"
    ],
    badge: "Most Wanted",
    inStock: true,
    colors: ["Rani Pink", "Electric Teal"],
    sizes: ["XS", "S", "M", "L", "XL"],
    description: "Bandhani tie-dye meets sculpted boning. Delivers impeccable bust support and waist cinching while honoring ancestral craft.",
    details: [
      "Authentic artisanal Bandhej",
      "12-point internal support boning",
      "Sweetheart neckline",
      "Concealed back zip"
    ]
  },
  {
    id: "saral-asymmetrical-tie-up-top",
    slug: "saral-asymmetrical-tie-up-top",
    title: "Saral Asymmetric Tie-Up Top",
    category: "Tops",
    price: "₹2,199",
    originalPrice: "₹2,699",
    images: [
      "/images/products/Saral_01_Hero-W5.jpg",
      "/images/products/Saral_03_Outdoor-Paris.jpg"
    ],
    badge: "New In",
    inStock: true,
    colors: ["Bone White", "Sage Green"],
    sizes: ["XS", "S", "M", "L"],
    description: "Minimalist ease redefined. Flowing diagonal panels with wrapped side ties allow customizable draped silhouettes.",
    details: [
      "Featherweight viscose linen blend",
      "Versatile wrap-around waist ties",
      "Asymmetric high-low handkerchief hem",
      "Hand wash cold"
    ]
  },
  {
    id: "moksha-halterneck-top",
    slug: "moksha-halterneck-top-1",
    title: "Moksha Halter Top",
    category: "Tops",
    price: "₹2,049",
    originalPrice: "₹2,649",
    images: [
      "/images/products/4_e57fb81e-5c42-42db-b72d-58d261689490.jpg",
      "/images/products/2_ec762f66-0373-4d2f-a519-7900f9825e4c.jpg"
    ],
    badge: "Most Wanted",
    inStock: true,
    colors: ["Golden Ochre", "Black Pearl"],
    sizes: ["XS", "S", "M", "L"],
    description: "Flattering cross-over halter top with backless silhouette and fluid front handkerchief drop. A summer staple.",
    details: [
      "High neck crossover design",
      "Open tie-back for effortless adjustment",
      "Double layered cotton mul",
      "Gentle cold wash"
    ]
  },
  {
    id: "jashn-full-sleeve-kurti",
    slug: "jashn-full-sleeve-kurti-1",
    title: "Jashn Full Sleeve Structured Kurti Top",
    category: "Kurtis",
    price: "₹2,799",
    originalPrice: "₹3,649",
    images: [
      "/images/products/3_7508d2e6-dd5b-4f7e-b1aa-43021eba3922.jpg",
      "/images/products/4_e77f742b-3dd2-4f8c-bd8a-b2c0bbc0cf09.jpg"
    ],
    badge: "Festive Bangers",
    inStock: true,
    colors: ["Royal Plum", "Ivory Silk"],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    description: "Opulent full-length sleeves with cuff detailing paired with a structured, waist-defining kurti torso. Perfect for festive evenings.",
    details: [
      "Embossed textured brocade",
      "Fitted sleeves with fabric button cuffs",
      "Deep back with stay-strap",
      "Dry clean only"
    ]
  },
  {
    id: "falguni-sleeved-kurti",
    slug: "falguni-sleeved-kurti",
    title: "Falguni Sleeved Kurti",
    category: "Kurtis",
    price: "₹2,549",
    originalPrice: "₹3,199",
    images: [
      "/images/products/7_a95eb3dc-1ac2-4e2f-b9d1-b9aeda72f248.jpg",
      "/images/products/9_9c8b0906-e0d8-4e4e-9c47-3236b48ec1fc.jpg"
    ],
    badge: "New In",
    inStock: true,
    colors: ["Amber Orange", "Wine"],
    sizes: ["XS", "S", "M", "L", "XL"],
    description: "Graceful bell sleeves paired with an elongated curved hemline. An everyday luxury designed for modern Indian sensibilities.",
    details: [
      "Flared bell sleeves with contrast piping",
      "Breathable combed cotton fabric",
      "Slits starting at natural waistline",
      "Machine wash gentle"
    ]
  },
  {
    id: "chunar-bralette",
    slug: "chunar-bralette",
    title: "Chunar Bralette",
    category: "Tops",
    price: "₹3,049",
    originalPrice: "₹3,699",
    images: [
      "/images/products/hero_7c74eb23-3d52-4638-be3e-4863c756b6bd.jpg",
      "/images/products/back_d3caeb2c-e3d7-4483-9f23-cdb3d062f67f.jpg"
    ],
    badge: "Sale",
    inStock: true,
    colors: ["Mirrored Silver", "Gold"],
    sizes: ["XS", "S", "M", "L"],
    description: "Hand-embellished mirror work bralette top. Wear under sheer kurtis or style boldly solo with a high-waisted lehenga or trousers.",
    details: [
      "Genuine handcrafted mirror work",
      "Padded cups for shape and comfort",
      "Smocked elastic back panel",
      "Dry clean only"
    ]
  },
  {
    id: "poo-t-shirt-kurti",
    slug: "poo-t-shirt-kurti-1",
    title: "Poo T-Shirt",
    category: "Tops",
    price: "₹2,199",
    originalPrice: "₹2,699",
    images: [
      "/images/products/POO-hero-AI_9c082303-57e9-4265-a566-276e19d520ee.jpg",
      "/images/products/POO-back-AI_f81e3138-e5bd-45e9-85be-823ef5b4df47.jpg"
    ],
    badge: "Most Wanted",
    inStock: true,
    colors: ["Heather Grey", "Vanilla"],
    sizes: ["XS", "S", "M", "L", "XL"],
    description: "The casual comfort of an oversized tee infused with ethnic side slit geometry. The ultimate modern fusion piece.",
    details: [
      "100% heavy 240 GSM organic cotton",
      "Ribbed crew neckline",
      "Reinforced high side slits",
      "Pre-shrunk, machine wash"
    ]
  },
  {
    id: "kum-kum-deep-back-kurti",
    slug: "kum-kum-deep-back-short-kurti",
    title: "Kum-Kum Open-Back Kurti Top",
    category: "Kurtis",
    price: "₹2,249",
    originalPrice: "₹2,699",
    images: [
      "/images/products/kumkum-hero-AI.jpg",
      "/images/products/kumkum-back-AI.jpg"
    ],
    badge: "Sale",
    inStock: true,
    colors: ["Kumkum Scarlet", "Kohl Black"],
    sizes: ["XS", "S", "M", "L", "XL"],
    description: "A head-turning open back accented with delicate cross ties. Cut in a flattering short length that pairs with everything.",
    details: [
      "Dramatic deep scoop back",
      "Reinforced neckline support",
      "Soft breathable cambric cotton",
      "Hand wash cold"
    ]
  },
  {
    id: "jharna-sheer-short-kurti",
    slug: "jharna-sheer-short-kurti",
    title: "Jharna Sheer Short Kurti",
    category: "Kurtis",
    price: "₹2,199",
    originalPrice: "₹2,949",
    images: [
      "/images/products/1_efe88a2c-e8ef-4509-a657-b22685546a6c.jpg",
      "/images/products/2_eaa97b11-b452-43f1-a80c-7a03f761f57b.jpg"
    ],
    badge: "New In",
    inStock: true,
    colors: ["Crystal Ivory", "Sheer Blush"],
    sizes: ["XS", "S", "M", "L"],
    description: "Water-like translucence. Floats around the body with ethereal lightweight organza transparency and fine rolled hem finishes.",
    details: [
      "Fine semi-sheer weave",
      "Lightweight structured collar",
      "Side vents for easy mobility",
      "Dry clean recommended"
    ]
  },
  {
    id: "roshni-kaftan-kurti",
    slug: "roshni-kaftan-kurti",
    title: "Roshni Kaftan Structured Kurti Top",
    category: "Kurtis",
    price: "₹2,399",
    originalPrice: "₹3,149",
    images: [
      "/images/products/1_0b1eea70-b28e-4129-a069-e22297fbcf0f.jpg",
      "/images/products/2_4f750044-fdb5-4a48-a31f-7b6e63be0a75.jpg"
    ],
    badge: "Sale",
    inStock: true,
    colors: ["Sunbeam Yellow", "Rust Ochre"],
    sizes: ["One Size Fits Most (XS-XXL)"],
    description: "Flowy breezy kaftan sleeves anchored by an inner waist-cinching tie that gives an instantly flattering hourglass contour.",
    details: [
      "Internal cinchable waist tie",
      "V-neckline with delicate metallic trim",
      "Comfort fit all body shapes",
      "Hand wash cold"
    ]
  },
  {
    id: "astha-corset-kurti",
    slug: "astha-corset-kurti",
    title: "Astha Corset Kurti",
    category: "Kurtis",
    price: "₹2,199",
    originalPrice: "₹2,949",
    images: [
      "/images/products/astha-hero-ai.jpg",
      "/images/products/astha-back-ai.jpg"
    ],
    badge: "Most Wanted",
    inStock: true,
    colors: ["Earthy Terracotta", "Indigo"],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    description: "Taanvi's acclaimed heritage corset kurti. Designed to hold shape while offering unprecedented breathing ease and movement.",
    details: [
      "Sculpted corset bodice with soft boning",
      "Adjustable lace-up back",
      "Handcrafted woodblock print",
      "Dry clean or gentle cold wash"
    ]
  },
  {
    id: "gunika-asymmetric-top",
    slug: "gunika-asymmetric-top",
    title: "Gunika Asymmetric Structured Top",
    category: "Tops",
    price: "₹2,449",
    originalPrice: "₹3,049",
    images: [
      "/images/products/4_5518b8af-426f-465c-8f3e-2feb882ef0c2.jpg",
      "/images/products/whitepant-hero-AI.jpg"
    ],
    badge: "New In",
    inStock: true,
    colors: ["Noir", "Raw Linen"],
    sizes: ["XS", "S", "M", "L", "XL"],
    description: "Sharp architectural lines meeting fluid artisan draping. Structured collar with an avant-garde diagonal hemline.",
    details: [
      "Structured Japanese crepe fabric",
      "Asymmetrical drop hem",
      "Invisible side zip closure",
      "Dry clean only"
    ]
  },
  {
    id: "yami-corset-kurti",
    slug: "yami-corset-kurti",
    title: "Yami Corset Kurti",
    category: "Kurtis",
    price: "₹2,649",
    originalPrice: "₹3,449",
    images: [
      "/images/products/4_763c3110-f508-47a1-ab78-4f8366b8d18d.jpg",
      "/images/products/BEIGEPANTS-HERO-AI.jpg"
    ],
    badge: "Sale",
    inStock: true,
    colors: ["Midnight Obsidian", "Copper"],
    sizes: ["XS", "S", "M", "L", "XL"],
    description: "Dark, moody, and undeniably striking. Form-fitting boned corset kurti with delicate contrast stitching details.",
    details: [
      "Deep sweetheart neckline",
      "Stitched channel flexible boning",
      "Double lining for full opacity",
      "Dry clean recommended"
    ]
  }
];

export const HOME_COLLECTIONS = [
  {
    id: "new-in",
    title: "New In",
    subtitle: "Fresh silhouettes just arrived in the atelier",
    products: PRODUCTS.slice(0, 8),
    banner: {
      image: "/images/banners/navratri_launch.jpg",
      alt: "Navratri & Festive Launch",
      title: "NAVRATRI & FESTIVE LAUNCH"
    }
  },
  {
    id: "most-wanted",
    title: "Most Wanted",
    subtitle: "The cult favorites and most coveted silhouettes",
    products: PRODUCTS.slice(8, 16),
    banner: {
      image: "/images/banners/most_wanted.jpg",
      alt: "Most Wanted Collection",
      title: "MOST WANTED"
    }
  },
  {
    id: "festive-bangers",
    title: "Festive Bangers",
    subtitle: "High impact opulence for the season of joy",
    products: PRODUCTS.slice(2, 10),
    banner: {
      image: "/images/banners/festive.jpg",
      alt: "Festive Bangers Collection",
      title: "FESTIVE BANGERS"
    }
  },
  {
    id: "curated-tops",
    title: "Curated Tops",
    subtitle: "Modern corsets, halters and statement tunics",
    products: PRODUCTS.filter(p => p.category === "Tops" || p.category === "Kurtis").slice(0, 6),
    banner: {
      image: "/images/banners/curated_tops.jpg",
      alt: "Curated Tops Collection",
      title: "CURATED TOPS"
    }
  },
  {
    id: "all-eyes-on-sets",
    title: "All Eyes On Sets",
    subtitle: "Effortless styling in matched co-ord sets",
    products: PRODUCTS.filter(p => p.category === "Sets" || p.category === "Bottoms").slice(0, 6),
    banner: {
      image: "/images/banners/curated_sets.jpg",
      alt: "Curated Sets & Bottoms",
      title: "CO-ORD SETS & PANTS"
    }
  }
];
