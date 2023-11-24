import { WebNavItem, ProductNavItem } from "@/types";

export const webNavConfig: WebNavItem[] = [
  {
    title: "Home",
    href: "/",
    blank: false,
    arrow: false,
    products: [],
  },
  {
    title: "Produk",
    href: "/product",
    blank: false,
    arrow: true,
    products: [
      {
        title: "Softskill Training",
        href: "/softskill-training",
      },
      {
        title: "In-Venue Team Building",
        href: "/in-venue",
      },
      {
        title: "Outing Specials",
        href: "/team-building",
      },
      {
        title: "Corporate Event",
        href: "/corporate-event",
      },
      {
        title: "Family Gathering",
        href: "/family-gathering",
      },
      {
        title: "Retirement Preparation",
        href: "/retirement-preparation",
      },
    ],
  },
  {
    title: "Gallery",
    href: "/gallery",
    blank: false,
    arrow: false,
    products: [],
  },
  {
    title: "Study Case",
    href: "/study-case",
    blank: false,
    arrow: false,
    products: [],
  },
  {
    title: "Hubungi Kami",
    href: "https://wa.me/6282115570991?text=Hi%20Squadgames,%20saya%20ingin%20konsultasi%20tentang%20training",
    blank: true,
    arrow: false,
    products: [],
  },
];

export const productNavConfig: ProductNavItem = {
  "Softskill Training": {
    title: "Softskill Training",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius magnam odio quas sequi voluptates illo impedit eaque eos voluptatibus at! Nisi in blanditiis alias enim dicta ut similique tenetur. Quia.",
    href: "/softskill-training",
  },
  "In-Venue Team Building": {
    title: "In-Venue Team Building",
    desc: "Agenda penguatan tim yang berfokus pada satu titik lokasi pelatihan",
    href: "/in-venue",
  },
  "Outing Specials": {
    title: "Outing Specials",
    desc: "Agenda penguatan tim sembari berkeliling mengunjungi venue menarik di kota yang Anda inginkan",
    href: "/team-building",
  },
  "Corporate Event": {
    title: "Corporate Event",
    desc: "Agenda penguatan tim sembari berkeliling mengunjungi venue menarik di kota yang Anda inginkan",
    href: "/corporate-event",
  },
  "Family Gathering": {
    title: "Family Gathering",
    desc: "Agenda penguatan tim sembari berkeliling mengunjungi venue menarik di kota yang Anda inginkan",
    href: "/family-gathering",
  },
  "Retirement Preparation": {
    title: "Retirement Preparation",
    desc: "Agenda penguatan tim sembari berkeliling mengunjungi venue menarik di kota yang Anda inginkan",
    href: "/retirement-preparation",
  },
};
