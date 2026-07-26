import { notFound } from "next/navigation";
import Link from "next/link";
import { SiteFooter } from "../../components/SiteFooter";
import { SiteHeader } from "../../components/SiteHeader";
import { consultationScenes, findConsultationScene } from "../../../content/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return consultationScenes.map((scene) => ({ scene: scene.id }));
}

export default async function ConsultationScenePage({ params }: { params: Promise<{ scene: string }> }) {
  const { scene: sceneId } = await params;
  const scene = findConsultationScene(sceneId);

  if (!scene) notFound();

  const contactHref = `/contact?issue=${encodeURIComponent(scene.title)}`;

  return <><SiteHeader /><main>
    <section className="scenario-hero" aria-labelledby="scenario-title"><div className="container"><p className="eyebrow">SERVICES / {scene.categoryId}</p><p className="scenario-category">{scene.categoryTitle}</p><h1 id="scenario-title">{scene.title}</h1><p>{scene.typicalScene}</p></div></section>

    <section className="scenario-section" aria-labelledby="derived-issues-title"><div className="container scenario-two-column"><div><p className="eyebrow">01 / TYPICAL SCENE</p><h2 id="derived-issues-title">この状況で起きやすいこと</h2></div><ul className="scenario-issue-list">{scene.derivedIssues.map((issue, index) => <li key={issue}><span>{String(index + 1).padStart(2, "0")}</span>{issue}</li>)}</ul></div></section>

    <section className="scenario-section section-muted" aria-labelledby="first-consultation-title"><div className="container scenario-two-column"><div><p className="eyebrow">02 / FIRST 30 MINUTES</p><h2 id="first-consultation-title">初回30分で整理すること</h2></div><div className="scenario-first-result"><p>{scene.first}</p><div><span>得られること</span><strong>{scene.initialOutcome}</strong></div></div></div></section>

    <section className="scenario-section" aria-labelledby="paid-support-title"><div className="container"><div className="scenario-section-heading"><p className="eyebrow">03 / WHEN MORE SUPPORT IS NEEDED</p><h2 id="paid-support-title">有償支援へ進む場合</h2><p>必要な場合だけ、目的に合わせて調査・検証・設計・実装を組み合わせます。</p></div><div className="scenario-support-grid">{scene.paidSupport.map((support, index) => <article key={support.goal}><span>{String(index + 1).padStart(2, "0")}</span><h3>{support.goal}</h3><p>{support.support}</p><div><strong>成果物の例</strong><ul>{support.deliverables.map((deliverable) => <li key={deliverable}>{deliverable}</li>)}</ul></div></article>)}</div></div></section>

    <section className="scenario-contact-cta" aria-labelledby="scenario-contact-title"><div className="container"><div><p className="eyebrow">FREE 30-MINUTE CONSULTATION</p><h2 id="scenario-contact-title">この状況について30分相談する</h2><p>相談内容には「{scene.title}」を引き継ぎます。分かる範囲だけで構いません。</p></div><Link className="button button-primary" href={contactHref}>この状況について30分相談する <span aria-hidden="true">→</span></Link></div></section>
  </main><SiteFooter /></>;
}
