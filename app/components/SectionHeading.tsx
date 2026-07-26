export function SectionHeading({ eyebrow, title, text }: { eyebrow?: string; title: string; text?: string }) {
  return <div className="section-heading">{eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}<h2>{title}</h2>{text ? <p className="section-intro">{text}</p> : null}</div>;
}
