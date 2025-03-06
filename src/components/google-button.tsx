import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import FcGoogle from "@/assets/icons8-google.svg";

interface GoogleButtonProps {
  onClick: () => void;
}

function GoogleButton({ onClick }: GoogleButtonProps) {
  return (
    <Button
      onClick={onClick}
      className={cn(
        "w-full max-w-sm flex items-center justify-center gap-2",
        "bg-transparent text-white font-semibold",
        "border border-gray-500 rounded-full py-3 px-6",
        "hover:bg-opacity-90 hover:text-gray-300 hover:border-1 hover:border-gray-300 transition"
      )}
    >
      <img src={FcGoogle} alt="Google" className="w-6 h-6" />
      Sign up with Google
    </Button>
  );
}

export { GoogleButton };
