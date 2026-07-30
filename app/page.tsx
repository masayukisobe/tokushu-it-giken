import Link from "next/link";
import { SiteFooter } from "./components/SiteFooter";
import { SiteHeader } from "./components/SiteHeader";
import {
  consultationCategories,
  projectDeliveryPhases,
  reasonsToEntrust,
  representativeSummary,
} from "../content/site";
import { aiConsultationThemes } from "../content/ai";
import { DeliveryFlow } from "./components/DeliveryFlow";

export default function Home() {
  return <><SiteHeader /><main>
    <section className="hero hero-decision" aria-labelledby="hero-title"><div className="hero-grid" aria-hidden="true" /><div className="hero-inner hero-layout">
      <div className="hero-message"><h1 id="hero-title">どこに頼めばいいか分からない。<br /><em>そんな技術課題に、<br />見立てと、次の一手を。</em></h1><p className="hero-copy">前例も、頼れる専門家も見つからない技術課題を、事業要件と現場の制約をふまえて解きほぐします。一次情報の調査と検証から、実行計画、設計・実装、プロジェクトの技術推進まで一貫して支援します。</p><div className="hero-actions"><Link className="button button-primary" href="/contact">30分無料で相談する <span aria-hidden="true">→</span></Link></div></div>
      <DeliveryFlow phases={projectDeliveryPhases} compact />
    </div></section>

    <section className="home-categories-section" aria-labelledby="home-categories-title"><div className="container">
      <div className="home-categories-heading"><h2 id="home-categories-title">相談例</h2><p>現在の状況に近いものをお選びください。</p></div>
      <div className="home-category-links" aria-label="相談例">{consultationCategories.map((category) => <Link key={category.id} href={`/services/#category-${category.id}`}><span>{category.id}</span><strong>{category.title}</strong><p>{category.outcome}</p><small>詳しい相談例を見る <b aria-hidden="true">↗</b></small></Link>)}</div>
    </div></section>

    <section className="home-reasons" aria-labelledby="home-reasons-title"><div className="container home-reasons-layout"><div><h2 id="home-reasons-title">未知の技術課題を扱える理由</h2></div><div><ul>{reasonsToEntrust.map((reason, index) => <li key={reason.title}><span>{String(index + 1).padStart(2, "0")}</span><div><h3>{reason.title}</h3><p>{reason.text}</p>{reason.examples && <p className="reason-examples">{reason.examples}</p>}</div></li>)}</ul><div className="representative-summary"><p>{representativeSummary}</p><Link href="/about">代表者について <span aria-hidden="true">→</span></Link></div></div></div></section>

    <section className="home-ai-section" aria-labelledby="home-ai-title"><div className="container home-ai-layout"><div><p className="eyebrow">AIに関する相談</p><h2 id="home-ai-title">AIも、導入ありきではなく、技術課題として見立てます。</h2><p>生成AI、RAG、AIエージェントなどについて、自社で使う意味、技術的な実現性、データ・精度・コスト・運用上の成立条件から判断します。AIを使わない選択も含め、調査・検証から導入計画、設計・実装まで支援します。</p></div><ul className="home-ai-links">{aiConsultationThemes.map((theme, index) => <li key={theme.id}><Link href={`/services/ai#${theme.id}`}><span>{String(index + 1).padStart(2, "0")}</span><strong>{theme.title}</strong><b aria-hidden="true">↗</b></Link></li>)}</ul></div></section>

    <section className="home-consultation-summary" aria-labelledby="consultation-summary-title"><div className="container home-consultation-layout"><div><p className="eyebrow">初回30分無料相談</p><h2 id="consultation-summary-title">まずは30分、判断を前へ進めます</h2><p>その場で回答できることは、その場で回答します。追加確認が必要な場合は、未確認事項、判断基準、担当すべき役割、確認する順序を明らかにします。30分で方向が定まれば、それで完了です。継続支援が必要な場合のみ、調査・検証と実行計画をご提案します。</p></div><Link className="button button-primary" href="/contact">30分無料で相談する <span aria-hidden="true">→</span></Link></div></section>
  </main><SiteFooter /></>;
}
