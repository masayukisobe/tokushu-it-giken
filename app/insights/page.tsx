import Link from "next/link";
import { InsightArticleCards } from "../components/InsightArticleCards";
import { PageHero } from "../components/PageHero";
import { SiteFooter } from "../components/SiteFooter";
import { SiteHeader } from "../components/SiteHeader";
import { insightArticles, insightThemeTags } from "../../content/site";

export default function InsightsPage() {
  return <><SiteHeader /><main>
    <PageHero title="技術を知るためではなく、判断するためのインサイト。" lead="技術名や流行からではなく、いま抱えている課題と、自社で使える条件から判断できるようにするための記事です。" />

    <section className="insight-entry-section" aria-labelledby="insight-entry-title"><div className="container">
      <p className="eyebrow">二つの入口</p><h2 id="insight-entry-title" className="insight-section-title">いまの入口から、必要な論点へ</h2>
      <div className="insight-entry-grid">
        <Link href="/insights/issues"><article><p>課題から探す</p><h3>特殊IT課題百科</h3><span>困りごとの原因、切り分け方、最初に確認すべきことを示します</span><b aria-hidden="true">↗</b></article></Link>
        <Link href="/insights/technologies"><article><p>技術から探す</p><h3>使える技術解説</h3><span>技術の仕組み、使いどころ、限界、採用判断の観点を示します</span><b aria-hidden="true">↗</b></article></Link>
      </div>
    </div></section>

    <section id="all-articles" className="insight-articles-section" aria-labelledby="featured-insights-title"><div className="container">
      <div className="insight-section-heading"><div><p className="eyebrow">注目記事</p><h2 id="featured-insights-title" className="insight-section-title">判断を進めるための記事</h2></div><Link className="text-link" href="/insights">すべての記事を見る →</Link></div>
      <InsightArticleCards articles={insightArticles} />
    </div></section>

    <section className="insight-themes-section" aria-labelledby="insight-themes-title"><div className="container"><p className="eyebrow">技術テーマ</p><h2 id="insight-themes-title" className="insight-section-title">関心のある技術テーマ</h2><ul>{insightThemeTags.map((tag) => <li key={tag}>{tag}</li>)}</ul></div></section>

    <section className="insight-consultation-section" aria-labelledby="insight-consultation-title"><div className="container"><div><p className="eyebrow">30分無料相談</p><h2 id="insight-consultation-title">記事だけでは、自社の判断に置き換えにくいときは</h2><p>状況や制約が異なれば、確認すべきことも変わります。まず30分で、どの相談シーンに近いかと次に考えることを整理します。</p></div><div className="insight-consultation-actions"><Link className="button button-quiet" href="/services">関連する相談シーンを見る <span aria-hidden="true">→</span></Link><Link className="button button-primary" href="/contact">30分無料で相談する <span aria-hidden="true">→</span></Link></div></div></section>
  </main><SiteFooter /></>;
}
