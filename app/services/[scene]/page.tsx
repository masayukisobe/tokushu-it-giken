import { notFound } from "next/navigation";
import Link from "next/link";
import { SiteFooter } from "../../components/SiteFooter";
import { SiteHeader } from "../../components/SiteHeader";
import {
  consultationSceneDetails,
  consultationSceneServiceStages,
  consultationScenes,
  findConsultationScene,
  projectDeliveryPhases,
} from "../../../content/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return consultationScenes.map((scene) => ({ scene: scene.id }));
}

export default async function ConsultationScenePage({
  params,
}: {
  params: Promise<{ scene: string }>;
}) {
  const { scene: sceneId } = await params;
  const scene = findConsultationScene(sceneId);

  if (!scene) notFound();

  const detail = consultationSceneDetails[scene.id];
  const intro = detail?.intro ?? scene.typicalScene;
  const situations = detail?.situations ?? scene.derivedIssues;
  const initialActions = detail?.initialActions ?? [scene.first];
  const initialOutcomes = detail?.initialOutcomes ?? [scene.initialOutcome];
  const paidSupport = detail?.paidSupport ?? scene.paidSupport;
  const contactHref = `/contact?issue=${encodeURIComponent(scene.title)}`;
  const connectedServiceStages = (consultationSceneServiceStages[scene.id] ?? [])
    .map((stageId) => projectDeliveryPhases.find((stage) => stage.id === stageId))
    .filter((stage): stage is (typeof projectDeliveryPhases)[number] => Boolean(stage));

  return <>
    <SiteHeader />
    <main className="scenario-page">
      <section className="scenario-hero" aria-labelledby="scenario-title">
        <div className="container">
          <p className="eyebrow">01 / 課題シーン</p>
          <p className="scenario-category">{scene.categoryTitle}</p>
          <h1 id="scenario-title">{scene.title}</h1>
          <p className="scenario-lead">{intro}</p>
          <div className="scenario-service-path" aria-label="この相談からつながる支援">
            <span>この相談からつながる支援</span>
            <ol>{connectedServiceStages.map((stage) => <li key={stage.id}><b>{stage.id}</b>{stage.title}</li>)}</ol>
          </div>
          <div className="scenario-hero-actions">
            <Link className="button button-primary" href={contactHref}>
              この状況について30分相談する <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="scenario-section" aria-labelledby="situations-title">
        <div className="container scenario-content-grid">
          <div className="scenario-section-heading">
            <p className="eyebrow">02 / 派生する困りごと</p>
            <h2 id="situations-title">例えば、こんな状況です</h2>
          </div>
          <ul className="scenario-issue-list">
            {situations.map((situation, index) => <li key={situation}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              {situation}
            </li>)}
          </ul>
        </div>
      </section>

      <section className="scenario-section scenario-section-muted" aria-labelledby="first-consultation-title">
        <div className="container scenario-content-grid">
          <div className="scenario-section-heading">
            <p className="eyebrow">03 / 初回30分</p>
            <h2 id="first-consultation-title">初回30分で行うこと</h2>
          </div>
          <div className="scenario-consultation-detail">
            <ul className="scenario-action-list">
              {initialActions.map((action, index) => <li key={action}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                {action}
              </li>)}
            </ul>
            <div className="scenario-outcomes">
              <h3>相談後に得られること</h3>
              <ul>
                {initialOutcomes.map((outcome) => <li key={outcome}>{outcome}</li>)}
              </ul>
            </div>
            {detail?.completionNote && <p className="scenario-completion-note">{detail.completionNote}</p>}
          </div>
        </div>
      </section>

      <section className="scenario-section" aria-labelledby="paid-support-title">
        <div className="container">
          <div className="scenario-section-heading scenario-section-heading-wide">
            <p className="eyebrow">04 / 継続支援が必要な場合</p>
            <h2 id="paid-support-title">診断・意思決定から、実行設計と技術検証へ</h2>
            <p className="scenario-support-intro">必要な場合は、対象範囲、技術方針、検証計画、役割分担、受入・完了条件を定め、調査、予備検証、設計、プロトタイプ、技術レビューまで進めます</p>
          </div>
          <div className="scenario-support-list">
            {paidSupport.map((support, index) => <article key={support.goal}>
              <div className="scenario-support-goal">
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{support.goal}</h3>
              </div>
              <div className="scenario-support-content">
                <p>支援内容</p>
                <span>{support.support}</span>
              </div>
              <div className="scenario-support-deliverables">
                <p>成果物</p>
                <ul>{support.deliverables.map((deliverable) => <li key={deliverable}>{deliverable}</li>)}</ul>
              </div>
            </article>)}
          </div>
        </div>
      </section>

      <section className="scenario-contact-cta" aria-labelledby="scenario-contact-title">
        <div className="container">
          <div>
            <p className="eyebrow">30分無料相談</p>
            <h2 id="scenario-contact-title">この状況について30分相談する</h2>
            <p>相談内容には「{scene.title}」を引き継ぎます</p>
          </div>
          <Link className="button button-primary" href={contactHref}>
            この状況について30分相談する <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>
    </main>
    <SiteFooter />
  </>;
}
