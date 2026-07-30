import { SiteFooter } from "../components/SiteFooter";
import { SiteHeader } from "../components/SiteHeader";
import Link from "next/link";
import { consultationCategories, consultationSceneServiceStages, projectDeliveryPhases } from "../../content/site";
import { ConsultationCategories } from "./ConsultationCategories";
import { DeliveryFlow } from "../components/DeliveryFlow";

export default function ServicesPage() {
  return <><SiteHeader /><main>
    <section id="support-process" className="services-topics services-offer" aria-labelledby="support-process-title"><div className="container">
      <h1 id="support-process-title">技術課題を、診断から実行設計・検証へ</h1>
      <p className="services-topics-lead">相談先も進め方も定まらない技術課題を診断し、意思決定から実行設計、必要な技術検証まで支援します。</p>
      <p className="services-position-note">PMO、外部テックリード、総合コンサルではありません。プロジェクト管理・推進は、技術判断を成果へつなげるために必要な範囲で扱います。</p>
      <DeliveryFlow phases={projectDeliveryPhases} />
      <div className="service-process-branches" aria-label="依頼できる範囲"><p>依頼できる範囲</p><div><span>30分で論点と次の確認が定まり完了</span><span>診断・評価・実行設計を依頼</span><span>必要な技術検証・設計・レビューまで依頼</span></div></div>
    </div></section>

    <section id="consultation-topics" className="section section-muted services-scenes" aria-labelledby="consultation-topics-title"><div className="container">
      <h2 id="consultation-topics-title" className="page-section-title">困り方別に見る相談</h2>
      <p className="services-topics-lead">近い状況を選ぶと、4つの支援のどこから依頼でき、何が成果として残るかをご覧いただけます。</p>
      <ConsultationCategories categories={consultationCategories} serviceStages={projectDeliveryPhases} sceneServiceStages={consultationSceneServiceStages} />
    </div></section>

    <section id="free-consultation" className="services-final-cta" aria-labelledby="services-consultation-title"><div className="container"><div><p className="eyebrow">初回30分無料相談</p><h2 id="services-consultation-title">まずは30分、判断を前へ進めます</h2><p>その場で回答できることは、その場で回答します。追加確認が必要な場合は、未確認事項と次の判断を明らかにします。30分で方向が定まれば、それで完了です。継続支援が必要な場合のみ、診断、評価、実行設計、必要な技術検証をご提案します。</p></div><Link className="button button-primary" href="/contact">30分無料で相談する <span aria-hidden="true">→</span></Link></div></section>
  </main><SiteFooter /></>;
}
