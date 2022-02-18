export type NavbarItems = {
  id: number;
  name: string;
  path: string;
}[];

export const navbarItems: NavbarItems = [
  {
    id: 1,
    name: "Home",
    path: "/",
  },
  {
    id: 2,
    name: "Shop",
    path: "/products",
  },
  {
    id: 3,
    name: "About",
    path: "/about-us",
  },
];
