import womenBanner from "../../../../public/images/banner-2.png";
import menBanner from "../../../../public/images/banner-4.png";
import arrivalBanner from "../../../../public/images/banner-3.png";

export interface CollectionItem {
  id: number;
  title: string;
  image: string;
  link: string;
}

export const collectionsData: CollectionItem[] = [
  {
    id: 1,
    title: "SHOP WOMEN'S",
    image: womenBanner,
    link: "/collections/women",
  },
  {
    id: 2,
    title: "SHOP MEN'S",
    image: menBanner,
    link: "/collections/men",
  },
  {
    id: 3,
    title: "NEW ARRIVALS",
    image: arrivalBanner,
    link: "/collections/new-arrivals",
  },
];