import { ClassNameValue } from "tailwind-merge";

export const backgrounds = [
  {
    name: "twilight",
    className: "bg-gradient-to-r from-amber-500 to-pink-500",
  },
  {
    name: "northern lights",
    className: "bg-gradient-to-r from-teal-200 to-teal-500",
  },
  { name: "powder", className: "bg-gradient-to-r from-violet-200 to-pink-200" },
  { name: "gold", className: "bg-gradient-to-r from-amber-200 to-yellow-500" },
  {
    name: "raw green",
    className: "bg-gradient-to-r from-lime-400 to-lime-500",
  },
  {
    name: "heartsease",
    className: "bg-gradient-to-r from-fuchsia-600 to-pink-600",
  },
  {
    name: "hibiscus",
    className: "bg-gradient-to-r from-purple-500 to-purple-900",
  },
  {
    name: "clay",
    className: "bg-gradient-to-r from-neutral-300 to-stone-400",
  },
  {
    name: "silver",
    className: "bg-gradient-to-r from-slate-300 to-slate-500",
  },
  {
    name: "metal",
    className: "bg-gradient-to-r from-slate-500 to-slate-800",
  },
] satisfies { name: string; className: ClassNameValue }[];
