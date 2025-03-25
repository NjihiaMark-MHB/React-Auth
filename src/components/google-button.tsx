import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import FcGoogle from "@/assets/icons8-google.svg?react";

interface GoogleButtonProps {
  onClick: () => void;
  label: string;
}

function GoogleButton({ onClick, label }: GoogleButtonProps) {
  return (
    <Button
      onClick={onClick}
      className={cn(
        "w-full flex items-center justify-center gap-2",
        "bg-transparent text-gray-400 font-semibold",
        "border border-gray-500 rounded-full py-3 px-6",
        "hover:bg-opacity-90 hover:text-gray-300 hover:border-1 hover:border-gray-300 transition"
      )}
    >
      <FcGoogle className="w-6 h-6" />
      {label}
    </Button>
  );
}

export { GoogleButton };
