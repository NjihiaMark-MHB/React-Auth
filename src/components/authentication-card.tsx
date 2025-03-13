import { cn } from "@/lib/utils";
interface AuthenticationCardProps {
  children: React.ReactNode;
  classname?: string;
}

function AuthenticationCard({ children, classname }: AuthenticationCardProps) {
  return (
    <div
      className={cn(
        "w-full p-8 bg-slate-900 rounded-[20px] md:w-[400px]",
        classname
      )}
    >
      {children}
    </div>
  );
}

export default AuthenticationCard;
