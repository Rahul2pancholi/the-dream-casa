import QRCode from "react-qr-code";
import { siteConfig } from "@/lib/site";

type InstagramQRProps = {
  size?: number;
};

export function InstagramQR({ size = 110 }: InstagramQRProps) {
  return (
    <QRCode
      value={siteConfig.instagram.url}
      size={size}
      bgColor="#FFFFFF"
      fgColor="#141310"
      level="H"
      aria-label={`QR code to follow ${siteConfig.name} on Instagram`}
    />
  );
}
