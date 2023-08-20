import { Product } from "@/types";

export const productData: Product[] = [
  {
    id: 1,
    heros: {
      meta: "Softskill Training",
      title: "Softskills Training with Experiential Learning Approach",
      desc: "Melatih softskills dengan melalui permainan yang fun, engaging, dan insightful",
      action: "Jadwalkan Konsultasi Gratis",
      image: "/images/teambuilding.jpg",
    },
    contents: {
      title: "Softskills Training with Experiential Learning Approach",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis ipsum, molestiae voluptas dolor suscipit voluptates repellendus aperiam consectetur deleniti quidem. Id possimus ab quaerat soluta qui facere, magni modi voluptate libero blanditiis accusantium Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      topics: [
        "Teamwork/Collaboration",
        "Resources Management",
        "Leadership",
        "Team Building",
        "Problem Solving",
      ],
      methods: ["Workshop", "Learning by doing", "Diskusi", "Studi kasus"],
      duration: "1-5 Hari",
      images: [
        "/images/foto1.png",
        "/images/foto2.jpeg",
        "/images/foto3.jpeg",
        "/images/foto4.jpeg",
        "/images/foto1.png",
        "/images/foto2.jpeg",
        "/images/foto3.jpeg",
        "/images/foto4.jpeg",
      ],
      testimonials: [
        {
          name: "john doe",
          title: "karyawan",
          testimony:
            "voluptas dolor suscipit voluptates repellendus aperiam consectetur deleniti quidem. Id possimus ab quaerat soluta qui facere, magni",
          image: "/public/images/foto3.png",
        },
      ],
    },
    caseStudy: [
      {
        id: 1,
        image: "/images/pln-logo.jpg",
        title: "PLN Muda",
        desc: " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque hic, cupiditate saepe praesentium facilis ex.",
        href: "link",
      },
      {
        id: 2,
        image: "/images/download.png",
        title: "Pertamina",
        desc: " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque hic, cupiditate saepe praesentium facilis ex.",
        href: "link",
      },
      {
        id: 3,
        image: "/images/bank-mandiri.png",
        title: "Bappenas",
        desc: " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque hic, cupiditate saepe praesentium facilis ex.",
        href: "link",
      },
    ],
    faq: {
      title: "Softskills Training with Experiential Learning Approach",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus ullam reiciendis tempore pariatur neque ex asdasd Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus ullam reiciendis tempore pariatur neque ex",
      contents: [
        {
          id: 1,
          question: "apakah yang dimaksud dengan Softskill Training?",
          answer:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus ullam reiciendis tempore pariatur neque ex nesciunt placeat natus quas ad.",
        },
        {
          id: 2,
          question: "apakah yang dimaksud dengan Softskill Training?",
          answer:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus ullam reiciendis tempore pariatur neque ex nesciunt placeat natus quas ad.",
        },
        {
          id: 3,
          question: "apakah yang dimaksud dengan Softskill Training?",
          answer:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus ullam reiciendis tempore pariatur neque ex nesciunt placeat natus quas ad.",
        },
      ],
    },
  },
  {
    id: 2,
    heros: {
      meta: "In Venue",
      title: "In Venue Team Building",
      desc: "Melatih softskills dengan melalui permainan yang fun, engaging, dan insightful",
      action: "Jadwalkan Konsultasi Gratis",
      image: "/images/teambuilding.jpg",
    },
    contents: {
      title: "In Venue Team Building",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis ipsum, molestiae voluptas dolor suscipit voluptates repellendus aperiam consectetur deleniti quidem. Id possimus ab quaerat soluta qui facere, magni modi voluptate libero blanditiis accusantium ",
      topics: [
        "Teamwork/Collaboration",
        "Resources Management",
        "Leadership",
        "Team Building",
        "Problem Solving",
      ],
      methods: ["Workshop", "Learning by doing", "Diskusi", "Studi kasus"],
      duration: "1-5 Hari",
      images: ["/public/images/foto1.png"],
      testimonials: [
        {
          name: "john doe",
          title: "karyawan",
          testimony:
            "voluptas dolor suscipit voluptates repellendus aperiam consectetur deleniti quidem. Id possimus ab quaerat soluta qui facere, magni",
          image: "/public/images/foto3.png",
        },
      ],
    },
    caseStudy: [
      {
        id: 1,
        image: "/images/pln-logo.jpg",
        title: "PLN Muda",
        desc: " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque hic, cupiditate saepe praesentium facilis ex.",
        href: "link",
      },
    ],
    faq: {
      title: "In Venue",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus ullam reiciendis tempore pariatur neque ex Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus ullam reiciendis tempore pariatur neque ex Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus ullam reiciendis tempore pariatur neque ex ",
      contents: [
        {
          id: 1,
          question: "apakah yang dimaksud dengan In Venue?",
          answer:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus ullam reiciendis tempore pariatur neque ex nesciunt placeat natus quas ad.",
        },
        {
          id: 2,
          question: "apakah yang dimaksud dengan In Venue?",
          answer:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus ullam reiciendis tempore pariatur neque ex nesciunt placeat natus quas ad.",
        },
        {
          id: 3,
          question: "apakah yang dimaksud dengan In Venue?",
          answer:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus ullam reiciendis tempore pariatur neque ex nesciunt placeat natus quas ad.",
        },
      ],
    },
  },
];
