export type ShortcutType = {
  id: number;
  text: string;
  image: string;
  path: string;
}[];

export const shortcutItems: ShortcutType = [
  {
    id: 1,
    text: "Boosters",
    image: "/shortcuts/pokeball.png",
    path: "/products/boosters",
  },
  {
    id: 2,
    text: "Premium Box",
    image: "/shortcuts/greatball.png",
    path: "/products/premium-box",
  },
  {
    id: 3,
    text: "Elite Trainer Box",
    image: "/shortcuts/ultraball.png",
    path: "/products/elite-trainer-box",
  },
  {
    id: 4,
    text: "Booster Box",
    image: "/shortcuts/masterball.png",
    path: "/products/booster-box",
  },
];
