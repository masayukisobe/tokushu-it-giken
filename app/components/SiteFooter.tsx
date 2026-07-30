import { navigation, site, tenPageUniversityArticleUrl } from "../../content/site";
import Link from "next/link";

export function SiteFooter() {
  return <footer className="site-footer"><div className="container footer-content">
    <div className="footer-identity"><Link className="footer-brand" href="/" aria-label={`${site.name} トップへ`}><span className="footer-brand-mark" aria-hidden="true"><i /><i /><b /></span><span><strong>{site.name}</strong><small>{site.englishName}</small></span></Link><p className="footer-note">技術課題に、見立てと次の一手を。</p><p className="footer-activity">技術を分かりやすく伝える活動 <a href={tenPageUniversityArticleUrl} target="_blank" rel="noreferrer">10ページ大学 ↗</a></p></div>
    <nav className="footer-links" aria-label="フッターメニュー">{navigation.map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}<Link href="/about">代表者について</Link><Link href="/contact">お問い合わせ</Link></nav>
  </div><div className="container footer-bottom"><p>© {new Date().getFullYear()} {site.name}</p></div></footer>;
}
