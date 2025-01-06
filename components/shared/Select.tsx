"use client";
import * as React from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function SelectComp({
  placeholder,
  label,
  items,
}: {
  placeholder: string;
  label: string;
  items: {
    value: string;
    label: string;
  }[];
}) {
  const handleChange = (value: string) => {
    console.log(value);
  };
  return (
    <Select onValueChange={handleChange}>
      <SelectTrigger className="w-full h-10 border-gray-500 text-base text-gray-600 outline-none">
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>{label}</SelectLabel>
          {items.map((item, index) => (
            <SelectItem key={index} value={item.value}>
              {item.label}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
