import Link from "next/link";
import { aiConsultationThemes } from "../../../content/ai";
import { PageHero } from "../../components/PageHero";
import { SiteFooter } from "../../components/SiteFooter";
import { SiteHeader } from "../../components/SiteHeader";

export default function AiServicesPage() {
  return <><SiteHeader /><main><PageHero eyebrow="注目技術テーマ" title="AIに関する技術判断" lead="AIに関する相談も、製品や導入の話だけでは終わりません。事業要件と現場の制約から、使う意味、成立条件、検証すべきことを整理します。" />
    <section className="ai-overview" aria-labelledby="ai-overview-title"><div className="container"><h2 id="ai-overview-title">AIは、既存の四つの「分からない」を横断する技術テーマです</h2><p>相談先の探索、構想の評価、提案の比較、開発の打開。それぞれの段階でAIが関わるとき、データ・精度・コスト・運用の条件を技術課題として確かめます。</p></div></section>
    <div className="ai-theme-list">{aiConsultationThemes.map((theme, index) => <section id={theme.id} className="ai-theme-section" key={theme.id} aria-labelledby={`${theme.id}-title`}><div className="container"><div className="ai-theme-heading"><span>{String(index + 1).padStart(2, "0")}</span><div><h2 id={`${theme.id}-title`}>{theme.title}</h2><p>{theme.scene}</p></div></div><div className="ai-theme-details"><article><h3>初回30分で整理すること</h3><p>{theme.initial}</p></article><article><h3>得られる判断材料</h3><p>{theme.materials}</p></article><article><h3>有償支援時の例</h3><p>{theme.paid}</p></article></div><Link className="ai-theme-contact" href={`/contact?issue=${encodeURIComponent(theme.title)}`}>この状況について30分相談する <span aria-hidden="true">→</span></Link></div></section>)}</div>
    <section className="compact-cta"><div className="container"><p>AIを使うべきか決めきれていない段階から、ご相談いただけます</p><Link className="button button-primary" href="/contact">30分無料で相談する <span aria-hidden="true">→</span></Link></div></section>
  </main><SiteFooter /></>;
}
