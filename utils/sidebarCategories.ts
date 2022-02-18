export type SidebarCategoryItems = {
  id: number;
  name: string;
  path: string;
}[];

export const sidebarItems: SidebarCategoryItems = [
  {
    id: 1,
    name: "Boosters",
    path: "/products/boosters",
  },
  {
    id: 2,
    name: "Blisters",
    path: "/products/blisters",
  },
  {
    id: 3,
    name: "Premium Box",
    path: "/products/premium-box",
  },
  {
    id: 4,
    name: "Elite Trainer Box",
    path: "/products/elite-trainer-box",
  },
  {
    id: 5,
    name: "Booster Box",
    path: "/products/booster-box",
  },
];
