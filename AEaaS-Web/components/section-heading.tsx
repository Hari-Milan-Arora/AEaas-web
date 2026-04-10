import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "space-y-4",
        align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-2xl",
      )}
    >
      <span className="section-label">{eyebrow}</span>
      <div className="space-y-3">
        <h2 className="text-3xl font-semibold tracking-tight text-slate-950 dark:text-white md:text-4xl">
          {title}
        </h2>
        <p className="text-base leading-7 text-slate-600 dark:text-slate-300 md:text-lg">
          {description}
        </p>
      </div>
    </div>
  );
}
