export interface ProductSpec {
  label: string;
  value: string;
}

export interface ProductFeature {
  icon: string;
  title: string;
  description: string;
}

export interface ProductImage {
  src: string;
  alt: string;
  caption?: string;
}

export interface GuaranteeInfo {
  years: number;
  headline: string;
  description: string;
}

export interface Product {
  id: string;
  name: string;
  tagline: string;
  description: string;
  price: number;
  originalPrice?: number;
  currency: string;
  rating: number;
  reviewCount: number;
  inStock: boolean;
  badge?: string;
  images: ProductImage[];
  features: ProductFeature[];
  specs: ProductSpec[];
  guarantee: GuaranteeInfo;
  shopLink: string;
}

export const PESOMA_PRODUCT: Product = {
  id: "pesoma-organizer",
  name: "PESOMA Organizer",
  tagline: "Smarter Spaces. Elevated Living.",
  description:
    "The PESOMA Under Sink Organizer is a 2-tier, fully expandable cabinet shelf designed to reclaim every inch of your kitchen, bathroom, or pantry. Built with a carbon stainless steel frame and removable panels, it adapts to any cabinet with zero tools required.",
  price: 1299,
  originalPrice: 1899,
  currency: "₹",
  rating: 4.8,
  reviewCount: 2847,
  inStock: true,
  badge: "Best Seller",
  images: [
    {
      src: "/assets/generated/pesoma-hero.jpg",
      alt: "PESOMA Under Sink Organizer - 2-Tier Expandable",
      caption: "2-Tier Expandable Design",
    },
    {
      src: "/assets/generated/pesoma-kitchen.jpg",
      alt: "PESOMA Organizer in kitchen cabinet",
      caption: "Perfect for Kitchen",
    },
    {
      src: "/assets/generated/pesoma-bathroom.jpg",
      alt: "PESOMA Organizer in bathroom",
      caption: "Bathroom & Vanity",
    },
  ],
  features: [
    {
      icon: "Expand",
      title: "Expandable Width",
      description:
        "Adjusts from 38cm to 65cm to fit virtually any cabinet or under-sink space without cutting or drilling.",
    },
    {
      icon: "Layers",
      title: "2-Tier Storage",
      description:
        "Double-deck design doubles your usable space — top shelf for bottles, lower tier for bulkier items.",
    },
    {
      icon: "Shield",
      title: "Carbon Steel Frame",
      description:
        "Rust-resistant carbon stainless steel construction supports up to 15 kg across both tiers.",
    },
    {
      icon: "Grid3x3",
      title: "Removable Panels",
      description:
        "Side panels and dividers detach in seconds for custom configurations and easy deep cleaning.",
    },
    {
      icon: "Hook",
      title: "Integrated Hooks",
      description:
        "Built-in hanging hooks on the side panels for sponges, mitts, spray bottles, and more.",
    },
    {
      icon: "Sparkles",
      title: "No-Scratch Feet",
      description:
        "Rubberized non-slip feet protect cabinet floors and keep the organizer perfectly stable.",
    },
  ],
  specs: [
    { label: "Material", value: "Carbon Stainless Steel" },
    { label: "Width (adjustable)", value: "38 cm – 65 cm" },
    { label: "Height", value: "34 cm" },
    { label: "Depth", value: "28 cm" },
    { label: "Max Load", value: "15 kg" },
    { label: "Tiers", value: "2" },
    { label: "Finish", value: "Matte Grey" },
    { label: "Assembly", value: "Tool-free" },
  ],
  guarantee: {
    years: 3,
    headline: "3-Year Guarantee",
    description:
      "We stand behind every PESOMA product with a full 3-year guarantee against manufacturing defects. If anything goes wrong, we make it right — no questions asked.",
  },
  shopLink: "https://homeessentials.in",
};
