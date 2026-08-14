import { Button as ButtonPrimitive } from "@base-ui/react/button"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonRadius = "rounded-[10px]"

const buttonVariants = cva(
  cn(
    "group/button inline-flex shrink-0 cursor-pointer items-center justify-center border border-transparent bg-clip-padding text-sm font-semibold whitespace-nowrap outline-none select-none transition-colors duration-150",
    buttonRadius,
    "focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50",
    "disabled:pointer-events-none disabled:opacity-50",
    "aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40",
    "[&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  ),
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/85",
        outline:
          "border-border bg-background font-medium hover:bg-muted hover:text-foreground aria-expanded:bg-muted aria-expanded:text-foreground dark:border-input dark:bg-input/30 dark:hover:bg-input/50",
        secondary:
          "bg-secondary font-medium text-secondary-foreground hover:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_5%)] aria-expanded:bg-secondary aria-expanded:text-secondary-foreground",
        ghost:
          "font-medium hover:bg-muted hover:text-foreground aria-expanded:bg-muted aria-expanded:text-foreground dark:hover:bg-muted/50",
        destructive:
          "bg-destructive/10 font-medium text-destructive hover:bg-destructive/20 focus-visible:border-destructive/40 focus-visible:ring-destructive/20 dark:bg-destructive/20 dark:hover:bg-destructive/30 dark:focus-visible:ring-destructive/40",
        link: "font-medium text-primary underline-offset-4 hover:underline",
        brand: cn(
          "btn-fill bg-brand-teal text-brand-navy shadow-sm shadow-brand-teal/10 hover:bg-brand-teal/90",
        ),
        brandOutline: cn(
          "btn-fill border-brand-navy/15 bg-white/60 text-brand-navy hover:bg-white/75",
        ),
        brandOutlineLight: cn(
          "btn-fill border-white/25 bg-white/[0.08] text-white hover:border-white/35 hover:bg-white/[0.12]",
        ),
        brandNavy: cn(
          "btn-fill border-brand-navy/10 bg-brand-navy text-white shadow-sm shadow-black/10 hover:bg-brand-navy/90",
        ),
      },
      size: {
        default: "h-9 gap-1.5 px-3 font-medium has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2",
        xs: "h-7 gap-1 px-2.5 text-xs font-medium has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 [&_svg:not([class*='size-'])]:size-3",
        sm: "h-8 gap-1.5 px-3.5 text-[0.8125rem] font-medium has-data-[icon=inline-end]:pr-2.5 has-data-[icon=inline-start]:pl-2.5 [&_svg:not([class*='size-'])]:size-3.5",
        lg: "gap-2 px-6 py-3 text-sm has-data-[icon=inline-end]:pr-5 has-data-[icon=inline-start]:pl-5",
        cta: "gap-2 px-6 py-3 text-sm has-data-[icon=inline-end]:pr-5 has-data-[icon=inline-start]:pl-5",
        ctaSm: "gap-1.5 px-4 py-2 text-sm has-data-[icon=inline-end]:pr-3 has-data-[icon=inline-start]:pl-3",
        icon: "size-9",
        "icon-xs": "size-7 [&_svg:not([class*='size-'])]:size-3",
        "icon-sm": "size-8 [&_svg:not([class*='size-'])]:size-3.5",
        "icon-lg": "size-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant = "default",
  size = "default",
  ...props
}: ButtonPrimitive.Props & VariantProps<typeof buttonVariants>) {
  return (
    <ButtonPrimitive
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
