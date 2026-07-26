import Link from "next/link";
import { SiteFooter } from "./components/SiteFooter";
import { SiteHeader } from "./components/SiteHeader";
import {
  consultationCategories,
  reasonsToEntrust,
  representativeSummary,
} from "../content/site";
import { aiConsultationThemes } from "../content/ai";

export default function Home() {
  return <><SiteHeader /><main>
    <section className="hero hero-decision" aria-labelledby="hero-title"><div className="hero-grid" aria-hidden="true" /><div className="hero-inner hero-layout">
      <div className="hero-message"><h1 id="hero-title">どこに頼めばいいか分からない。<br /><em>そんな技術課題に、<br />見立てと、次の一手を。</em></h1><p className="hero-copy">前例も、頼れる専門家も見つからない技術課題を、事業要件と現場の制約をふまえて解きほぐします。一次情報の調査と検証で判断材料を整え、必要に応じて設計・実装まで支援します。</p><div className="hero-actions"><Link className="button button-primary" href="/contact">30分無料で相談する <span aria-hidden="true">→</span></Link></div></div>
    </div></section>

    <section className="home-categories-section" aria-labelledby="home-categories-title"><div className="container">
      <div className="home-categories-heading"><h2 id="home-categories-title">相談例</h2><p>現在の状況に近いものをお選びください。</p></div>
      <div className="home-category-links" aria-label="相談例">{consultationCategories.map((category) => <Link key={category.id} href={`/services#category-${category.id}`}><span>{category.id}</span><strong>{category.title}</strong><small>詳しい相談例を見る <b aria-hidden="true">↗</b></small></Link>)}</div>
    </div></section>

    <section className="home-reasons" aria-labelledby="home-reasons-title"><div className="container home-reasons-layout"><div><p className="eyebrow">任せられる根拠</p><h2 id="home-reasons-title">技術の判断と実行を、同じ視点で進めます</h2></div><div><ul>{reasonsToEntrust.map((reason, index) => <li key={reason}><span>{String(index + 1).padStart(2, "0")}</span><p>{reason}</p></li>)}</ul><p className="representative-summary">{representativeSummary}</p></div></div></section>

    <section className="home-ai-section" aria-labelledby="home-ai-title"><div className="container home-ai-layout"><div><p className="eyebrow">AIに関する相談</p><h2 id="home-ai-title">AIも、導入ありきではなく、技術課題として見立てます。</h2><p>生成AI、RAG、AIエージェントなどについて、自社で使う意味、技術的な実現性、データ・精度・コスト・運用上の成立条件から判断します。AIを使わない選択も含め、調査・検証から設計・実装まで支援します。</p></div><ul className="home-ai-links">{aiConsultationThemes.map((theme, index) => <li key={theme.id}><Link href={`/services/ai#${theme.id}`}><span>{String(index + 1).padStart(2, "0")}</span><strong>{theme.title}</strong><b aria-hidden="true">↗</b></Link></li>)}</ul></div></section>

    <section className="home-consultation-summary" aria-labelledby="consultation-summary-title"><div className="container home-consultation-layout"><div><p className="eyebrow">初回30分無料相談</p><h2 id="consultation-summary-title">まずは30分、その場で整理します</h2><p>初回30分は無料です。その場で解決できることは回答し、30分で十分なら、それで完了です。追加の調査・検証・設計・実装が必要な場合だけ、その先をご提案します。</p></div><Link className="button button-primary" href="/contact">30分無料で相談する <span aria-hidden="true">→</span></Link></div></section>
  </main><SiteFooter /></>;
}
