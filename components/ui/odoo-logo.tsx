import Image from "next/image";
import { logos } from "@/lib/site";
import { cn } from "@/lib/utils";

/** viewBox du SVG odoo-logo.svg : 919 × 495 */
const ODOO_LOGO_ASPECT = 919 / 495;

type OdooLogoProps = {
  /** Hauteur d'affichage en px — la largeur est dérivée du ratio SVG. */
  height: number;
  className?: string;
};

export function OdooLogo({ height, className }: OdooLogoProps) {
  const width = Math.round(height * ODOO_LOGO_ASPECT);

  return (
    <Image
      src={logos.odoo}
      alt="Odoo"
      width={width}
      height={height}
      className={cn(className)}
    />
  );
}
