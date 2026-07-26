import Link from "next/link";
import { InsightArticleCards } from "../../components/InsightArticleCards";
import { PageHero } from "../../components/PageHero";
import { SiteFooter } from "../../components/SiteFooter";
import { SiteHeader } from "../../components/SiteHeader";
import { insightArticles } from "../../../content/site";

const technologyArticles = insightArticles.filter((article) => article.kind === "technology");

export default function InsightTechnologiesPage() {
  return <><SiteHeader /><main>
    <PageHero eyebrow="使える技術解説" title="技術から探す" lead="技術の仕組みだけでなく、できること、向かないこと、採用前に満たすべき条件から検討できます。" />
    <section className="insight-articles-section" aria-labelledby="technology-articles-title"><div className="container"><div className="insight-section-heading"><div><p className="eyebrow">使える技術解説</p><h2 id="technology-articles-title" className="insight-section-title">使える条件から、採用を考える</h2></div><Link className="text-link" href="/insights/issues">課題から探す →</Link></div><InsightArticleCards articles={technologyArticles} /></div></section>
    <section className="insight-consultation-section" aria-labelledby="technology-consultation-title"><div className="container"><div><p className="eyebrow">30分無料相談</p><h2 id="technology-consultation-title">技術を使う意味から、一緒に整理します</h2><p>製品選びや導入ありきではなく、事業要件と現場の制約をふまえて採用条件を考えます。</p></div><div className="insight-consultation-actions"><Link className="button button-quiet" href="/services">関連する相談シーンを見る <span aria-hidden="true">→</span></Link><Link className="button button-primary" href="/contact">30分無料で相談する <span aria-hidden="true">→</span></Link></div></div></section>
  </main><SiteFooter /></>;
}
