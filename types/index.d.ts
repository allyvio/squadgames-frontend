export type WebNavItem = {
  title: string;
  href: string;
  blank: boolean;
  arrow: boolean;
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

// export type DropdownNavItem = {
//   title: string;
//   desc: string;
//   href: string;
// };

// export type ProductNavItem = {
//   title: string;
//   name: string;
//   desc: string;
//   topics: string[];
//   methods: string[];
//   duration: string;
//   images?: string[];
//   href: string;
// };

export type AccordionConfig = {
  title: string;
  icon: string;
  desc: string;
};
