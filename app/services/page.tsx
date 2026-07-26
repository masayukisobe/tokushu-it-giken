import { SectionHeading } from "../components/SectionHeading";
import { SiteFooter } from "../components/SiteFooter";
import { SiteHeader } from "../components/SiteHeader";
import Link from "next/link";
import { consultationCategories, serviceConsultationProcess } from "../../content/site";

export default function ServicesPage() {
  return <><SiteHeader /><main>
    <section id="consultation-topics" className="services-topics" aria-labelledby="consultation-topics-title"><div className="container">
      <h1 id="consultation-topics-title">困り方別に見る相談</h1><p className="services-topics-lead">近い困りごとを選ぶと、その状況で何を整理し、どのような支援へ進めるかをご覧いただけます。</p>
      <div className="service-category-grid">{consultationCategories.map((category) => <article id={`category-${category.id}`} key={category.id}><header><span>{category.id}</span><div><h2>{category.title}</h2><p>{category.outcome}</p><p className="service-category-prompt">この中から近い状況を選ぶ</p></div></header><ul>{category.scenarios.map((scenario) => <li key={scenario.id}><Link href={`/services/${scenario.id}`}><span className="service-scenario-title">{scenario.title}</span><span className="service-scenario-arrow" aria-hidden="true">↗</span></Link></li>)}</ul></article>)}</div>
    </div></section>

    <section id="support-process" className="section section-muted" aria-labelledby="support-process-title"><div className="container">
      <SectionHeading title="支援の進め方" text="初回の相談から、必要な場合だけ次の調査・検証・実装へ進みます。" />
      <ol className="service-process-list">{serviceConsultationProcess.map((step, index) => <li key={step}><span>{String(index + 1).padStart(2, "0")}</span>{step}</li>)}</ol>
      <div className="service-process-branches" aria-label="相談後の進み方"><p>相談後の進み方</p><div><span>30分で解決して終了</span><span>顧客自身で次へ進む</span><span>継続支援を依頼する</span></div></div>
    </div></section>

    <section id="free-consultation" className="services-final-cta" aria-labelledby="services-consultation-title"><div className="container"><div><p className="eyebrow">初回30分無料相談</p><h2 id="services-consultation-title">まずは30分、その場で解決しにいきます。</h2><p>初回30分は無料です。その場で解決できることは、その場で回答します。30分で十分なら、それで終了です。追加の調査・検証・設計・実装が必要な場合のみ、その先をご提案します。</p></div><Link className="button button-primary" href="/contact">30分無料で相談する <span aria-hidden="true">→</span></Link></div></section>
  </main><SiteFooter /></>;
}
