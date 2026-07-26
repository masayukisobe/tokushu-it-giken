import { PageHero } from "../components/PageHero";
import { SectionHeading } from "../components/SectionHeading";
import { SiteFooter } from "../components/SiteFooter";
import { SiteHeader } from "../components/SiteHeader";
import Link from "next/link";
import { fourCommonUnknowns, serviceConsultationProcess, serviceConsultationStories, serviceConsultationTopics } from "../../content/site";

export default function ServicesPage() {
  return <><SiteHeader /><main>
    <PageHero eyebrow="SERVICES" title="技術課題の相談" lead="誰に相談すればよいか分からない段階から、技術判断、検証、設計、実装まで、必要な範囲を支援します" />

    <section id="consultation-topics" className="section" aria-labelledby="consultation-topics-title"><div className="container">
      <SectionHeading eyebrow="CONSULTATION TOPICS" title="困り方別に見る相談" text="サービス名を選ぶ必要はありません。今の困りごとに近いものから、ご相談ください。" />
      <ul className="service-topic-grid">{serviceConsultationTopics.map((topic, index) => <li key={topic}><span>{String(index + 1).padStart(2, "0")}</span>{topic}</li>)}</ul>
    </div></section>

    <section id="consultation-examples" className="section section-muted" aria-labelledby="consultation-examples-title"><div className="container">
      <SectionHeading eyebrow="CONSULTATION EXAMPLES" title="相談例と解決イメージ" text="典型的な相談が、初回の整理から必要な検証を経て、次の判断へどう進むかを示します。" />
      <div className="service-story-grid">{serviceConsultationStories.map((story, index) => <article key={story.title}><header><span>{String(index + 1).padStart(2, "0")}</span><h3>{story.title}</h3></header><dl><div><dt>相談時の状況</dt><dd>{story.situation}</dd></div><div><dt>初回30分で整理すること</dt><dd>{story.first}</dd></div><div><dt>必要に応じて行う調査・検証</dt><dd>{story.research}</dd></div><div><dt>得られる判断や成果物</dt><dd>{story.output}</dd></div><div><dt>相談後に進める状態</dt><dd>{story.after}</dd></div></dl></article>)}</div>
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
