import Link from "next/link";
import type { InsightArticle } from "../../content/site";

export function InsightArticleCards({ articles }: { articles: InsightArticle[] }) {
  return <div className="insight-article-cards">
    {articles.map((article) => <article key={article.slug}>
      <Link href={`/insights/${article.slug}`}>
        <p className="insight-article-series"><span>{article.kind === "issue" ? "課題から探す" : "技術から探す"}</span>{article.series}</p>
        <h2>{article.title}</h2>
        <p className="insight-article-summary">{article.summary}</p>
        <ul aria-label="技術テーマ">{article.tags.map((tag) => <li key={tag}>{tag}</li>)}</ul>
        <span className="insight-article-link">記事を読む <b aria-hidden="true">↗</b></span>
      </Link>
    </article>)}
  </div>;
}
