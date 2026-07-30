import type { Metadata } from "next";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;
const publicAssetPath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const socialImages = siteUrl ? [{ url: new URL(`${publicAssetPath}/og.png`, siteUrl), width: 1200, height: 630, alt: "特殊IT技研" }] : undefined;

export const metadata: Metadata = {
  metadataBase: siteUrl ? new URL(siteUrl) : undefined,
  title: { default: "特殊IT技研 | 技術課題に、見立てと次の一手を。", template: "%s | 特殊IT技研" },
  description: "相談先も進め方も定まらない技術課題を診断し、意思決定から実行設計、必要な技術検証まで支援します。",
  openGraph: { title: "特殊IT技研 | 技術課題に、見立てと次の一手を。", description: "相談先も進め方も定まらない技術課題を診断し、意思決定、実行設計、必要な技術検証へつなげます。", type: "website", locale: "ja_JP", ...(socialImages ? { images: socialImages } : {}) },
  twitter: { card: "summary_large_image", title: "特殊IT技研 | 技術課題に、見立てと次の一手を。", description: "相談先も進め方も定まらない技術課題を診断し、意思決定、実行設計、必要な技術検証へつなげます。", ...(socialImages ? { images: socialImages.map((image) => image.url) } : {}) },
  robots: { index: true, follow: true },
  icons: { icon: `${publicAssetPath}/favicon.svg` },
};

const structuredData = { "@context": "https://schema.org", "@type": "ProfessionalService", name: "特殊IT技研", alternateName: "Specialized IT Engineering Lab", description: "相談先も進め方も定まらない技術課題を診断し、技術意思決定、実行設計、必要な技術検証を支援するエンジニアリングサービス。", areaServed: "JP", ...(siteUrl ? { url: siteUrl } : {}) };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="ja"><body>{children}<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} /></body></html>;
}
