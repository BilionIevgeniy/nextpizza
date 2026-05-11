import React from "react";
import { cn } from "@/lib/utils";
import { Categories } from "@/components/shared/categories";
import { SortPopup } from "@/components/shared/sort-popup";
import { Container } from "./container";

interface Props {
  className?: string;
}

export const TopBar: React.FC<Props> = ({ className }) => {
  return (
    <div
      className={cn(
        "sticky top-0 bg-white z-10 shadow-lg py-5 shadow-black/5",
        className,
      )}
    >
      <Container className="flex items-center justify-between">
        <Categories />
        <SortPopup />
      </Container>
    </div>
  );
};
