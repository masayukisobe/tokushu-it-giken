import { PageHero } from "../components/PageHero";
import { SiteFooter } from "../components/SiteFooter";
import { SiteHeader } from "../components/SiteHeader";
import { insightCategories, sampleInsights } from "../../content/site";

export default function InsightsPage() { return <><SiteHeader /><main><PageHero eyebrow="INSIGHTS" title="技術課題を、解ける形へ整理する知見" lead="特殊IT技研では、個別の技術だけでなく、技術課題がなぜ解けなくなるのか、どのように整理すれば判断できるのかを研究・発信しています。" />
  <section className="section"><div className="container"><div className="insight-category-grid">{insightCategories.map((category) => <article id={category.id} key={category.title}><h2>{category.title}</h2><p>{category.description}</p><ul>{category.examples.map((item) => <li key={item}>{item}</li>)}</ul></article>)}</div></div></section>
  <section className="section section-muted"><div className="container"><p className="eyebrow">PREPARING ARTICLES</p><h2 className="page-section-title">準備中の記事</h2><div className="sample-insights">{sampleInsights.map((item) => <article key={item.title}><p>{item.category} <span>{item.status}</span></p><h3>{item.title}</h3><ul>{item.tags.map((tag) => <li key={tag}>{tag}</li>)}</ul><small>公開日：{item.date}</small></article>)}</div><p className="todo-note">※ 記事本文は準備中です。公開時は Markdown / MDX などで追加できるデータ構造を想定しています。</p></div></section>
</main><SiteFooter /></> }
