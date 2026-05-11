import React from "react";
import { cn } from "@/lib/utils";
import { Title } from "./title";
import { FilterCheckbox } from "./filter-checkbox";

interface Props {
  className?: string;
}

export const Filters: React.FC<Props> = ({ className }) => {
  return (
    <div className={cn(className)}>
      <Title text="Filters" size="sm" className="mb-5 font-bold" />
      <FilterCheckbox text="Can collect" value="1" />
      <FilterCheckbox text="New" value="2" />
    </div>
  );
};
