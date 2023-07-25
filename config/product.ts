import { Product } from "@/types";

export const productData: Product[] = [
  {
    heros: {
      meta: "Softskill Training",
      title: "Softskills Training with Experiential Learning Approach",
      desc: "Melatih softskills dengan melalui permainan yang fun, engaging, dan insightful",
      action: "Jadwalkan Konsultasi",
      image: "/public/images/teambuilding.jpg",
    },
    contents: {
      title: "Softskills Training with Experiential Learning Approach",
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
  },
];
