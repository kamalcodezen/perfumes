import { Truck, ShieldCheck, Gem, Headset } from "lucide-react";

export interface Feature {
  id: number;
  title: string;
  description: string;
  icon: React.ElementType;
}

export const featuresData: Feature[] = [
  {
    id: 1,
    title: "Free Shipping",
    description: "Fast and secure delivery on every premium fragrance order.",
    icon: Truck,
  },
  {
    id: 2,
    title: "100% Authentic",
    description:
      "Every perfume is sourced directly from trusted luxury brands.",
    icon: ShieldCheck,
  },
  {
    id: 3,
    title: "Luxury Quality",
    description: "Crafted with premium ingredients for long-lasting elegance.",
    icon: Gem,
  },
  {
    id: 4,
    title: "24/7 Support",
    description: "Friendly customer assistance whenever you need help.",
    icon: Headset,
  },
];
