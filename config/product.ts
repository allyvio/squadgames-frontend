import { Product } from "@/types";

export const productData: Product[] = [
  {
    id: 1,
    contents: {
      meta: "Softskill Training",
      image: "/images/teambuilding.jpg",
      title: "Softskills Training with Experiential Learning Approach",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis ipsum, molestiae voluptas dolor suscipit voluptates repellendus aperiam consectetur deleniti quidem. Id possimus ab quaerat soluta qui facere, magni modi voluptate libero blanditiis accusantium Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      note: "Hybrid, In person",
      duration: "1-5 Hari",
      action: "Jadwalkan Konsultasi Gratis",
      topics: [
        {
          id: 1,
          title: "Teamwork/Collaboration",
          desc: "Kembangkan kemampuan kerja sama melalui aktivitas interaktif dan tujuan bersama. Berkolaborasi dengan efektif untuk hasil yang luar biasa.",
        },
        {
          id: 2,
          title: "Resources Management",

          desc: "",
        },
        {
          id: 3,
          title: "Leadership",
          desc: "",
        },
        {
          id: 4,
          title: "Team Building",
          desc: "",
        },
        {
          id: 5,
          title: "Problem Solving",
          desc: "",
        },
      ],
      methods: [
        {
          id: 1,
          title: "Workshop",
          desc: "Aktif dalam pembelajaran praktis dengan panduan ahli dan interaksi.",
        },
        {
          id: 2,
          title: "Learning by doing",
          desc: "Pelajari melalui tindakan langsung, eksplorasi, dan pengalaman langsung.",
        },
        {
          id: 3,
          title: "Diskusi",
          desc: "Tukar ide, pendapat, dan wawasan untuk memperdalam pemahaman bersama.",
        },
        {
          id: 4,
          title: "Studi Kasus",
          desc: "Aplikasikan pengetahuan pada studi kasus nyata untuk pemahaman lebih mendalam.",
        },
      ],

      gallery: [
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
          name: "",
          title: "",
          testimony: "",
          image: "",
        },
      ],
    },
    caseStudy: [
      {
        id: 1,
        image: "/images/tech1.jpeg",
        title: "PLN Muda",
        desc: " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque hic, cupiditate saepe praesentium facilis ex.",
        href: "link",
      },
      {
        id: 2,
        image: "/images/tech2.jpeg",
        title: "Pertamina",
        desc: " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque hic, cupiditate saepe praesentium facilis ex.",
        href: "link",
      },
      {
        id: 3,
        image: "/images/tech3.jpg",
        title: "Bappenas",
        desc: " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque hic, cupiditate saepe praesentium facilis ex.",
        href: "link",
      },
    ],
    faq: {
      title: "Softskills Training with Experiential Learning Approach",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus ullam reiciendis tempore pariatur neque ex asdasd Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus ullam reiciendis tempore pariatur neque ex. \n bla bla bla Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus ullam reiciendis tempore pariatur neque ex asdasd Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus ullam reiciendis tempore pariatur neque ex",
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
        {
          id: 4,
          question: "apakah yang dimaksud dengan Softskill Training?",
          answer:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus ullam reiciendis tempore pariatur neque ex nesciunt placeat natus quas ad.",
        },
        {
          id: 5,
          question: "apakah yang dimaksud dengan Softskill Training?",
          answer:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus ullam reiciendis tempore pariatur neque ex nesciunt placeat natus quas ad.",
        },
      ],
    },
  },
  // {
  //   id: 2,
  //   contents: {
  //     meta: "In Venue",
  //     title: "In Venue Team Building",
  //     desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis ipsum, molestiae voluptas dolor suscipit voluptates repellendus aperiam consectetur deleniti quidem. Id possimus ab quaerat soluta qui facere, magni modi voluptate libero blanditiis accusantium ",
  //     image: "/images/teambuilding.jpg",
  //     action: "Jadwalkan Konsultasi Gratis",
  //     topics: [
  //       "Teamwork/Collaboration",
  //       "Resources Management",
  //       "Leadership",
  //       "Team Building",
  //       "Problem Solving",
  //     ],
  //     method: "Hybrid, In person",
  //     duration: "1-5 Hari",
  //     gallery: ["/public/images/foto1.png"],
  //     testimonials: [
  //       {
  //         name: "",
  //         title: "",
  //         testimony: "",
  //         image: "",
  //       },
  //     ],
  //   },
  //   caseStudy: [
  //     {
  //       id: 1,
  //       image: "/images/pln-logo.jpg",
  //       title: "PLN Muda",
  //       desc: " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque hic, cupiditate saepe praesentium facilis ex.",
  //       href: "link",
  //     },
  //   ],
  //   faq: {
  //     title: "In Venue",
  //     desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus ullam reiciendis tempore pariatur neque ex Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus ullam reiciendis tempore pariatur neque ex Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus ullam reiciendis tempore pariatur neque ex ",
  //     contents: [
  //       {
  //         id: 1,
  //         question: "apakah yang dimaksud dengan In Venue?",
  //         answer:
  //           "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus ullam reiciendis tempore pariatur neque ex nesciunt placeat natus quas ad.",
  //       },
  //       {
  //         id: 2,
  //         question: "apakah yang dimaksud dengan In Venue?",
  //         answer:
  //           "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus ullam reiciendis tempore pariatur neque ex nesciunt placeat natus quas ad.",
  //       },
  //       {
  //         id: 3,
  //         question: "apakah yang dimaksud dengan In Venue?",
  //         answer:
  //           "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus ullam reiciendis tempore pariatur neque ex nesciunt placeat natus quas ad.",
  //       },
  //     ],
  //   },
  // },
];
