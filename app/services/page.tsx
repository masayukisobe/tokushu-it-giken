import { SectionHeading } from "../components/SectionHeading";
import { SiteFooter } from "../components/SiteFooter";
import { SiteHeader } from "../components/SiteHeader";
import Link from "next/link";
import { consultationCategories, serviceConsultationProcess } from "../../content/site";
import { ConsultationCategories } from "./ConsultationCategories";

export default function ServicesPage() {
  return <><SiteHeader /><main>
    <section id="consultation-topics" className="services-topics" aria-labelledby="consultation-topics-title"><div className="container">
      <h1 id="consultation-topics-title">困り方別に見る相談</h1><p className="services-topics-lead">近い困りごとを選ぶと、その状況で何を整理し、どのような支援へ進めるかをご覧いただけます。</p>
      <ConsultationCategories categories={consultationCategories} />
    </div></section>

    <section id="support-process" className="section section-muted" aria-labelledby="support-process-title"><div className="container">
      <SectionHeading title="支援の進め方" text="技術的な判断を、目的・範囲・役割・工程が定まった実行計画へつなげ、必要に応じて設計・実装と技術推進まで担います。" />
      <ol className="service-process-list">{serviceConsultationProcess.map((step, index) => <li key={step}><span>{String(index + 1).padStart(2, "0")}</span>{step}</li>)}</ol>
      <div className="service-process-branches" aria-label="相談後の進み方"><p>相談後の進み方</p><div><span>30分で方向が定まり完了</span><span>判断材料と実行計画を受け取り、社内で進める</span><span>技術推進まで継続して依頼する</span></div></div>
    </div></section>

    <section id="free-consultation" className="services-final-cta" aria-labelledby="services-consultation-title"><div className="container"><div><p className="eyebrow">初回30分無料相談</p><h2 id="services-consultation-title">まずは30分、判断を前へ進めます</h2><p>その場で回答できることは、その場で回答します。追加確認が必要な場合は、未確認事項と次の判断を明らかにします。30分で方向が定まれば、それで完了です。継続支援が必要な場合のみ、支援範囲と実行計画をご提案します。</p></div><Link className="button button-primary" href="/contact">30分無料で相談する <span aria-hidden="true">→</span></Link></div></section>
  </main><SiteFooter /></>;
}
