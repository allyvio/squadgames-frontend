import { Product } from "@/types";

export const productData: Product[] = [
  {
    id: 1,
    contents: {
      meta: "Softskill Training",
      image: "/images/teambuilding.jpg",
      title: "Softskills Training with Experiential Learning Approach",
      desc: "Kami memahami bahwa belajar lebih baik dilakukan dengan cara yang menarik dan relevan. Oleh karena itu, pendekatan Experiential Learning kami menggabungkan pembelajaran praktis dengan situasi dunia nyata. Tidak ada lagi belajar yang membosankan! Anda akan terlibat dalam simulasi, permainan peran, diskusi kelompok, dan proyek nyata yang memberikan pengalaman mendalam dan tak terlupakan.",
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
          desc: "Pelajari alokasi sumber daya yang efisien. Maksimalkan potensi dengan bijak mengelola waktu, energi, dan alat.",
        },
        {
          id: 3,
          title: "Leadership",
          desc: "Setiap individu memiliki bakal pemimpin di dalam dirinya. Kembangkan kualitas kepemimpinan yang menginspirasi dan membimbing.",
        },
        {
          id: 4,
          title: "Team Building",
          desc: "Bangun ikatan emosional yang kuat dalam tim. Fasilitasi persatuan melalui training membangun kepercayaan dan komunikasi efektif.",
        },
        {
          id: 5,
          title: "Problem Solving",
          desc: "Asah pemikiran kritis untuk memecahkan permasalahan yang ada. Hadapi tantangan secara strategis dan berikan solusi paling relevan.",
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
      desc: "Program pelatihan untuk mengembangkan softskill melalui pendekatan belajar berdasarkan pengalaman langsung. Kami mengintegrasikan simulasi dan interaksi nyata untuk memperkuat kemampuan komunikasi, kerja tim, kreativitas, dan lainnya.",
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
