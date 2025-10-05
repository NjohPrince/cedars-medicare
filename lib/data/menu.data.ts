import { MenuListType } from "@/types/data.type";

export const menuList: MenuListType[] = [
  {
    id: 1,
    name: "Home",
    href: "/",
    dropdown: false,
  },
  {
    id: 2,
    name: "Services",
    href: "/services",
    dropdown: true,
    submenu: [
      {
        id: 1,
        name: "Medical Services",
        href: "/services/medical-services",
        key: "medical-services",
      },
      {
        id: 2,
        name: "Medical Equipments & Supplies",
        href: "/services/medical-equipments-and-supplies",
        key: "medical-equipments-and-supplies",
      },
      {
        id: 3,
        name: "TPA Consultancy",
        href: "/services/tpa-consultancy",
        key: "tpa-consultancy",
      },
      {
        id: 4,
        name: "Telemedicine",
        href: "/services/telemedicine",
        key: "telemedicine",
      },
      {
        id: 5,
        name: "Touristic Medicine",
        href: "/services/touristic-medicine",
        key: "touristic-medicine",
      },
      {
        id: 6,
        name: "Regenerative Medicine",
        href: "/services/regenerative-medicine",
        key: "regenerative-medicine",
      },
    ],
  },
  {
    id: 3,
    name: "FAQs",
    href: "/faqs",
    dropdown: false,
  },
  {
    id: 4,
    name: "Events & News",
    href: "/events-and-news",
    dropdown: false,
  },
];
