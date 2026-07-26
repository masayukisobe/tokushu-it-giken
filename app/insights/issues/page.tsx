import Link from "next/link";
import { InsightArticleCards } from "../../components/InsightArticleCards";
import { PageHero } from "../../components/PageHero";
import { SiteFooter } from "../../components/SiteFooter";
import { SiteHeader } from "../../components/SiteHeader";
import { insightArticles } from "../../../content/site";

const issueArticles = insightArticles.filter((article) => article.kind === "issue");

export default function InsightIssuesPage() {
  return <><SiteHeader /><main>
    <PageHero eyebrow="特殊IT課題百科" title="課題から探す" lead="何が起きているのか、どこから切り分ければよいか分からないときに、問題の構造と最初の確認事項から探せます。" />
    <section className="insight-articles-section" aria-labelledby="issue-articles-title"><div className="container"><div className="insight-section-heading"><div><p className="eyebrow">特殊IT課題百科</p><h2 id="issue-articles-title" className="insight-section-title">困りごとを、次の判断へつなぐ</h2></div><Link className="text-link" href="/insights/technologies">技術から探す →</Link></div><InsightArticleCards articles={issueArticles} /></div></section>
    <section className="insight-consultation-section" aria-labelledby="issue-consultation-title"><div className="container"><div><p className="eyebrow">30分無料相談</p><h2 id="issue-consultation-title">近い記事が見つからない段階でも、ご相談いただけます</h2><p>まだ課題として言語化できていなくても構いません。状況を伺い、最初に確認すべきことを整理します。</p></div><div className="insight-consultation-actions"><Link className="button button-quiet" href="/services">関連する相談シーンを見る <span aria-hidden="true">→</span></Link><Link className="button button-primary" href="/contact">30分無料で相談する <span aria-hidden="true">→</span></Link></div></div></section>
  </main><SiteFooter /></>;
}
