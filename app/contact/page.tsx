import { ContactForm } from "../components/ContactForm";
import { PageHero } from "../components/PageHero";
import { SiteFooter } from "../components/SiteFooter";
import { SiteHeader } from "../components/SiteHeader";
import { firstContactSteps, freeConsultationSteps } from "../../content/site";
import { Suspense } from "react";

export default function ContactPage() { return <><SiteHeader /><main><PageHero title="30分無料相談" lead="相談先が分からない段階で構いません。課題が整理されていなくても、技術名称が分からなくても、まず30分で何を考えるべきかを整理します。" />
  <section className="section section-ink consultation-section" aria-labelledby="contact-consultation-title"><div className="container consultation-layout"><div><p className="eyebrow">初回30分無料相談</p><h2 id="contact-consultation-title">30分で、次に何をすべきかを整理します</h2><p>初回30分は無料です。案件化を目的に引き延ばすことはありません。その場で解決できることはその場で回答し、30分で十分ならそこで終了します。</p></div><ol className="consultation-flow" aria-label="無料相談の流れ">{freeConsultationSteps.map((step, index) => <li key={step}><span>{String(index + 1).padStart(2, "0")}</span>{step}</li>)}</ol></div></section>
  <section className="section contact-section"><div className="container contact-layout"><div><p className="eyebrow">相談内容を送る</p><h2>分かっている範囲だけで、<br />お知らせください。</h2><p className="contact-copy">困っていることを一言で書ける状態で十分です。資料の準備や、サービス名の選択は必要ありません。案件化を前提とせず、まず30分で状況を整理します。</p><ol className="contact-steps" aria-label="送信後の流れ">{firstContactSteps.map((step, index) => <li key={step}><span>{String(index + 1).padStart(2, "0")}</span>{step}</li>)}</ol></div><Suspense fallback={<div className="contact-form" aria-busy="true" />}><ContactForm /></Suspense></div></section>
</main><SiteFooter /></> }
