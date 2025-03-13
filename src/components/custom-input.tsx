import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { useState } from "react";

interface CustomInputProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  error?: string;
  type?: string;
}

function CustomInput({
  label,
  value,
  onChange,
  placeholder,
  error,
  type,
}: CustomInputProps) {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className="flex flex-col w-full">
      <Label className={cn("text-gray-400", error && "text-red-500")}>
        {label}
      </Label>
      <Input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        placeholder={placeholder}
        type={type}
        className={cn(
          "border-0 rounded-none border-r-0 border-b-2 bg-transparent text-white px-0 focus:outline-none transition-all focus-visible:border-0 focus-visible:border-b-2 focus-visible:border-b-white focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:ring-offset-transparent py-0 mt-2 pb-[18px]",
          isFocused
            ? "border-b-white"
            : value
              ? "border-gray-500"
              : "border-gray-600",
          error && "border-red-500 border-b-1"
        )}
      />
      {error && <span className="text-red-500 text-sm mt-1">{error}</span>}
    </div>
  );
}

export { CustomInput };
