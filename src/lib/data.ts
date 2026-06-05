export const navLinks = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
] as const;

export const skills = [
  { icon: "html",     label: "HTML5" },
  { icon: "css",      label: "CSS3/Tailwind" },
  { icon: "javascript", label: "JavaScript" },
  { icon: "frame_person", label: "React.js" },
  { icon: "bolt",     label: "Next.js" },
  { icon: "animation", label: "GSAP" },
] as const;

export const backendSkills = [
  { icon: "terminal",  label: "Node.js" },
  { icon: "dns",       label: "Express.js" },
  { icon: "api",       label: "REST APIs" },
  { icon: "hub",       label: "Socket.IO" },
  { icon: "database",  label: "MongoDB" },
  { icon: "storage",   label: "PostgreSQL" },
] as const;

export const experience = [
  {
    title: "Full Stack Developer",
    period: "2.5+ Years",
    description:
      "Building scalable web applications with React.js, Next.js, and Node.js. Experienced with MongoDB, PostgreSQL, and modern full-stack architectures. Focused on creating performant, user-centric solutions across various industries.",
    tags: ["React.js", "Next.js", "Node.js", "MongoDB", "PostgreSQL"],
    dotColor: "bg-primary ring-primary/20",
    periodColor: "text-primary",
  },
] as const;

export const projects = [
  {
    title: "Bitcorpen",
    description:
      "LinkedIn-style professional networking platform with a full-featured job board, real-time chat powered by Socket.IO, and a social feed supporting posts, comments, and reactions. Users can build profiles, connect with peers, apply to jobs, and collaborate — all in one place.",
    tags: ["React.js", "Node.js", "Socket.IO", "MongoDB"],
    image: "/bitcorpen.png",
    featured: true,
    link: null,
    highlights: ["Real-time Messaging", "Job Board", "Social Feed & Posts"],
  },
  // {
  //   title: "Odyssey System",
  //   description:
  //     "ClickUp-inspired project management suite with Upwork integration for real-time client communication. Manage projects, track tasks on Kanban boards, oversee sales pipelines, and handle client interactions — all in one unified workspace built for agencies.",
  //   tags: ["React.js", "Next.js", "Node.js", "MongoDB"],
  //   image: "/odyssey-placeholder.svg",
  //   featured: false,
  //   link: null,
  //   highlights: ["Kanban Boards", "Upwork Integration", "Sales Pipeline"],
  // },
  {
    title: "Keka HRMS",
    description:
      "Enterprise-grade HR management system covering the full employee lifecycle — payroll processing, attendance tracking, leave & penalty management, and auto-generated salary sheets. Also ships a built-in games hub (Color Collector, Knife Thrower, Connect Dots, Sword Ladder, Word Finder, Word Puzzle) to boost team engagement right inside the platform.",
    tags: ["React.js", "Next.js", "Node.js", "MongoDB"],
    image: "/keka.png",
    featured: false,
    link: "https://shell.10turtle.com/",
    highlights: ["Payroll & Salary Sheets", "Attendance & Leave Management", "Built-in Games Hub"],
  },
  // {
  //   title: "Drzio Yoga",
  //   description:
  //     "End-to-end wellness platform with live class booking, WebRTC-powered sessions, instructor dashboards, subscription billing, and real-time progress tracking — designed to bring studio-quality yoga online.",
  //   tags: ["React.js", "Node.js", "WebRTC"],
  //   image:
  //     "https://lh3.googleusercontent.com/aida-public/AB6AXuDsBw9D6uxKbeO6Jj6GA9F2HmbuyQMoq7Ro7WY2JiX_2Grrvi703TX_0j__xg2iwQSO05S9JIlHonw2G6yNGar3T1kMz1v_EUk3Y2itloB9sNdtvJi7z3_-jSlOeshjkIRzsRZbA-MDJ8Pxt-OFzNdhq1GI0VXXFE-awnaTCmFriM3TA8JwfBB_DYKFXfDu-El4VJk_OQ5MUp3DJ6zQYDvC4SVeI0I3u7-ZcYZj4WSlPfNuUxUlBRF0uxV-flSmjT60BzVn2nKq0Jg",
  //   featured: false,
  //   link: null,
  //   highlights: ["Live Classes via WebRTC", "Session Booking", "Progress Tracking"],
  // },
  {
    title: "Genevieve Caffrey",
    description:
      "Design-focused, pixel-perfect personal landing page for a creative professional. Built with meticulous attention to typography, whitespace, and visual hierarchy — fully mobile-responsive across all breakpoints with smooth scroll animations and a polished aesthetic.",
    tags: ["React.js", "Tailwind CSS", "GSAP"],
    // image:
    //   "https://lh3.googleusercontent.com/aida-public/AB6AXuDsBw9D6uxKbeO6Jj6GA9F2HmbuyQMoq7Ro7WY2JiX_2Grrvi703TX_0j__xg2iwQSO05S9JIlHonw2G6yNGar3T1kMz1v_EUk3Y2itloB9sNdtvJi7z3_-jSlOeshjkIRzsRZbA-MDJ8Pxt-OFzNdhq1GI0VXXFE-awnaTCmFriM3TA8JwfBB_DYKFXfDu-El4VJk_OQ5MUp3DJ6zQYDvC4SVeI0I3u7-ZcYZj4WSlPfNuUxUlBRF0uxV-flSmjT60BzVn2nKq0Jg",
    image: "/geneive.png",
    featured: false,
    link: null,
    highlights: ["Pixel-perfect Layout", "Mobile-responsive Design", "Scroll Animations"],
  },
  {
    title: "Alexis Jewelry",
    description:
      "Premium jewellery e-commerce platform with product catalog, advanced filtering, wishlist, cart & checkout, secure payments, order tracking, and an admin dashboard — built for a high-end brand experience.",
    tags: ["React.js", "Node.js", "MongoDB"],
    // image:
    //   "https://lh3.googleusercontent.com/aida-public/AB6AXuD-JB9xTdbDmWwUGZ0zmDgkY8tGVz6psPPkR4Jo31p7ftH9WOy9uhBsX2bhchAZTSf3a9Sq-O0iF6KLFK4mq7AZqRGbXoenoHum1qnipzv2qZL0xzd6dQ4xx9eM_pxEhB9by7P8BClBOmexbz8rh5JPI4uVa-kk1Uy9-q90Y2GHH6UPMSrl3VzHAoiQfnWu13nTgwen9tjOY9Um-ty5pbZcKJ4altvRslL0r2xWwdHMKLvA7fnrWav6MYpiF-sBzue6SsJfBQha0ig",
    image: "/alexis.png",
    featured: false,
    link: null,
    highlights: ["Cart & Checkout", "Order Tracking", "Admin Dashboard"],
  },
  {
    title: "Pet Insurance",
    description:
      "Pixel-perfect, mobile-first pet insurance comparison landing page. Features provider rating cards (Lemonade, Healthy Paws, ASPCA), multi-step quote form, dynamic plan comparison table, trust signals, and high-conversion CTAs — built from Figma to production.",
    tags: ["React.js", "Tailwind CSS", "GSAP"],
    image: "/petinsurance.png",
    featured: false,
    link: "https://johnchanthana.zooq.app/",
    highlights: ["Provider Rating Cards", "Plan Comparison Table", "Multi-step Quote Form"],
  },
  {
    title: "Voise AI",
    description:
      "AI voice synthesis interface with real-time text-to-speech, 600+ voice options across multiple languages, voice cloning, emotional tone control, and instant audio export — built for creators, narrators, and developers.",
    tags: ["React.js", "Next.js", "AI/ML APIs"],
    // image:
    //   "https://lh3.googleusercontent.com/aida-public/AB6AXuA4640erlrG1loRMJR64Y1z05hG99sPyr0YAF8Srrj2DC2Mg9sPaGgYTtspl6av1XeQGW997hZf9UJEjZYG6ZgHBoKmooOM9ZbItYIEF0UxkNKQnjlOlRQnamtZfspnRKOG914JkZwwyvhBzmp-c4bAxmoxApFICRdA-yhRR_3qJuHDEW7dmSOUJpyhPIIUnJsExrN5FDXQKu9PB2iiYz24Dqi7qkbzeKjIVGPzc7r3wS_IJ0RfDhT-lVzd_WpK5ha_9uS-VX01K-s",
    image: "/voiseai.png",
    featured: false,
    link: "https://voise.ai/",
    highlights: ["600+ AI Voices", "Voice Cloning", "Real-time TTS"],
  },
] as const;

export const chatFeatures = [
  "Bi-directional Real-time Messaging",
  "Multi-room Architecture",
  "Binary Data Streaming",
] as const;

export const automationItems = [
  {
    icon: "cable",
    label: "Webhooks",
    desc: "Trigger workflows instantly from any external event or HTTP endpoint.",
    color: "text-primary border-primary/35",
    bg: "bg-primary/10",
  },
  {
    icon: "settings_input_component",
    label: "n8n Flows",
    desc: "Visual no-code pipelines connecting APIs, databases, and services.",
    color: "text-secondary border-secondary/35",
    bg: "bg-secondary/10",
  },
  {
    icon: "account_tree",
    label: "API Pipelines",
    desc: "Custom REST orchestration layers that move data where it needs to go.",
    color: "text-tertiary border-tertiary/35",
    bg: "bg-tertiary/10",
  },
] as const;

export const socialLinks = {
  linkedin:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuA58lyaoqnyeFB5b6QZMWRl2rxBA1KifpQ0-Fo4GMBIkmxr9DZj7Z6A2Fv-Gb71OxC9KmmffDTzm5RVTnh5xIUje0Qw4k5Pd2jGtgZNXCMH7Q_BeWKSpRFiNgzVPG8lBBlBnE1J4w5K47-OEtOZ5Di6FGcD4U1zRwhddeYGF8yGWuf_ZhbDZXfCxR3zWF8z74JluojbLLHEqFnvSzPUe6ZhJbN523n7hGbtAjbM2yXLh2UgjW6kT1RHN9kwD3hbwIPm8_bU-y3RInE",
  github:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuBAzqx397GfsNxPU2TNdmBpcqOCjwHPosVlurmN9tSjkj9tTy253OuBWo9fxNAUCXYcFEazU-V4jKA2fqfhkOnhU2OF02n9Cdn24Ao2Vin45WmokSBec8YJnOQWrJXFBpAblqPZyHONZ4aRoooQZdQ2-V4-tRbs0lrmc85NpJGDqkiWLnMNjbYVRFNG8BHxAVIfMmIx6QUoU2QqFmVKyV30eAiaFxB-nt8Lu5Bxufz7RA8u-kD2Vsv0jhV_TCyxY-DvxTRQYLjNX8M",
  twitter:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuAtyFHnq3TNzPtKQVvr4sradrAbuRjXCwbPpbe7WYazUQUXMWZEplXAu2LrDOC91vLIQqMkXi2Y5XGtgWSDTKP2AOEzmFZfa43uu5YWBKPQDAjfYAkCv_uUKaalwheBSCd4xG_OpH1oF2eLgNEyfgtq5XQFMkGyLm5-qHliumUtWeU1igFr26DhAQ4mgZWPD5OCanytVGQSD_eNK2AQwE0aahNV9_x3XmtK74agigFAe1-Z9wVOCrCU64Pmf95QAQhKnTjQoTZVoKA",
} as const;

export const aboutImage =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuBY81rlthjGU4BvTJV8eybEdJmT1vUlMiyPWo6_O81P7yo1HV7iWd69lRSkekQQqzd9ou02oNr9QILqNkbwA0lvkHXwkkbUAJWA0PxhVrlpm6KVhvD1ZLmfKgAIwj-NmIhF7gnMh2W42MN4ymPGTpgH4aBi-_LL4mK72CNFAyK9krAPyhyvQfDfo7JfySXiArKb2rbHtyf2rXGCMorq5OfZrJZgbdg1nDV1LAvPvTC9s2Kjrs2mDzx0ELTnFe5X899rzcXbjQm9dus";
