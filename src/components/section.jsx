import { cn } from "@/lib/utils";

export function Section({
  className,
  children,
  id,
}) {
  return (
    <section id={id} className={cn("py-16 md:py-24", className)}>
      <div className="container mx-auto px-4">{children}</div>
    </section>
  );
}
