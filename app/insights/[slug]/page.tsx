import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteFooter } from "../../components/SiteFooter";
import { SiteHeader } from "../../components/SiteHeader";
import { findInsightArticle, insightArticles } from "../../../content/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return insightArticles.map((article) => ({ slug: article.slug }));
}

export default async function InsightArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = findInsightArticle(slug);

  if (!article) notFound();

  const browseHref = article.kind === "issue" ? "/insights/issues" : "/insights/technologies";
  const browseLabel = article.kind === "issue" ? "課題から探す" : "技術から探す";
  const sceneHref = `/services/${article.relatedScene.id}`;
  const contactHref = `/contact?issue=${encodeURIComponent(article.title)}`;

  return <><SiteHeader /><main className="insight-article-page">
    <section className="insight-article-hero" aria-labelledby="insight-article-title"><div className="container">
      <Link className="insight-back-link" href={browseHref}>← {browseLabel}</Link>
      <p className="eyebrow">{article.series}</p><h1 id="insight-article-title">{article.title}</h1><p>{article.summary}</p>
      <ul aria-label="技術テーマ">{article.tags.map((tag) => <li key={tag}>{tag}</li>)}</ul>
    </div></section>

    <article className="insight-article-content"><div className="container"><div className="insight-article-reading">
      {article.sections.map((section, index) => <section key={section.title} aria-labelledby={`article-section-${index}`}>
        <p>{String(index + 1).padStart(2, "0")}</p><h2 id={`article-section-${index}`}>{section.title}</h2><div><p>{section.text}</p>{section.points && <ul>{section.points.map((point) => <li key={point}>{point}</li>)}</ul>}</div>
      </section>)}
    </div></div></article>

    <section className="insight-related-consultation" aria-labelledby="related-consultation-title"><div className="container"><div><p className="eyebrow">関連する相談</p><h2 id="related-consultation-title">このテーマを、自社の状況で判断する</h2><p>記事の論点をもとに、何を確認し、どこまで検証すべきかを整理します。</p></div><div className="insight-consultation-actions"><Link className="button button-quiet" href={sceneHref}>関連する相談シーンを見る <span aria-hidden="true">→</span></Link><Link className="button button-primary" href={contactHref}>30分無料で相談する <span aria-hidden="true">→</span></Link></div></div></section>
  </main><SiteFooter /></>;
}
