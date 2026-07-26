import type { Metadata } from "next";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;
const publicAssetPath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const socialImages = siteUrl ? [{ url: new URL(`${publicAssetPath}/og.png`, siteUrl), width: 1200, height: 630, alt: "特殊IT技研" }] : undefined;

export const metadata: Metadata = {
  metadataBase: siteUrl ? new URL(siteUrl) : undefined,
  title: { default: "特殊IT技研 | 技術課題に、見立てと次の一手を。", template: "%s | 特殊IT技研" },
  description: "前例も頼れる専門家も見つからない技術課題を、事業要件と現場の制約をふまえて読み解きます。一次情報の調査と検証で判断材料を整え、必要に応じて設計・実装まで支援します。",
  openGraph: { title: "特殊IT技研 | 技術課題に、見立てと次の一手を。", description: "前例も頼れる専門家も見つからない技術課題を、一次情報の調査と検証で読み解き、必要に応じて設計・実装まで支援します。", type: "website", locale: "ja_JP", ...(socialImages ? { images: socialImages } : {}) },
  twitter: { card: "summary_large_image", title: "特殊IT技研 | 技術課題に、見立てと次の一手を。", description: "前例も頼れる専門家も見つからない技術課題を、一次情報の調査と検証で読み解き、必要に応じて設計・実装まで支援します。", ...(socialImages ? { images: socialImages.map((image) => image.url) } : {}) },
  robots: { index: true, follow: true },
  icons: { icon: `${publicAssetPath}/favicon.svg` },
};

const structuredData = { "@context": "https://schema.org", "@type": "ProfessionalService", name: "特殊IT技研", alternateName: "Specialized IT Engineering Lab", description: "複数領域にまたがる技術課題の整理、技術選定、検証・実装を支援する技術コンサルティング・エンジニアリング事業。", areaServed: "JP", ...(siteUrl ? { url: siteUrl } : {}) };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="ja"><body>{children}<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} /></body></html>;
}
