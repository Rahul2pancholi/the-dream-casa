export type PortfolioProject = {
  slug: string;
  title: string;
  subtitle: string;
  client: string;
  location: string;
  type: string;
  coverImage: string;
  concept: {
    title: string;
    description: string;
  };
  palette: { name: string; color: string }[];
  materials: { name: string; use: string }[];
  spaces: {
    id: string;
    number: string;
    name: string;
    dimensions: string;
    highlights: string[];
    images: string[];
  }[];
  floorPlan: string;
  conceptImage: string;
};

export const portfolioProjects: PortfolioProject[] = [
  {
    slug: "eklavya",
    title: "Eklavya — 3BHK Residence",
    subtitle: "3D Design Presentation",
    client: "Mr. Rajesh Jain",
    location: "Ahmedabad",
    type: "3BHK Apartment",
    coverImage: "/images/eklavya/image-8-1.jpg",
    concept: {
      title: "Modern Organic, Earthy & Timeless",
      description:
        "The entire flat was designed in 3D with a contemporary architectural language — soft, rounded edges throughout, blending an earthy material palette with a sophisticated, restrained colour story for a calm, characterful home.",
    },
    palette: [
      { name: "Warm White", color: "#F5F0E8" },
      { name: "Oatmeal", color: "#D4C4A8" },
      { name: "Greige", color: "#B8A99A" },
      { name: "Warm Taupe", color: "#8B7355" },
      { name: "Mocha Sage", color: "#7A8B72" },
      { name: "Green Stone", color: "#5C6B5E" },
    ],
    materials: [
      { name: "Oak Wood Veneer", use: "Wardrobes & bed panelling" },
      { name: "Sage Green Laminate", use: "Kitchen cabinetry" },
      { name: "Terracotta Textured Plaster", use: "Entry feature wall" },
      { name: "Brushed Brass Hardware", use: "Handles & fixtures" },
      { name: "Carrara Marble", use: "Side tables & counters" },
      { name: "Boucle & Linen Upholstery", use: "Sofa & lounge chairs" },
      { name: "Rattan & Cane Weave", use: "Chairs & accents" },
      { name: "Brushed Mocha Stone", use: "Accent flooring" },
    ],
    spaces: [
      {
        id: "foyer",
        number: "01",
        name: "Foyer & Entry",
        dimensions: "5'-6\" × 9'-3\"",
        highlights: ["Entry Wall", "Foyer Feature Wall", "Arched Niche Passage"],
        images: [
          "/images/eklavya/image-8-1.jpg",
          "/images/eklavya/image-8-2.jpg",
        ],
      },
      {
        id: "living",
        number: "02",
        name: "Living & Dining",
        dimensions: "13'-3\" × 21'-0\"",
        highlights: ["TV Unit", "Sofa Seating"],
        images: [
          "/images/eklavya/image-10-1.jpg",
          "/images/eklavya/image-10-2.jpg",
          "/images/eklavya/image-11-1.jpg",
          "/images/eklavya/image-11-2.jpg",
        ],
      },
      {
        id: "kitchen",
        number: "03",
        name: "Kitchen",
        dimensions: "13'-0\" × 11'-3\"",
        highlights: [
          "Breakfast Table",
          "Sage Cabinetry & Counter",
          "Tall Units & Appliance Wall",
        ],
        images: [
          "/images/eklavya/image-14-1.jpg",
          "/images/eklavya/image-15-1.jpg",
          "/images/eklavya/image-15-2.jpg",
        ],
      },
      {
        id: "guest",
        number: "04",
        name: "Guest Bedroom",
        dimensions: "11'-9\" × 15'-9\"",
        highlights: ["Bed Wall", "TV Unit"],
        images: [
          "/images/eklavya/image-18-1.jpg",
          "/images/eklavya/image-18-2.jpg",
        ],
      },
      {
        id: "master-1",
        number: "05",
        name: "Master Bedroom — 1",
        dimensions: "20'-0\" × 12'-0\"",
        highlights: ["Bed Wall", "Study Corner", "Wardrobe & Walk-in Closet"],
        images: [
          "/images/eklavya/image-21-1.jpg",
          "/images/eklavya/image-22-1.jpg",
          "/images/eklavya/image-23-1.jpg",
          "/images/eklavya/image-23-2.jpg",
        ],
      },
      {
        id: "master-2",
        number: "06",
        name: "Master Bedroom — 2",
        dimensions: "20'-6\" × 10'-9\"",
        highlights: ["Bed Wall", "Study Nook", "Wardrobe & Walk-in Closet"],
        images: [
          "/images/eklavya/image-26-1.jpg",
          "/images/eklavya/image-27-1.jpg",
          "/images/eklavya/image-28-1.jpg",
          "/images/eklavya/image-28-2.jpg",
        ],
      },
    ],
    floorPlan: "/images/eklavya/image-5-1.jpg",
    conceptImage: "/images/eklavya/image-3-1.jpg",
  },
];

export function getProject(slug: string) {
  return portfolioProjects.find((p) => p.slug === slug);
}
