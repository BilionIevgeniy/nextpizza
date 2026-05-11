import React from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface Props {
  className?: string;
}
const categories = [
  "Pizzas",
  "Combo",
  "Snacks",
  "Cocktails",
  "Coffee",
  "Desserts",
  "Drinks",
];
const activeCategorie = 0;

export const Categories: React.FC<Props> = ({ className }) => {
  return (
    <div
      className={cn("inline-flex gap-1 bg-gray-50 p-1 rounded-2xl", className)}
    >
      <div className="flex items-center font-bold h-11 rounded-2xl px-5">
        {categories.map((category, index) => {
          return (
            <Link
              className={cn(
                "flex items-center font-bold h-11 rounded-2xl px-5",
                index === activeCategorie &&
                  "bg-white shadow-md shadow-gray-200 text-primary",
              )}
              href={"/"}
              key={index}
            >
              <button>{category}</button>
            </Link>
          );
        })}
      </div>
    </div>
  );
};
