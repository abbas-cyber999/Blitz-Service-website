import { Input } from "@/components/ui/input";

export function ExerciseInput({
  value,
  placeholder,
  supportPlaceholder,
  disabled,
  onChange
}: Readonly<{
  value: string;
  placeholder: string;
  supportPlaceholder?: string;
  disabled: boolean;
  onChange: (value: string) => void;
}>) {
  return (
    <div className="space-y-2">
      {supportPlaceholder ? (
        <p className="text-sm leading-8 text-[color:var(--foreground-muted)]" dir="rtl" lang="ar">
          {supportPlaceholder}
        </p>
      ) : null}
      <Input
        value={value}
        onChange={(event) => onChange(event.target.value)}
        disabled={disabled}
        placeholder={placeholder}
        className="h-14 rounded-[22px] text-base"
      />
    </div>
  );
}
