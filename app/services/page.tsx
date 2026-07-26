import { SectionHeading } from "../components/SectionHeading";
import { SiteFooter } from "../components/SiteFooter";
import { SiteHeader } from "../components/SiteHeader";
import Link from "next/link";
import { consultationCategories, fourCommonUnknowns, serviceConsultationProcess } from "../../content/site";

export default function ServicesPage() {
  return <><SiteHeader /><main>
    <section id="consultation-topics" className="services-topics" aria-labelledby="consultation-topics-title"><div className="container">
      <p className="eyebrow">SERVICES</p><h1 id="consultation-topics-title">困り方別に見る相談</h1><p className="services-topics-lead">サービス名を選ぶ必要はありません。近い困りごとを選ぶと、具体的な相談の進め方をご覧いただけます。</p>
      <div className="service-category-grid">{consultationCategories.map((category) => <article key={category.id}><header><span>{category.id}</span><div><h2>{category.title}</h2><p>{category.outcome}</p></div></header><ul>{category.scenarios.map((scenario) => <li key={scenario.id}><Link href={`/services#scenario-${scenario.id}`}>{scenario.title}<span aria-hidden="true">→</span></Link></li>)}</ul></article>)}</div>
    </div></section>

    <section id="consultation-scenarios" className="section section-muted" aria-labelledby="consultation-scenarios-title"><div className="container">
      <SectionHeading eyebrow="CONSULTATION SCENARIOS" title="相談例と解決イメージ" text="選んだ困りごとごとに、初回30分で整理することと、その後に必要となる調査・検証、相談後に進める状態を示します。" />
      <div className="service-scenario-groups">{consultationCategories.map((category) => <section id={`service-category-${category.id}`} key={category.id} className="service-scenario-group"><header><span>{category.id}</span><div><h2>{category.title}</h2><p>{category.outcome}</p></div></header><div className="service-scenario-list">{category.scenarios.map((scenario) => <article id={`scenario-${scenario.id}`} key={scenario.id}><h3>{scenario.title}</h3><dl><div><dt>実際の状況</dt><dd>{scenario.situation}</dd></div><div><dt>30分で整理すること</dt><dd>{scenario.first}</dd></div><div><dt>必要に応じて行うプロセス</dt><dd>{scenario.process}</dd></div><div><dt>得られる状態</dt><dd>{scenario.outcome}</dd></div></dl></article>)}</div></section>)}</div>
    </div></section>

    <section id="common-unknowns" className="section" aria-labelledby="common-unknowns-title"><div className="container">
      <SectionHeading eyebrow="COMMON QUESTIONS" title="よくある四つの「分からない」" text="技術課題は、まずこの四つの「分からない」として現れることが多くあります。" />
      <div className="common-unknown-grid">{fourCommonUnknowns.map((item, index) => <article key={item.question}><span>{String(index + 1).padStart(2, "0")}</span><p>{item.question}</p><b aria-hidden="true">→</b><strong>{item.answer}</strong></article>)}</div>
      <p className="common-unknown-note">いずれにも当てはまらない、まだ課題として言語化できていない段階でもご相談いただけます。</p>
    </div></section>

    <section id="support-process" className="section section-muted" aria-labelledby="support-process-title"><div className="container">
      <SectionHeading eyebrow="HOW WE WORK" title="支援の進め方" text="初回の相談から、必要な場合だけ次の調査・検証・実装へ進みます。" />
      <ol className="service-process-list">{serviceConsultationProcess.map((step, index) => <li key={step}><span>{String(index + 1).padStart(2, "0")}</span>{step}</li>)}</ol>
      <div className="service-process-branches" aria-label="相談後の進み方"><p>相談後の進み方</p><div><span>30分で解決して終了</span><span>顧客自身で次へ進む</span><span>継続支援を依頼する</span></div></div>
    </div></section>

    <section id="free-consultation" className="services-final-cta" aria-labelledby="services-consultation-title"><div className="container"><div><p className="eyebrow">FREE 30-MINUTE CONSULTATION</p><h2 id="services-consultation-title">まずは30分、その場で解決しにいきます。</h2><p>初回30分は無料です。その場で解決できることは、その場で回答します。30分で十分なら、それで終了です。追加の調査・検証・設計・実装が必要な場合のみ、その先をご提案します。</p></div><Link className="button button-primary" href="/contact">30分無料で相談する <span aria-hidden="true">→</span></Link></div></section>
  </main><SiteFooter /></>;
}
