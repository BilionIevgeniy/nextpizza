"use client";
import React from "react";
import { cn } from "@/lib/utils";
import { FilterCheckbox, FilterCheckboxProps } from "./filter-checkbox";
import { Input } from "../ui";

interface Props {
  title: string;
  items: FilterCheckboxProps[];
  defaultItems?: FilterCheckboxProps[];
  limit?: number;
  searchInputPlaceholder?: string;
  onChange?: (values: string[]) => void;
  defaultValues?: string[];
  className?: string;
}

export const CheckboxFiltersGroup: React.FC<Props> = ({
  title,
  items,
  defaultItems,
  limit = 5,
  searchInputPlaceholder = "Search...",
  onChange,
  defaultValues,
  className,
}) => {
  return (
    <div className={cn("pt-4", className)}>
      <p className="font-bold mb-3">{title}</p>

      <div className="mb-5">
        <Input
          type="text"
          placeholder={searchInputPlaceholder}
          className="bg-gray-50 border-none"
        />
      </div>

      <div className="flex flex-col gap-4 max-h-96 overflow-y-auto pr-2 scrollbar">
        {items.map((item, index) => (
          <FilterCheckbox
            key={index}
            text={item.text}
            value={item.value}
            endAdornment={item.endAdornment}
            onCheckedChange={(ids) => console.log(ids)}
            checked={false}
          />
        ))}
      </div>
    </div>
  );
};
