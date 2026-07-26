import { PageHero } from "../components/PageHero";
import { SiteFooter } from "../components/SiteFooter";
import { SiteHeader } from "../components/SiteHeader";
import { researchProjects } from "../../content/site";

export default function ProductsPage() { return <><SiteHeader /><main><PageHero eyebrow="PRODUCTS" title="技術を、使えるプロダクトへ" lead="特殊IT技研が自ら研究・開発・提供するプロダクト群です。顧客プロジェクトとは別に、技術の可能性を検証し、より多くの人が使える形へ育てています。" />
  <section className="section"><div className="container"><div className="research-list research-list-page">{researchProjects.map((project) => <article id={project.id} key={project.title}><p>{project.level}</p><h2>{project.title}</h2><div><p>{project.description}</p><small>{project.status}</small></div></article>)}</div><p className="todo-note">※ 各プロダクトの詳細、公開資料、提供状況は順次追加します。</p></div></section>
</main><SiteFooter /></> }
