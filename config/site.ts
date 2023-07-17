export type SiteConfig = {
  name: string;
  description: string;
  url: string;
  ogImage: string;
  links: {
    instagram: string;
  };
};

export const siteConfig: SiteConfig = {
  name: "Squadgames",
  description:
    "Solusi end-to-end untuk mengembangkan tim anda lewat berbagai aktivitas yang asik, beda, dan insightful",
  url: "https://squadgames.id",
  ogImage: "",
  links: {
    instagram: "https://instagram.com/squadgames.id",
  },
};
