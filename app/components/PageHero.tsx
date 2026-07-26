export function PageHero({ eyebrow, title, lead }: { eyebrow: string; title: string; lead: string }) {
  return <section className="page-hero"><div className="container"><p className="eyebrow">{eyebrow}</p><h1>{title}</h1><p>{lead}</p></div></section>;
}
