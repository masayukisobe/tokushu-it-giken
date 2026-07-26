"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { navigation, site } from "../../content/site";

const publicAssetPath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openGroup, setOpenGroup] = useState<string | null>(null);
  function closeNavigation() { setMenuOpen(false); setOpenGroup(null); }

  useEffect(() => {
    function closeDropdownOnEscape(event: KeyboardEvent) {
      if (event.key === "Escape") setOpenGroup(null);
    }
    if (!openGroup) return;
    document.addEventListener("keydown", closeDropdownOnEscape);
    return () => document.removeEventListener("keydown", closeDropdownOnEscape);
  }, [openGroup]);

  return <header className="site-header">
    <Link className="brand brand-logo-link" href="/" aria-label={`${site.name} トップへ`}><Image className="brand-logo" src={`${publicAssetPath}/brand-logo.svg`} width={220} height={74} alt="" priority /></Link>
    <button className="menu-button" type="button" aria-expanded={menuOpen} aria-controls="site-navigation" onClick={() => { setMenuOpen(!menuOpen); setOpenGroup(null); }}>{menuOpen ? "閉じる" : "メニュー"}</button>
    {openGroup && <button className="nav-dismiss" type="button" aria-label="メニューを閉じる" tabIndex={-1} onClick={() => setOpenGroup(null)} />}
    <nav id="site-navigation" className={menuOpen ? "site-nav is-open" : "site-nav"} aria-label="主要メニュー">
      {navigation.map((item) => { const isOpen = openGroup === item.label; const panelId = `navigation-${item.label.toLowerCase()}`; return <div className={isOpen ? "nav-group is-open" : "nav-group"} key={item.href}>
        <button className="nav-trigger" type="button" aria-expanded={isOpen} aria-controls={panelId} onClick={() => setOpenGroup(isOpen ? null : item.label)}>{item.label}<span className="nav-caret" aria-hidden="true" /></button>
        <div className="nav-panel" id={panelId}>{item.items.map((subItem) => <Link key={subItem.href} href={subItem.href} onClick={closeNavigation}><strong>{subItem.label}</strong><small>{subItem.description}</small></Link>)}</div>
      </div>; })}
      <Link className="nav-contact" href="/contact" onClick={closeNavigation}>お問い合わせ</Link>
    </nav>
  </header>;
}
