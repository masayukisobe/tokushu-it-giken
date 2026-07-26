"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

type ConsultationCategory = {
  id: string;
  title: string;
  outcome: string;
  scenarios: Array<{ id: string; title: string }>;
};

function selectedCategoryFromHash(categoryIds: Set<string>) {
  const categoryMatches = Array.from(window.location.hash.matchAll(/#category-(\d+)/g));
  const categoryId = categoryMatches.at(-1)?.[1];
  return categoryId && categoryIds.has(categoryId) ? categoryId : null;
}

export function ConsultationCategories({ categories }: { categories: ConsultationCategory[] }) {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  useEffect(() => {
    const categoryIds = new Set(categories.map((category) => category.id));
    const updateSelectedCategory = () => {
      const categoryId = selectedCategoryFromHash(categoryIds);
      if (categoryId) {
        const canonicalHash = `#category-${categoryId}`;
        if (window.location.hash !== canonicalHash) {
          const url = new URL(window.location.href);
          url.hash = canonicalHash;
          window.history.replaceState(null, "", `${url.pathname}${url.search}${url.hash}`);
        }
      }
      setSelectedCategory(categoryId);
    };
    updateSelectedCategory();
    window.addEventListener("hashchange", updateSelectedCategory);
    return () => window.removeEventListener("hashchange", updateSelectedCategory);
  }, [categories]);

  return <div className="service-category-grid">{categories.map((category) => <article id={`category-${category.id}`} className={selectedCategory === category.id ? "is-selected" : undefined} key={category.id}><header><span>{category.id}</span><div><h2>{category.title}</h2><p>{category.outcome}</p><p className="service-category-prompt">この中から近い状況を選ぶ</p></div></header><ul>{category.scenarios.map((scenario) => <li key={scenario.id}><Link href={`/services/${scenario.id}`}><span className="service-scenario-title">{scenario.title}</span><span className="service-scenario-arrow" aria-hidden="true">↗</span></Link></li>)}</ul></article>)}</div>;
}
