import { PageHero } from "../components/PageHero";
import { SiteFooter } from "../components/SiteFooter";
import { SiteHeader } from "../components/SiteHeader";
import { profile } from "../../content/site";

export default function AboutPage() { return <><SiteHeader /><main><PageHero title="技術判断を、計画と実行へつなぐ" lead={profile.summary} />
  <section className="about-roles-section" aria-labelledby="about-roles-title"><div className="container about-roles-layout"><div><p className="eyebrow">案件で担う役割</p><h2 id="about-roles-title">技術を理解したうえで、<br />判断と推進を担います</h2></div><ol>{profile.roles.map((role, index) => <li key={role.title}><span>{String(index + 1).padStart(2, "0")}</span><div><h3>{role.title}</h3><p>{role.text}</p></div></li>)}</ol></div></section>
  <section className="section about-profile-section"><div className="container two-column"><div className="profile-visual" aria-hidden="true"><span>技</span><p>SPECIALIZED<br />IT ENGINEERING<br />LAB</p></div><div><h2 className="page-section-title">特殊IT技研 代表者</h2><ul className="profile-history">{profile.history.map((item) => <li key={item}>{item}</li>)}</ul></div></div></section>
</main><SiteFooter /></> }
