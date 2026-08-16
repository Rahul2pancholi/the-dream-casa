export type ProjectType = "3d_render" | "completed_site" | "video_walkthrough";
export type RoomCategory = "living_kitchen" | "master_bedroom" | "present_room" | "kids_room" | "turnkey_site" | "walkthrough";
export type ServiceCategory = "residential" | "commercial" | "turnkey" | "hospitality";

export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  type: ProjectType;
  typeLabel: string;
  roomCategory: RoomCategory;
  serviceCategory: ServiceCategory;
  image: string;
  videoUrl?: string;
  isPopularVideo?: boolean;
  gallery: string[];
  description: string;
  specs: {
    location?: string;
    style?: string;
    area?: string;
    timeline?: string;
  };
  scopeOfWork?: string[];
  challenge?: string;
  solution?: string;
}

export const ROOM_CATEGORIES = [
  { id: "all", label: "All Portfolio" },
  { id: "residential", label: "Residential Interiors" },
  { id: "commercial", label: "Commercial Interiors" },
  { id: "turnkey", label: "Turnkey Executions" },
  { id: "hospitality", label: "Hospitality & Lounges" },
  { id: "videos", label: "🎥 Video Walkthroughs" },
  { id: "3d_renders", label: "3D Renders" },
] as const;

export const videoWalkthroughs = [
  {
    id: "video-walkthrough-1",
    title: "Eklavya Tower Site Walkthrough",
    subtitle: "Complete Living Room & Kitchen Tour",
    videoUrl: "/videos/site-walkthrough-1.mp4",
    poster: "/images/eklavya/image-11-1.jpg",
    duration: "0:45",
    location: "Eklavya Tower, Indore",
    description: "Live on-site video walkthrough showcasing high-gloss ceiling lights, customized veneer paneling, and open kitchen layout.",
  },
  {
    id: "video-walkthrough-2",
    title: "Master Suite & Bedroom Finishing",
    subtitle: "Turnkey Execution & Fit-out Inspection",
    videoUrl: "/videos/site-walkthrough-2.mp4",
    poster: "/images/projects/master-bedroom-01.jpg",
    duration: "1:12",
    location: "Vijay Nagar, Indore",
    description: "In-depth video tour of finished master bedroom wardrobes, bedside pendant lighting, acoustic headboard, and hidden bath door.",
  },
  {
    id: "video-walkthrough-3",
    title: "Living Lounge & Media Wall Execution",
    subtitle: "Real Site Video Transformation",
    videoUrl: "/videos/site-walkthrough-3.mp4",
    poster: "/images/projects/living-kitchen-02.jpg",
    duration: "0:58",
    location: "Super Corridor, Indore",
    description: "Detailed video walk-through highlighting statement curved sofa seating, brass metal strips, and warm linear lighting.",
  },
  {
    id: "video-walkthrough-4",
    title: "Full Residence On-Site Video Showcase",
    subtitle: "End-to-End Turnkey Delivery",
    videoUrl: "/videos/site-walkthrough-4.mp4",
    poster: "/images/eklavya/image-18-1.jpg",
    duration: "2:05",
    location: "Palasia, Indore",
    description: "Comprehensive walkthrough of a fully executed 3BHK penthouse with custom furniture, false ceiling detailing, and marble flooring.",
  },
  {
    id: "video-walkthrough-5",
    title: "Parents Suite & Guest Lounge Tour",
    subtitle: "Finished Interior Walkthrough",
    videoUrl: "/videos/site-walkthrough-5.mp4",
    poster: "/images/projects/present-room-01.jpg",
    duration: "0:50",
    location: "Bicholi Mardana, Indore",
    description: "Smooth video tour of warm wooden wall panelling, comfortable seating layout, and ambient indirect cove lighting.",
  },
  {
    id: "video-walkthrough-6",
    title: "Signature Penthouse Grand Walkthrough",
    subtitle: "Executive Luxury Turnkey Project",
    videoUrl: "/videos/site-walkthrough-6.mp4",
    poster: "/images/eklavya/image-22-1.jpg",
    duration: "3:15",
    location: "Saket Nagar, Indore",
    description: "Premium site walkthrough video showing entrance foyer, dining chandelier, modular kitchen Island, and custom master bedrooms.",
  },
  {
    id: "video-walkthrough-7",
    title: "Dining & Bar Cabinet Execution",
    subtitle: "Custom Woodwork & Glass Cabinetry",
    videoUrl: "/videos/site-walkthrough-7.mp4",
    poster: "/images/projects/living-kitchen-11.jpg",
    duration: "0:40",
    location: "Yeshwant Niwas Rd, Indore",
    description: "Short video feature focusing on warm LED glass display cabinets, marble dining table top, and designer cutlery unit.",
  },
  {
    id: "video-purti-jain",
    title: "Client Residence Video Experience",
    subtitle: "Handover & Happy Client Walkthrough",
    videoUrl: "/videos/purti-jain-video.mp4",
    poster: "/images/projects/living-kitchen-04.jpg",
    duration: "1:45",
    location: "Indore, MP",
    description: "Complete walkthrough video of client residence delivered by Founder Poorti Jain and The Dream Casa team with fine craftsmanship.",
  },
];

export const projectsData: ProjectItem[] = [
  {
    id: "site-video-walkthrough-main",
    title: "Signature Penthouse Site Walkthrough",
    subtitle: "On-Site Live Video Tour & Turnkey Delivery",
    category: "Video Walkthrough",
    type: "video_walkthrough",
    typeLabel: "Live Site Video",
    roomCategory: "walkthrough",
    serviceCategory: "turnkey",
    image: "/images/eklavya/image-11-1.jpg",
    videoUrl: "/videos/site-walkthrough-6.mp4",
    isPopularVideo: true,
    gallery: [
      "/images/eklavya/image-29-1.png",
      "/images/eklavya/image-1-1.png",
      "/images/eklavya/image-11-1.jpg",
      "/images/eklavya/image-15-1.jpg",
    ],
    description:
      "Take a live video walkthrough inside our completed luxury penthouse project in Indore. Watch real execution details, high-gloss lacquer wardrobes, ambient LED cove ceilings, and custom furniture.",
    specs: {
      location: "Saket Nagar, Indore",
      style: "Ultra-Luxury Modern",
      area: "3,200 sq.ft",
      timeline: "Completed Site",
    },
  },
  {
    id: "kids-room-3d-concept",
    title: "Playful Kids Bedroom Suite",
    subtitle: "3D Interior Design Concept & Storage Plan",
    category: "Residential Interiors",
    type: "3d_render",
    typeLabel: "3D Design Concept",
    roomCategory: "kids_room",
    serviceCategory: "residential",
    image: "/images/kids-room/kids-room-01.png",
    gallery: [
      "/images/kids-room/kids-room-01.png",
      "/images/kids-room/kids-room-02.png",
      "/images/kids-room/kids-room-03.png",
      "/images/kids-room/kids-room-04.png",
    ],
    description:
      "A cheerful, functional kids' bedroom featuring a calming blue palette, built-in study and display shelving, a comfortable daybed, and soft blackout blinds for a room that grows with the child.",
    specs: {
      location: "Indore",
      style: "Playful Modern",
      area: "180 sq.ft",
      timeline: "Design Phase Complete",
    },
  },
  {
    id: "living-kitchen-3d-concept",
    title: "Contemporary Living & Modular Kitchen",
    subtitle: "3D Architectural Visualization & Design Plan",
    category: "Residential Interiors",
    type: "3d_render",
    typeLabel: "3D Design Concept",
    roomCategory: "living_kitchen",
    serviceCategory: "residential",
    image: "/images/projects/living-kitchen-01.jpg",
    gallery: [
      "/images/projects/living-kitchen-01.jpg",
      "/images/projects/living-kitchen-02.jpg",
      "/images/projects/living-kitchen-03.jpg",
      "/images/projects/living-kitchen-04.jpg",
      "/images/projects/living-kitchen-05.jpg",
      "/images/projects/living-kitchen-06.jpg",
      "/images/projects/living-kitchen-07.jpg",
      "/images/projects/living-kitchen-08.jpg",
      "/images/projects/living-kitchen-10.jpg",
      "/images/projects/living-kitchen-11.jpg",
      "/images/projects/living-kitchen-12.jpg",
    ],
    description:
      "A complete photorealistic 3D render breakdown featuring open-concept living, custom accent media wall, marble-top dining setup, and seamless modular kitchen layout designed for luxury modern living.",
    specs: {
      location: "Vijay Nagar, Indore",
      style: "Modern Minimalist",
      area: "1,850 sq.ft",
      timeline: "Design Phase Complete",
    },
  },
  {
    id: "master-bedroom-3d-concept",
    title: "Luxury Master Bedroom Suite",
    subtitle: "3D Interior Design Concept & Lighting Plan",
    category: "Residential Interiors",
    type: "3d_render",
    typeLabel: "3D Design Concept",
    roomCategory: "master_bedroom",
    serviceCategory: "residential",
    image: "/images/projects/master-bedroom-01.jpg",
    gallery: [
      "/images/projects/master-bedroom-01.jpg",
      "/images/projects/master-bedroom-02.jpg",
      "/images/projects/master-bedroom-03.jpg",
    ],
    description:
      "Serene master suite featuring full-height acoustic upholstered headboard panels, ambient hidden cove ceiling lights, custom wardrobe, and integrated vanity console.",
    specs: {
      location: "Palasia, Indore",
      style: "Modern Warm Elegance",
      area: "420 sq.ft",
      timeline: "Design Phase Complete",
    },
  },
  {
    id: "present-room-3d-concept",
    title: "Parents Suite & Restful Haven",
    subtitle: "3D Concept Render & Material Palette",
    category: "Residential Interiors",
    type: "3d_render",
    typeLabel: "3D Design Concept",
    roomCategory: "present_room",
    serviceCategory: "residential",
    image: "/images/projects/present-room-01.jpg",
    gallery: [
      "/images/projects/present-room-01.jpg",
      "/images/projects/present-room-02.jpg",
      "/images/projects/present-room-03.jpg",
    ],
    description:
      "Thoughtfully curated bedroom space for senior family members, featuring warm wooden wall panelling, soft neutral fabrics, easy-access side storage, and clutter-free zoning.",
    specs: {
      location: "Bicholi Mardana, Indore",
      style: "Warm Classic Neutral",
      area: "350 sq.ft",
      timeline: "Design Phase Complete",
    },
  },
  {
    id: "eklavya-residence-execution",
    title: "Eklavya Luxury Residence",
    subtitle: "Turnkey Interior Site Execution & Fit-out",
    category: "Turnkey Projects",
    type: "completed_site",
    typeLabel: "Completed Turnkey Site",
    roomCategory: "turnkey_site",
    serviceCategory: "turnkey",
    image: "/images/eklavya/image-21-1.jpg",
    videoUrl: "/videos/site-walkthrough-4.mp4",
    gallery: [
      "/images/eklavya/image-1-1.png",
      "/images/eklavya/image-10-1.jpg",
      "/images/eklavya/image-10-2.jpg",
      "/images/eklavya/image-11-1.jpg",
      "/images/eklavya/image-11-2.jpg",
      "/images/eklavya/image-13-1.jpg",
      "/images/eklavya/image-14-1.jpg",
      "/images/eklavya/image-15-1.jpg",
      "/images/eklavya/image-18-1.jpg",
      "/images/eklavya/image-21-1.jpg",
      "/images/eklavya/image-22-1.jpg",
      "/images/eklavya/image-23-1.jpg",
      "/images/eklavya/image-26-1.jpg",
      "/images/eklavya/image-27-1.jpg",
      "/images/eklavya/image-29-1.png",
    ],
    description:
      "Full turnkey execution of the Eklavya luxury apartment project. Delivered on time with custom woodwork, imported marble flooring, acoustic ceilings, and handpicked soft furnishings.",
    specs: {
      location: "Eklavya Tower, Indore",
      style: "Luxury Turnkey Interior",
      area: "2,400 sq.ft",
      timeline: "Delivered in 90 Days",
    },
    scopeOfWork: [
      "False ceiling & lighting design",
      "Custom veneer wall paneling",
      "Modular kitchen execution",
      "Electrical & switchgear",
      "Custom furniture & wardrobes",
      "Flooring & tile work",
      "Décor & styling",
    ],
    challenge:
      "The client wanted an open, airy layout that felt luxurious without being overwhelming — practical for a family of four but visually impressive.",
    solution:
      "We designed a warm contemporary palette anchored by custom veneer panels and layered lighting. Every storage solution was integrated invisibly into the design so the space felt uncluttered and spacious.",
  },
  {
    id: "living-lounge-render",
    title: "Statement Living Lounge",
    subtitle: "Curved Seating & Accent Lighting 3D Concept",
    category: "Residential Interiors",
    type: "3d_render",
    typeLabel: "3D Design Concept",
    roomCategory: "living_kitchen",
    serviceCategory: "residential",
    image: "/images/projects/living-kitchen-02.jpg",
    gallery: [
      "/images/projects/living-kitchen-02.jpg",
      "/images/projects/living-kitchen-04.jpg",
      "/images/projects/living-kitchen-05.jpg",
    ],
    description:
      "Sophisticated living area featuring curved custom sofa layout, brass trim detailing, soft recessed tray ceilings, and floor-to-ceiling drapery.",
    specs: {
      location: "Super Corridor, Indore",
      style: "Neo-Classical Modern",
      area: "650 sq.ft",
      timeline: "Design Phase",
    },
  },
  {
    id: "master-bedroom-vanity-render",
    title: "Executive Master Bedroom Suite",
    subtitle: "Wood Fluted Panelling & Wardrobe Detail",
    category: "Residential Interiors",
    type: "3d_render",
    typeLabel: "3D Design Concept",
    roomCategory: "master_bedroom",
    serviceCategory: "residential",
    image: "/images/projects/master-bedroom-02.jpg",
    gallery: [
      "/images/projects/master-bedroom-02.jpg",
      "/images/projects/master-bedroom-03.jpg",
      "/images/projects/master-bedroom-01.jpg",
    ],
    description:
      "Detailed view of custom tinted mirror glass wardrobes, warm LED linear lights, integrated vanity desk, and plush king bed backdrop.",
    specs: {
      location: "Yeshwant Niwas Rd, Indore",
      style: "Luxury Hotel Style",
      area: "400 sq.ft",
      timeline: "Design Phase",
    },
  },
  {
    id: "eklavya-living-execution",
    title: "Eklavya Site Execution - Living Space",
    subtitle: "Real On-Site Finishing & Custom Millwork",
    category: "Turnkey Projects",
    type: "completed_site",
    typeLabel: "Real Site Photo & Video",
    roomCategory: "turnkey_site",
    serviceCategory: "turnkey",
    image: "/images/eklavya/image-11-1.jpg",
    videoUrl: "/videos/site-walkthrough-1.mp4",
    gallery: [
      "/images/eklavya/image-11-1.jpg",
      "/images/eklavya/image-11-2.jpg",
      "/images/eklavya/image-13-2.jpg",
      "/images/eklavya/image-15-2.jpg",
    ],
    description:
      "Actual photograph & video walkthrough captured during final quality audit of Eklavya living hall, highlighting pristine wall molding, flawless ceiling finish, and custom lighting fixtures.",
    specs: {
      location: "Eklavya Tower, Indore",
      style: "Turnkey Execution",
      area: "750 sq.ft",
      timeline: "Completed",
    },
    scopeOfWork: [
      "Living & dining interior",
      "Master bedroom suite",
      "False ceiling throughout",
      "Custom wardrobe units",
      "Lighting design",
      "Paint & finish selection",
    ],
    challenge:
      "Balancing a modern aesthetic with the client's preference for warm, homely materials in a compact 3BHK layout.",
    solution:
      "Layered warm tones with selective use of wood veneer and integrated storage to maximize the sense of space without sacrificing comfort.",
  },
  {
    id: "parents-bedroom-view-02",
    title: "Parents Bedroom Accent Wall",
    subtitle: "Soft Fabric Wall Panels & Bedside Lighting",
    category: "Residential Interiors",
    type: "3d_render",
    typeLabel: "3D Design Concept",
    roomCategory: "present_room",
    serviceCategory: "residential",
    image: "/images/projects/present-room-02.jpg",
    gallery: [
      "/images/projects/present-room-02.jpg",
      "/images/projects/present-room-03.jpg",
      "/images/projects/present-room-01.jpg",
    ],
    description:
      "Focused 3D render highlighting bed-back wall Treatment, textured wallpaper, integrated reading pendants, and concealed AC pelmet detail.",
    specs: {
      location: "Vijay Nagar, Indore",
      style: "Contemporary Warm",
      area: "320 sq.ft",
      timeline: "Design Phase",
    },
  },
];
