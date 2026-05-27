export const navLinks = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
] as const;

export const skills = [
  { icon: "html", label: "HTML5" },
  { icon: "css", label: "CSS3/Tailwind" },
  { icon: "javascript", label: "JavaScript ES6+" },
  { icon: "frame_person", label: "React.js" },
  { icon: "bolt", label: "Next.js" },
  { icon: "terminal", label: "Node.js" },
  { icon: "hub", label: "Socket.IO" },
  { icon: "api", label: "n8n / REST APIs" },
] as const;

export const experience = [
  {
    title: "Full Stack Developer",
    period: "2022 - Present",
    description:
      "Engineered scalable web architectures using modern stack components. Expert focus on performance optimization and real-time state management.",
    tags: ["Scalability", "Performance", "Architecture"],
    dotColor: "bg-primary ring-primary/20",
    periodColor: "text-primary",
  },
  {
    title: "E-Commerce Specialist",
    period: "Projects Focus",
    description:
      "Developed complex end-to-end commerce platforms with secure payment gateways, dynamic cart logic, and advanced admin dashboards.",
    tags: [] as string[],
    dotColor: "bg-secondary ring-secondary/20",
    periodColor: "text-secondary",
  },
  {
    title: "Enterprise Systems",
    period: "HRMS & Job Platforms",
    description:
      "Built intricate LinkedIn-inspired job matching engines and attendance workflow management systems for corporate scale.",
    tags: [] as string[],
    dotColor: "bg-tertiary ring-tertiary/20",
    periodColor: "text-tertiary",
  },
] as const;

export const projects = [
  {
    title: "Drzio Yoga Platform",
    description:
      "Complete wellness ecosystem with session booking, live classes via WebRTC, and integrated progress tracking.",
    tags: ["React.js", "Node.js"],
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDsBw9D6uxKbeO6Jj6GA9F2HmbuyQMoq7Ro7WY2JiX_2Grrvi703TX_0j__xg2iwQSO05S9JIlHonw2G6yNGar3T1kMz1v_EUk3Y2itloB9sNdtvJi7z3_-jSlOeshjkIRzsRZbA-MDJ8Pxt-OFzNdhq1GI0VXXFE-awnaTCmFriM3TA8JwfBB_DYKFXfDu-El4VJk_OQ5MUp3DJ6zQYDvC4SVeI0I3u7-ZcYZj4WSlPfNuUxUlBRF0uxV-flSmjT60BzVn2nKq0Jg",
    featured: true,
  },
  {
    title: "Bitcorpen Chat",
    description: "Socket.IO based social messenger with sub-second latency.",
    tags: [] as string[],
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCkJMZ4Dt12GvzfdN3hhxaF-oHzsNJS_fcU53WltYZEAeNYS_-RZoxRIvfMxpoaw9_Azb4PrPAoqjCtkWN-zCyNZqoLRHJgi7AT-g2vExmgE1hH-4KzXoUMYY6GpO_P4N_lAFf_jvNR33ftYDW-cuVhovLtmJPN36CHZc2K8mhH0piV4_lFZ-JsPtqlic84DKrFwd5sFtQ21NhmY2btDXgqAVnNKJuo-w_B53KdPWHRgkWmMMQuOcTsNAWpe2GQBvqNP67bPUJOjl8",
    featured: false,
    linkLabel: "Explore Case Study",
  },
  {
    title: "Alexis Jewelry",
    description:
      "Premium E-commerce experience with interactive 3D product viewing.",
    tags: [] as string[],
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD-JB9xTdbDmWwUGZ0zmDgkY8tGVz6psPPkR4Jo31p7ftH9WOy9uhBsX2bhchAZTSf3a9Sq-O0iF6KLFK4mq7AZqRGbXoenoHum1qnipzv2qZL0xzd6dQ4xx9eM_pxEhB9by7P8BClBOmexbz8rh5JPI4uVa-kk1Uy9-q90Y2GHH6UPMSrl3VzHAoiQfnWu13nTgwen9tjOY9Um-ty5pbZcKJ4altvRslL0r2xWwdHMKLvA7fnrWav6MYpiF-sBzue6SsJfBQha0ig",
    featured: false,
  },
  {
    title: "Pet Insurance",
    description: "High-conversion landing page with complex form logic.",
    tags: [] as string[],
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuB13xrDUQPFGPc-lckC7Kh_4ySUPE6GS4xA-O-KNfpe7LIt9b97aG034LAvbRYdAQjoJpKINjmhK1wlMIWtZKwvLh2khFaMT_Wdqcl4UNb5bKm0j368P3_dLmbUW6WNkgm2g600ChTx3qQrK4Hj3HZ7ZCYrWz3ab4fgEiPL_ioEhRDVC6rpneGbOG44BDULPzTMG2qayGbhKgS9PHrKaWdXWYiUS7mTspjfmx0z5-za7Ar-hH2uWU0P0MmMzusVQ6STQfG6cJDP5EU",
    featured: false,
  },
  {
    title: "Voise AI",
    description: "Generative AI interface for real-time voice synthesis.",
    tags: [] as string[],
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuA4640erlrG1loRMJR64Y1z05hG99sPyr0YAF8Srrj2DC2Mg9sPaGgYTtspl6av1XeQGW997hZf9UJEjZYG6ZgHBoKmooOM9ZbItYIEF0UxkNKQnjlOlRQnamtZfspnRKOG914JkZwwyvhBzmp-c4bAxmoxApFICRdA-yhRR_3qJuHDEW7dmSOUJpyhPIIUnJsExrN5FDXQKu9PB2iiYz24Dqi7qkbzeKjIVGPzc7r3wS_IJ0RfDhT-lVzd_WpK5ha_9uS-VX01K-s",
    featured: false,
  },
] as const;

export const chatFeatures = [
  "Bi-directional Real-time Messaging",
  "Multi-room Architecture",
  "Binary Data Streaming",
] as const;

export const automationItems = [
  { icon: "webhook", label: "Webhooks", color: "text-primary border-primary/40" },
  {
    icon: "settings_input_component",
    label: "n8n Flows",
    color: "text-secondary border-secondary/40",
  },
  {
    icon: "database",
    label: "API Pipelines",
    color: "text-tertiary border-tertiary/40",
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
