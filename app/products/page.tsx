import { SiteFooter } from "../components/SiteFooter";
import { SiteHeader } from "../components/SiteHeader";
import { researchProjects } from "../../content/site";

export default function ProductsPage() {
  return <>
    <SiteHeader />
    <main>
      <section className="products-list-section" aria-labelledby="products-title">
        <div className="container">
          <p className="eyebrow">特殊IT技研の独自制作物</p>
          <h1 id="products-title">プロダクト一覧</h1>
          <div className="research-list research-list-page">
            {researchProjects.map((project) => <article id={project.id} key={project.title}>
              <p>{project.level}</p>
              <h2>{project.title}</h2>
              <div>
                <p>{project.description}</p>
                <small>{project.status}</small>
                {project.articleUrl && <a className="product-article-link" href={project.articleUrl} target="_blank" rel="noreferrer">紹介記事を読む <span aria-hidden="true">↗</span></a>}
              </div>
            </article>)}
          </div>
        </div>
      </section>
    </main>
    <SiteFooter />
  </>;
}
