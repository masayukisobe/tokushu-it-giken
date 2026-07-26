"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

type ConsultationCategory = {
  id: string;
  title: string;
  outcome: string;
  scenarios: Array<{ id: string; title: string }>;
};

function selectedCategoryFromHash() {
  const match = window.location.hash.match(/^#category-(\d+)$/);
  return match?.[1] ?? null;
}

export function ConsultationCategories({ categories }: { categories: ConsultationCategory[] }) {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  useEffect(() => {
    const updateSelectedCategory = () => setSelectedCategory(selectedCategoryFromHash());
    updateSelectedCategory();
    window.addEventListener("hashchange", updateSelectedCategory);
    return () => window.removeEventListener("hashchange", updateSelectedCategory);
  }, []);

  return <div className="service-category-grid">{categories.map((category) => <article id={`category-${category.id}`} className={selectedCategory === category.id ? "is-selected" : undefined} key={category.id}><header><span>{category.id}</span><div><h2>{category.title}</h2><p>{category.outcome}</p><p className="service-category-prompt">この中から近い状況を選ぶ</p></div></header><ul>{category.scenarios.map((scenario) => <li key={scenario.id}><Link href={`/services/${scenario.id}`}><span className="service-scenario-title">{scenario.title}</span><span className="service-scenario-arrow" aria-hidden="true">↗</span></Link></li>)}</ul></article>)}</div>;
}
