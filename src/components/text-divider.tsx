interface DividerProps {
  text: string;
}

export function TextDivider({ text }: DividerProps) {
  return (
    <div className="flex items-center gap-2">
      <div className="h-[1px] flex-1 bg-gray-600" />
      <span className="text-sm text-neutral-500">{text}</span>
      <div className="h-[1px] flex-1 bg-gray-600" />
    </div>
  );
}
