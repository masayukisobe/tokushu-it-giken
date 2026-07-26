import { SectionHeading } from "./components/SectionHeading";
import { SiteFooter } from "./components/SiteFooter";
import { SiteHeader } from "./components/SiteHeader";
import Link from "next/link";
import { consultationCategories, insightCategories, researchProjects } from "../content/site";

export default function Home() {
  return <><SiteHeader /><main>
    <section className="hero hero-decision" aria-labelledby="hero-title"><div className="hero-inner hero-layout">
      <div className="hero-message"><p className="eyebrow hero-eyebrow">TECHNICAL CONSULTATION</p><h1 id="hero-title">どこに頼めばいいか分からない。<br /><em>そんな技術課題に、<br />見立てと、次の一手を。</em></h1><p className="hero-copy">前例も、頼れる専門家も見つからない技術課題を、事業要件と現場の制約をふまえて解きほぐします。一次情報の調査と検証で判断材料を整え、必要に応じて設計・実装まで支援します。</p><div className="hero-actions"><Link className="button button-primary" href="/contact">30分無料で相談する <span aria-hidden="true">→</span></Link></div><div className="home-category-links" aria-label="相談例"><p>相談例</p>{consultationCategories.map((category) => <Link key={category.id} href={`/services#category-${category.id}`}><span>{category.id}</span><strong>{category.title}</strong><small>相談例を見る →</small></Link>)}</div></div>
    </div></section>

    <section className="home-consultation-summary" aria-labelledby="consultation-summary-title"><div className="container"><p className="eyebrow">FREE 30-MINUTE CONSULTATION</p><h2 id="consultation-summary-title">まずは30分、その場で整理します</h2><p>初回30分は無料です。資料の準備や技術名の整理は必要ありません。その場で解決できることは回答し、追加の調査・検証・設計・実装が必要な場合だけ、その先をご提案します。</p></div></section>

    <section className="section" aria-labelledby="insights-title"><div className="container"><div className="section-heading-row"><SectionHeading eyebrow="INSIGHTS" title="この会社が、どう考えるか" text="特殊IT技研が、技術課題をどう読み、どう判断しているかを公開しています。" /><Link className="text-link" href="/insights">Insightsを見る →</Link></div><div className="insight-category-grid insight-category-grid-four">{insightCategories.slice(0, 4).map((category) => <article id={category.id} key={category.title}><h3>{category.title}</h3><p>{category.description}</p><ul>{category.examples.map((item) => <li key={item}>{item}</li>)}</ul></article>)}</div></div></section>

    <section className="section" aria-labelledby="products-title"><div className="container"><div className="section-heading-row"><SectionHeading eyebrow="PRODUCTS / R&D" title="自社プロダクト・研究開発" text="以下は受託案件ではなく、特殊IT技研が自ら開発・提供するプロダクト群です。" /><Link className="text-link" href="/products">Productsを見る →</Link></div><div className="research-list">{researchProjects.map((project) => <article id={project.id} key={project.title}><p>{project.level}</p><h3>{project.title}</h3><div><p>{project.description}</p><small>{project.status}</small></div></article>)}</div></div></section>

    <section className="section final-cta-section" aria-labelledby="final-cta-title"><div className="container final-cta"><div><p className="eyebrow">CONTACT</p><h2 id="final-cta-title">相談先が分からない段階で構いません</h2><p>課題が整理されていなくても、技術名称が分からなくても相談可能です。まず30分で、何を考えるべきかを整理します。</p></div><Link className="button button-primary" href="/contact">30分無料で相談する <span aria-hidden="true">→</span></Link></div></section>
  </main><SiteFooter /></>;
}
