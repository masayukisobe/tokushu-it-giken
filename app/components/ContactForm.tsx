"use client";

import { useSearchParams } from "next/navigation";

const contactAction = process.env.NEXT_PUBLIC_CONTACT_FORM_ACTION ?? "";

export function ContactForm() {
  const searchParams = useSearchParams();
  const selectedIssue = searchParams.get("issue")?.trim() ?? "";

  if (!contactAction) {
    return <section className="contact-form contact-form-unavailable" aria-labelledby="contact-unavailable-title"><p className="eyebrow">相談フォーム</p><h3 id="contact-unavailable-title">相談フォームは公開準備中です</h3>{selectedIssue && <p className="contact-selected-issue">選択された相談シーン<br /><strong>{selectedIssue}</strong></p>}<p>入力窓口を準備しています。相談内容は、次のうち分かることだけで十分です。</p><ul className="contact-preparation-list"><li><strong>実現・判断したいこと</strong><span>目的が曖昧でも構いません</span></li><li><strong>今、困っている状況</strong><span>技術名が分からなくても構いません</span></li><li><strong>すでに確認したこと</strong><span>資料がなければ空欄で構いません</span></li><li><strong>判断したい時期</strong><span>決まっていなければ不要です</span></li></ul></section>;
  }
  return <form className="contact-form" action={contactAction} method="post">
    <p className="form-intro">案件化を前提としません。分かっている範囲だけで構いません。</p>
    {selectedIssue && <><p className="contact-selected-issue">選択された相談シーン<br /><strong>{selectedIssue}</strong></p><input name="consultationScene" type="hidden" value={selectedIssue} /></>}
    <div className="form-row"><label>名前<span aria-hidden="true"> *</span><input name="name" autoComplete="name" required /></label><label>会社名<span aria-hidden="true"> *</span><input name="company" autoComplete="organization" required /></label></div>
    <label>メールアドレス<span aria-hidden="true"> *</span><input name="email" type="email" autoComplete="email" required /></label>
    <label>困っていること<span aria-hidden="true"> *</span><textarea name="currentIssue" rows={5} required defaultValue={selectedIssue ? `相談したい状況：${selectedIssue}\n\n` : undefined} placeholder="現在起きていること、実現したいこと、判断したい時期や関係者など、分かる範囲で構いません。" /></label>
    <p className="form-help">* 必須項目。送信後、内容を確認して30分相談の進め方をご案内します。</p><button className="button button-primary form-submit" type="submit">30分無料で相談する <span aria-hidden="true">→</span></button>
  </form>;
}
