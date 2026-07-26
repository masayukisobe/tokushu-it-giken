import { Suspense } from "react";
import { ContactForm } from "../components/ContactForm";
import { SiteFooter } from "../components/SiteFooter";
import { SiteHeader } from "../components/SiteHeader";
import { firstContactSteps } from "../../content/site";

export default function ContactPage() {
  return <><SiteHeader /><main className="contact-page">
    <section className="contact-hero" aria-labelledby="contact-title"><div className="container"><p className="eyebrow">初回30分無料相談</p><h1 id="contact-title">まずは30分、その場で整理します</h1><p>初回30分は無料です。その場で解決できることは回答し、30分で十分ならそこで終了します。追加の調査・検証・設計・実装が必要な場合だけ、その先をご提案します。</p></div></section>

    <section className="contact-form-section" aria-labelledby="contact-form-title"><div className="container contact-layout"><div><p className="eyebrow">相談フォーム</p><h2 id="contact-form-title">分かっている範囲で、<br />お知らせください</h2><p className="contact-copy">困っていることを一言で書ける状態で十分です。資料の準備や技術名の整理は必要ありません。</p></div><Suspense fallback={<div className="contact-form" aria-busy="true" />}><ContactForm /></Suspense></div></section>

    <section className="contact-flow-section" aria-labelledby="contact-flow-title"><div className="container"><p className="eyebrow">送信後の流れ</p><h2 id="contact-flow-title">内容を確認して、相談の進め方をご案内します</h2><ol className="contact-steps" aria-label="送信後の流れ">{firstContactSteps.map((step, index) => <li key={step}><span>{String(index + 1).padStart(2, "0")}</span>{step}</li>)}</ol></div></section>
  </main><SiteFooter /></>;
}
