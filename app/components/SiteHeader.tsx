"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { navigation, site } from "../../content/site";

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openGroup, setOpenGroup] = useState<string | null>(null);
  function closeNavigation() { setMenuOpen(false); setOpenGroup(null); }
  return <header className="site-header">
    <Link className="brand brand-logo-link" href="/" aria-label={`${site.name} トップへ`}><Image className="brand-logo" src="/brand-logo.svg" width={220} height={74} alt="" priority /></Link>
    <button className="menu-button" type="button" aria-expanded={menuOpen} aria-controls="site-navigation" onClick={() => { setMenuOpen(!menuOpen); setOpenGroup(null); }}>{menuOpen ? "Close" : "Menu"}</button>
    <nav id="site-navigation" className={menuOpen ? "site-nav is-open" : "site-nav"} aria-label="主要メニュー">
      {navigation.map((item) => { const isOpen = openGroup === item.label; const panelId = `navigation-${item.label.toLowerCase()}`; return <div className={isOpen ? "nav-group is-open" : "nav-group"} key={item.href}>
        <button className="nav-trigger" type="button" aria-expanded={isOpen} aria-controls={panelId} onClick={() => setOpenGroup(isOpen ? null : item.label)}>{item.label}<span className="nav-caret" aria-hidden="true" /></button>
        <div className="nav-panel" id={panelId}>{item.items.map((subItem) => <a key={subItem.href} href={subItem.href} onClick={closeNavigation}><strong>{subItem.label}</strong><small>{subItem.description}</small></a>)}</div>
      </div>; })}
      <a className="nav-contact" href="/contact" onClick={closeNavigation}>Contact</a>
    </nav>
  </header>;
}
