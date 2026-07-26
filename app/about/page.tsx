import { PageHero } from "../components/PageHero";
import { SiteFooter } from "../components/SiteFooter";
import { SiteHeader } from "../components/SiteHeader";
import { profile } from "../../content/site";

export default function AboutPage() { return <><SiteHeader /><main><PageHero title="技術の構造を読み、実務の判断へつなぐ" lead={profile.summary} />
  <section className="section"><div className="container two-column"><div className="profile-visual" aria-hidden="true"><span>技</span><p>SPECIALIZED<br />IT ENGINEERING<br />LAB</p></div><div><h2 className="page-section-title">特殊IT技研 主宰者</h2><ul className="profile-history">{profile.history.map((item) => <li key={item}>{item}</li>)}</ul></div></div></section>
</main><SiteFooter /></> }
