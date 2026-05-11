import React from "react";
import { cn } from "@/lib/utils";
import { ArrowUpDown } from "lucide-react";

interface Props {
  className?: string;
}

export const SortPopup: React.FC<Props> = ({ className }) => {
  return (
    <div
      className={cn(
        `
    inline-flex items-center gap-1
    bg-gray-50 rounded-2xl px-5
    h-[52px] cursor-pointer
  `,
        className,
      )}
    >
      <ArrowUpDown size={16} />
      <span>Sort by: </span>
      <b className="text-primary">popularity</b>
    </div>
  );
};
