import type { ReactNode } from "react";
import { MessageCircle } from "lucide-react";
import { whatsappLink } from "@/config/restaurant";
import { cn } from "@/lib/utils";

export function WhatsAppButton({
  children,
  message,
  className,
  variant = "solid",
}: {
  children: ReactNode;
  message?: string;
  className?: string;
  variant?: "solid" | "outline";
}) {
  return (
    <a
      href={whatsappLink(message)}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "inline-flex min-h-11 items-center justify-center gap-2 rounded-sm px-5 text-sm font-semibold tracking-wide transition-all duration-300",
        variant === "solid"
          ? "bg-primary text-primary-foreground hover:brightness-110 hover:shadow-lg"
          : "border border-gold/70 text-foreground hover:bg-accent",
        className,
      )}
    >
      <MessageCircle className="h-4 w-4" aria-hidden="true" />
      {children}
    </a>
  );
}
