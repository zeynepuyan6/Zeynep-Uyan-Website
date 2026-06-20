export const profile = {
  name: "Zeynep Uyan",
  role: "Graphic Designer & Brand Strategist",
  tagline: "I design visual identities that reflect the core values of small businesses and individuals.",
  location: "İstanbul, Türkiye",
  email: "zeynep.uyan@ozu.edu.tr",
  phone: "+90 544 529 50 69",
  linkedin: "https://www.linkedin.com/in/zeynep-uyan-ba53aa264/",
};

export const skills = [
  { name: "Adobe Photoshop", level: 78, group: "Design" },
  { name: "Adobe Illustrator", level: 80, group: "Design" },
  { name: "Brand Identity", level: 85, group: "Design" },
  { name: "Social Media Content", level: 90, group: "Communication" },
  { name: "Digital Marketing", level: 75, group: "Communication" },
  { name: "Mentorship & Comms", level: 88, group: "Soft Skills" },
];

export const tools = [
  "Photoshop",
  "Illustrator",
  "Figma",
  "InDesign",
  "MS Office",
  "Canva",
];

export const experience = [
    {
    role: "McKinsey Forward Program",
    org: "McKinsey & Company",
    date: "Apr 2026 – Jun 2026",
    place: "Online",
    blurb:
      "Selected for the McKinsey Forward Program — a rigorous professional development program equipping participants with problem-solving, leadership and communication frameworks.",
    logo: "/assets/mckinsey_logo.jpeg",
  },
  {
    role: "Social Media Member",
    org: "OzU Racing",
    date: "Jul 2025 – Feb 2026",
    place: "İstanbul",
    blurb:
      "Managing social media operations, producing digital marketing content and contributing to design projects that strengthen the team's public image across platforms.",
    logo: "/assets/ozu_logo.png",
  },
  {
    role: "Accommodation Services Officer",
    org: "Accommodation Office",
    date: "Jul 2025 – Aug 2025",
    place: "İstanbul",
 logo: "/assets/ozu_circle_logo.png",    blurb:
      "Supported dormitory operations through paperwork, technical coordination and student assistance.",
  },
  {
    role: "Corporate Communication Specialist",
    org: "EFEB Office",
    date: "Feb 2025 – Aug 2025",
    place: "İstanbul",
 logo: "/assets/ozu_circle_logo.png",    blurb:
      "Mentored EFEB scholars and facilitated university–student communication with a focus on equity and access.",
  },
];

export const education = [
  {
    school: "Özyeğin University",
    degree: "B.A., Communication & Design",
    date: "2024 – 2028",
    note: "EFEB Scholar · Ranked 2201 in YKS (Verbal)",
    logo: "/assets/ozu_circle_logo.png",
  },
  {
    school: "Aspire Leaders Program",
    degree: "Leadership & Global Perspectives",
    date: "2024",
    note: "Competitive leadership program for emerging student leaders across the globe — mentored by Harvard faculty.",
    logo: "/assets/aspire_logo.jpg",
  },
  {
    school: "Ordu Anatolian Imam Hatip High School",
    degree: "Science & Social Sciences Project School",
    date: "2021 – 2024",
    note: "Ranked 2nd in YKS Verbal · Diploma 93/100",
        logo: "/assets/ihl_logo.jpeg",
        logoOffset: "center calc(50% + 1.5px)",

  },
];

export const projects = [
  {
    id: "agora-digital-journey",
    title: "A Digital Journey Through the Ancient Agora",
    tag: "UX Design · Experience",
    year: "2025",
    role: "Experience Designer / UX Researcher",
    blurb: "A validated, fully operational physical prototype blending digital layer mechanics with immersive environments.",
    overview: "This project reimagines the Ancient Agora of Izmir as an immersive, multi-sensory user experience designed for younger generations. By bridging physical fabrication with cutting-edge digital media, it transforms a traditional exhibition into an interactive journey through time.",
    objective: "To replace passive museum visits with an engaging, interactive environment using a custom DIY hologram device, AI-driven cinematic animations, and localized sound design.",
    challenge: "Converting 2D historical assets into perfectly seamless, rotating 3D animations that render accurately inside a physical projection box presented heavy technical bottlenecks.",
    method: "Adopted an agile, iterative testing loop. Experimented with and benchmarked multiple AI generation tools—including Sora, Kling AI, and Mishy AI—to fix distortion and scale issues.",
    growth: "Overcoming these technical layout and rendering hurdles directly accelerated my problem-solving skills and technical adaptability. Every iteration was systematically tracked, analyzed, and optimized to fit the precise dimensions of the laser-cut hardware.",
    result: "A validated, fully operational physical prototype that blends digital layer mechanics (QR-linked bilingual data) with immersive environments. The project successfully demonstrates how technical constraints can be resolved through structured iteration to deliver an impactful user experience.",
    img: "/assets/project_agora.png",
    coverImages: ["/assets/project_agora.png"],
    color: "from-[#001524] to-[#15616D]",
  },
  {
    id: "tshirt-design",
    title: "Graphic T-Shirt Design",
    tag: "Apparel · Brand Identity",
    year: "2024",
    role: "Graphic Designer / Brand Identity Specialist",
    blurb: "A premium, production-ready merchandise concept that bridges commercial appeal with cohesive design.",
    overview: "This project began by identifying a market gap: the lack of high-quality, premium apparel designs for a well-known character franchise. As a designer, I treated this not just as a t-shirt graphic, but as a complete Brand Identity challenge—transforming fan culture into a polished, market-ready visual experience.",
    objective: "Every brand needs a visual story that connects with its audience. This case study demonstrates how I can take an existing concept, modern asset, or corporate identity, and translate it into high-end merchandise and cohesive brand touchpoints that elevate a company's market presence.",
    challenge: "Transitioning from raw sketches to production-ready digital assets required balancing complex layouts, typography, and color grading for physical application.",
    method: "I adapted quickly by expanding my technical toolkit—utilizing Adobe Illustrator, Photoshop, and Kittl. Through market research and rigorous iteration, I mastered apparel-specific design workflows to deliver seamless vector layouts.",
    growth: "This project sharpened my visual problem-solving and brand scalability. I independently managed the entire pipeline, proving my ability to take a brand from an abstract idea to professional, high-fidelity mockups.",
    result: "A premium, production-ready merchandise concept that bridges commercial appeal with cohesive design. It highlights my capability to build, scale, and apply a distinct visual identity across diverse physical products for any brand.",
    img: "/assets/project_tshirt_final.png",
    coverImages: ["/assets/project_tshirt_final.png", "/assets/project_tshirt_design.png"],
    color: "from-[#001524] to-[#78290F]",
  },
  {
    id: "brochure-editorial",
    title: "National Archaeological Museum – Concept Brochure",
    tag: "Editorial · Print Design",
    year: "2024",
    role: "Graphic Designer / Editorial & Brand Specialist",
    blurb: "A polished, high-fidelity concept brochure that seamlessly bridges historical gravity with contemporary design layout.",
    overview: "This is a proactive, self-initiated project driven by personal field research. Having visited the National Archaeological Museum, I analyzed its visitor demographics, historical weight, and existing visual presence. I then independently developed a comprehensive concept brochure that embodies what the museum's modern corporate identity should represent.",
    objective: "This case study demonstrates my capacity to deeply analyze an existing institution, understand its target audience, and translate its heritage into professional print media. It highlights how I can step in as a strategic partner for any brand to design editorial layouts and marketing collateral that perfectly align with their corporate ethos.",
    challenge: "Capturing the immense historical value of ancient exhibits while organizing high-density informational text into a clean, modern, and readable trifold layout.",
    method: "Utilizing Adobe InDesign, I developed a strict grid system, curated an elegant corporate color palette that echoes classical antiquity, and strategically balanced typographic hierarchy to guide the museum visitor's eye.",
    growth: "This project sharpened my editorial design precision and layout balancing. By working under self-imposed constraints to simulate a real-world cultural institution brief, I refined my ability to deliver production-ready print assets independently.",
    result: "A polished, high-fidelity concept brochure that seamlessly bridges historical gravity with contemporary design layout. It serves as concrete proof of my ability to analyze a brand's audience and execute targeted visual communication strategies from scratch.",
    img: "/assets/project_brochure_front.png",
    coverImages: ["/assets/project_brochure_front.png", "/assets/project_brochure_back.png"],
    color: "from-[#15616D] to-[#001524]",
  },
];

export const services = [
  {
    title: "Brand Identity",
    desc: "Logo systems, palettes and guidelines that give a brand a clear, consistent voice.",
    icon: "Sparkles",
  },
  {
    title: "Social Content Design",
    desc: "Editorial-quality posts, reel covers and campaign sets for digital-first brands.",
    icon: "Instagram",
  },
  {
    title: "Editorial & Print",
    desc: "Posters, zines and layout work with a considered, bold sensibility.",
    icon: "BookOpen",
  },
  {
    title: "Brand Photography",
    desc: "Professional photography integrated into the branding process — so your photos and identity speak the same visual language.",
    icon: "Camera",
  },
];

export const achievements = [
  "2nd place — OPENFAB Maker Competition (2025)",
  "1st place — District-wide Cartoon Competition (2024)",
  "e-Twinning projects · Top 200 of 38,000 (2021)",
  "Aspire Leaders Program — Harvard-mentored cohort",
  "McKinsey Forward Program (2025)",
];
