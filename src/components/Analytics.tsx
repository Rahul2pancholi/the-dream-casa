import Script from "next/script";
import { siteConfig } from "@/lib/site";

export function Analytics() {
  const id = siteConfig.ga4Id;
  if (!id || id === "G-XXXXXXXXXX") return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${id}`}
        strategy="afterInteractive"
      />
      <Script id="ga4-config" strategy="afterInteractive">
        {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${id}',{page_path:window.location.pathname});`}
      </Script>
    </>
  );
}
