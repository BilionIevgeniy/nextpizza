import React from "react";
import { cn } from "@/lib/utils";
import { Checkbox } from "../ui";

export interface FilterCheckboxProps {
  text?: string;
  value?: string;
  onCheckedChange?: (value: boolean) => void;
  checked?: boolean;
  endAdornment?: React.ReactNode;
  className?: string;
}

export const FilterCheckbox: React.FC<FilterCheckboxProps> = ({
  text,
  value,
  onCheckedChange,
  checked,
  endAdornment,
  className,
}) => {
  return (
    <div className={cn("flex items-center space-x-2", className)}>
      <Checkbox
        onCheckedChange={onCheckedChange}
        value={value}
        checked={checked}
        className="rounded-[8px] w-6 h-6"
        id={`checkbox-${String(value)}`}
      />
      <label
        htmlFor={`checkbox-${String(value)}`}
        className="leading-none cursor-pointer flex-1"
      >
        {text}
      </label>
      {endAdornment}
    </div>
  );
};
