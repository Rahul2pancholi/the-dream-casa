export type Service = {
  slug: string;
  title: string;
  shortTitle: string;
  tagline: string;
  description: string;
  features: string[];
  image: string;
  icon: string;
};

export const services: Service[] = [
  {
    slug: "full-home-design",
    shortTitle: "Full Home Design",
    title: "Full Home Interior Design",
    tagline: "Every room. Every detail. One vision.",
    description:
      "From entry to terrace, we design every space in your home as a unified whole — ensuring each room flows seamlessly into the next. Our full-home packages include space planning, 3D visualisation, material selection, and complete execution management.",
    features: [
      "Detailed space planning & layout",
      "Photorealistic 3D renders for every room",
      "Material, finish & furniture curation",
      "Vendor coordination & procurement",
      "On-site execution supervision",
      "Final styling & handover",
    ],
    image: "/images/eklavya/image-21-1.jpg",
    icon: "home",
  },
  {
    slug: "modular-kitchen",
    shortTitle: "Modular Kitchen",
    title: "Modular Kitchen Design",
    tagline: "Beautiful kitchens that work as hard as they look.",
    description:
      "We design modular kitchens that balance aesthetics with ergonomics — maximising storage, workflow, and style in every square foot. From sleek parallel kitchens to open-plan islands, every kitchen is custom-crafted for your space and lifestyle.",
    features: [
      "Custom modular cabinet design",
      "Smart storage & pull-out solutions",
      "Premium laminates, lacquers & stone counters",
      "Tall units & appliance integration",
      "Backsplash & lighting design",
      "Brand-independent material sourcing",
    ],
    image: "/images/eklavya/image-14-1.jpg",
    icon: "kitchen",
  },
  {
    slug: "wardrobe-storage",
    shortTitle: "Wardrobe & Storage",
    title: "Wardrobe & Storage Design",
    tagline: "A place for everything, beautifully so.",
    description:
      "We design built-in wardrobes, walk-in closets, and custom storage that bring order and elegance to your home. Every wardrobe is tailored to your garment collection, habits, and the proportions of your room.",
    features: [
      "Sliding, hinged & open wardrobe design",
      "Walk-in closet planning & design",
      "Dresser, vanity & mirror integration",
      "Internal organisation & pull-out fittings",
      "Premium finish options",
      "Loft & under-bed storage solutions",
    ],
    image: "/images/eklavya/image-23-1.jpg",
    icon: "wardrobe",
  },
  {
    slug: "3d-visualisation",
    shortTitle: "3D Visualisation",
    title: "3D Interior Visualisation",
    tagline: "See your home before it exists.",
    description:
      "Our photorealistic 3D renders let you experience your future home in full detail — materials, light, furniture, and colour — before a single penny is spent on execution. Revise freely and sign off with complete confidence.",
    features: [
      "Room-by-room 3D renders",
      "Multiple camera angles per space",
      "Accurate material & texture mapping",
      "Lighting simulation (natural & artificial)",
      "Walkthroughs & turntable views",
      "Unlimited revision rounds before approval",
    ],
    image: "/images/eklavya/image-10-1.jpg",
    icon: "3d",
  },
  {
    slug: "living-room",
    shortTitle: "Living Room",
    title: "Living Room Design",
    tagline: "Where every home begins.",
    description:
      "The living room sets the tone for your entire home. We design living spaces that are inviting, characterful, and effortlessly functional — with curated furniture, statement walls, lighting design, and artwork placement.",
    features: [
      "Furniture layout & sourcing",
      "TV unit & wall panel design",
      "Sofa, rug & accent selection",
      "Ambient, accent & task lighting",
      "False ceiling & architectural details",
      "Decor & art curation",
    ],
    image: "/images/eklavya/image-11-1.jpg",
    icon: "sofa",
  },
  {
    slug: "bedroom-design",
    shortTitle: "Bedroom Design",
    title: "Bedroom Interior Design",
    tagline: "Rest, restored.",
    description:
      "We design bedrooms that are deeply personal sanctuaries — calm, beautiful, and tailored to exactly how you rest and live. Every bed wall, wardrobe, and lighting scheme is designed as a considered whole.",
    features: [
      "Bed wall & panelling design",
      "Wardrobe & dressing area planning",
      "Bespoke headboard design",
      "Lighting: ambient, bedside & task",
      "Upholstery, linen & window treatment",
      "Study nook & seating design",
    ],
    image: "/images/eklavya/image-26-1.jpg",
    icon: "bed",
  },
];

export function getService(slug: string) {
  return services.find((s) => s.slug === slug);
}
