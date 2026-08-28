import { cn } from "@/lib/utils";

type LogoProps = {
  invert?: boolean;
  className?: string;
};

export function Logo({ invert = false, className }: LogoProps) {
  return (
    <img
      src="/brand/oliver-logo.svg"
      alt="Oliver Property Management"
      className={cn("h-9 w-auto select-none md:h-10", invert && "brightness-0 invert", className)}
    />
  );
}
