import type { Metadata } from "next";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;
const socialImages = siteUrl ? [{ url: new URL("/og.png", siteUrl), width: 1200, height: 630, alt: "特殊IT技研" }] : undefined;

export const metadata: Metadata = {
  metadataBase: siteUrl ? new URL(siteUrl) : undefined,
  title: { default: "特殊IT技研 | どこに頼めばよいか分からない技術課題を、構造から解く。", template: "%s | 特殊IT技研" },
  description: "前例や専門家が見つからない複雑な技術課題を整理し、技術判断から検証・設計・実装まで支援するエンジニアリングサービスです。",
  openGraph: { title: "特殊IT技研 | どこに頼めばよいか分からない技術課題を、構造から解く。", description: "複数領域にまたがる技術課題を整理し、技術判断から検証・設計・実装まで支援します。", type: "website", locale: "ja_JP", ...(socialImages ? { images: socialImages } : {}) },
  twitter: { card: "summary_large_image", title: "特殊IT技研 | どこに頼めばよいか分からない技術課題を、構造から解く。", description: "複数領域にまたがる技術課題を整理し、技術判断から検証・設計・実装まで支援します。", ...(socialImages ? { images: socialImages.map((image) => image.url) } : {}) },
  robots: { index: true, follow: true },
  icons: { icon: "/favicon.svg" },
};

const structuredData = { "@context": "https://schema.org", "@type": "ProfessionalService", name: "特殊IT技研", alternateName: "Specialized IT Engineering Lab", description: "複数領域にまたがる技術課題の整理、技術選定、検証・実装を支援する技術コンサルティング・エンジニアリング事業。", areaServed: "JP", ...(siteUrl ? { url: siteUrl } : {}) };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="ja"><body>{children}<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} /></body></html>;
}
