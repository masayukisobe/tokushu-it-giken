import { SiteFooter } from "./components/SiteFooter";
import { SiteHeader } from "./components/SiteHeader";
import Link from "next/link";
import { consultationCategories } from "../content/site";

export default function Home() {
  return <><SiteHeader /><main>
    <section className="hero hero-decision" aria-labelledby="hero-title"><div className="hero-grid" aria-hidden="true" /><div className="hero-inner hero-layout">
      <div className="hero-message"><h1 id="hero-title">どこに頼めばいいか分からない。<br /><em>そんな技術課題に、<br />見立てと、次の一手を。</em></h1><p className="hero-copy">前例も、頼れる専門家も見つからない技術課題を、事業要件と現場の制約をふまえて解きほぐします。一次情報の調査と検証で判断材料を整え、必要に応じて設計・実装まで支援します。</p><div className="hero-actions"><Link className="button button-primary" href="/contact">30分無料で相談する <span aria-hidden="true">→</span></Link></div><div className="home-category-links" aria-label="相談例"><p>相談例</p>{consultationCategories.map((category) => <Link key={category.id} href={`/services#category-${category.id}`}><span>{category.id}</span><strong>{category.title}</strong><small>相談例を見る →</small></Link>)}</div></div>
    </div></section>

    <section className="home-consultation-summary" aria-labelledby="consultation-summary-title"><div className="container"><p className="eyebrow">初回30分無料相談</p><h2 id="consultation-summary-title">まずは30分、その場で整理します</h2><p>初回30分は無料です。資料の準備や技術名の整理は必要ありません。その場で解決できることは回答し、追加の調査・検証・設計・実装が必要な場合だけ、その先をご提案します。</p></div></section>
  </main><SiteFooter /></>;
}
