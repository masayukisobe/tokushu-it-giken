import { navigation, site } from "../../content/site";
import Link from "next/link";

export function SiteFooter() {
  return <footer className="site-footer"><div className="container footer-inner">
    <div><Link className="brand" href="/"><span className="brand-mark" aria-hidden="true">特</span><span><strong>{site.name}</strong><small>{site.englishName}</small></span></Link><p className="footer-note">技術課題を、構造から捉え直す。</p></div>
    <div className="footer-links">{navigation.map((item) => <a key={item.href} href={item.href}>{item.label}</a>)}<a href="/about">About</a><a href="/contact">Contact</a></div>
    <p>© {new Date().getFullYear()} {site.name}.</p>
  </div></footer>;
}
