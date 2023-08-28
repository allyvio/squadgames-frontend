import { StaticImageData } from "next/image";

export type ProductNav = {
  title: string;
  href: string;
};

export type WebNavItem = {
  title: string;
  href: string;
  blank: boolean;
  arrow: boolean;
  products: ProductNav[];
};

export type DropdownContent = {
  title: string;
  desc: string;
  href: string;
};

export type ProductNavItem = {
  "Softskill Training": DropdownContent;
  "In-Venue Team Building": DropdownContent;
  "Team Building in City": DropdownContent;
  "Corporate Event": DropdownContent;
  "Family Gathering": DropdownContent;
  "Retirement Preparation": DropdownContent;
};

export type AccordionConfig = {
  title: string;
  icon: string;
  desc: string;
};

export type ProductTestimonial = {
  name: string;
  title: string;
  testimony: string;
  image: string;
};

export type ProductTopic = {
  id: number;
  title: string;
  desc: string;
};

export type ProductMethod = {
  id: number;
  title: string;
  desc: string;
};

export type ProductContent = {
  meta: string;
  image: string;
  title: string;
  desc: string;
  note: string;
  duration: string;
  action: string;
  topics: ProductTopic[];
  methods: ProductMethod[];
  gallery: string[];
  testimonials: ProductTestimonial[];
};

export type ProductCaseStudy = {
  id: number;
  image: string;
  title: string;
  desc: string;
  href: string;
};

export type ProductFaqDetail = {
  id: number;
  question: string;
  answer: string;
};

export type ProductFaq = {
  title: string;
  desc: string;
  contents: ProductFaqDetail[];
};

export type Product = {
  id: number;
  contents: ProductContent;
  caseStudy: ProductCaseStudy[];
  faq: ProductFaq;
};
