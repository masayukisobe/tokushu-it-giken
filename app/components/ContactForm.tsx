const contactAction = process.env.NEXT_PUBLIC_CONTACT_FORM_ACTION ?? "";

export function ContactForm() {
  if (!contactAction) {
    return <section className="contact-form contact-form-unavailable" aria-labelledby="contact-unavailable-title"><p className="eyebrow">CONSULTATION FORM</p><h3 id="contact-unavailable-title">相談フォームは公開準備中です</h3><p>送信先の設定が完了するまで、フォームには入力しないでください。公開時には、相談内容を送信できる窓口と個人情報の取り扱いをここに表示します。</p></section>;
  }
  return <form className="contact-form" action={contactAction} method="post">
    <p className="form-intro">案件化を前提としません。分かっている範囲だけで構いません。</p>
    <div className="form-row"><label>名前<span aria-hidden="true"> *</span><input name="name" autoComplete="name" required /></label><label>会社名<span aria-hidden="true"> *</span><input name="company" autoComplete="organization" required /></label></div>
    <label>メールアドレス<span aria-hidden="true"> *</span><input name="email" type="email" autoComplete="email" required /></label>
    <label>困っていること<span aria-hidden="true"> *</span><textarea name="currentIssue" rows={5} required placeholder="課題が整理されていなくても、技術名称が分からなくても構いません。" /></label>
    <p className="form-help">* 必須項目。送信後、内容を確認して30分相談の進め方をご案内します。</p><button className="button button-primary form-submit" type="submit">30分無料で相談する <span aria-hidden="true">→</span></button>
  </form>;
}
