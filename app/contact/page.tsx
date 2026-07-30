import { Suspense } from "react";
import { ContactForm } from "../components/ContactForm";
import { SiteFooter } from "../components/SiteFooter";
import { SiteHeader } from "../components/SiteHeader";
import { firstContactSteps } from "../../content/site";

export default function ContactPage() {
  return <><SiteHeader /><main className="contact-page">
    <section className="contact-hero" aria-labelledby="contact-title"><div className="container"><p className="eyebrow">初回30分無料相談</p><h1 id="contact-title">まずは30分、判断を前へ進めます</h1><p>その場で回答できることは、その場で回答します。追加確認が必要な場合は、未確認事項、判断基準、担当すべき役割、確認する順序を明らかにします。30分で方向が定まれば、それで完了です。継続支援が必要な場合のみ、診断、評価、実行設計、必要な技術検証をご提案します。</p></div></section>

    <section className="contact-form-section" aria-labelledby="contact-form-title"><div className="container contact-layout"><div><p className="eyebrow">相談フォーム</p><h2 id="contact-form-title">分かっている範囲で、<br />お知らせください</h2><p className="contact-copy">現在起きていること、実現したいこと、時期や関係者など、分かっている範囲で十分です。資料の準備や技術名の整理は必要ありません。</p></div><Suspense fallback={<div className="contact-form" aria-busy="true" />}><ContactForm /></Suspense></div></section>

    <section className="contact-flow-section" aria-labelledby="contact-flow-title"><div className="container"><p className="eyebrow">送信後の流れ</p><h2 id="contact-flow-title">回答と、次に進むための判断を残します</h2><ol className="contact-steps" aria-label="送信後の流れ">{firstContactSteps.map((step, index) => <li key={step}><span>{String(index + 1).padStart(2, "0")}</span>{step}</li>)}</ol></div></section>
  </main><SiteFooter /></>;
}
