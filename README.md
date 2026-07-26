# 特殊IT技研 Webサイト

どこに頼めばよいか分からない技術課題を、構造から整理し、技術判断・検証・設計・実装まで支援する「特殊IT技研」のコーポレートサイトです。Next.js App Router / TypeScript で構成し、静的サイトとして出力します。

## ローカルでの起動

必要条件: Node.js 22.13 以上、pnpm 11 以上。

```bash
pnpm install
pnpm dev
```

表示された `http://localhost:3000` を開きます。LAN内で確認する場合は、環境のIPアドレスとポートを指定して起動してください。

## 本番用ビルド

```bash
pnpm build
pnpm dlx serve out --listen tcp://0.0.0.0:3000
```

`pnpm build` により、配布用の静的ファイルが `out/` に生成されます。2行目はその内容をローカルまたはLAN内で確認するための簡易サーバーです。

## Vercel へのデプロイ

1. このフォルダを GitHub などの Git リポジトリに登録します。
2. Vercel でリポジトリを Import します。
3. Framework Preset は **Next.js**、Build Command は `pnpm build` を指定します。
4. Output Directory は Vercel の標準設定を使用します。
5. 独自ドメインを設定したら、次節のサイトURLも更新します。

静的サイトなので、問い合わせ先を接続しない限りサーバー側のデータ保存は行いません。

## コンテンツの編集箇所

| 変更したい内容 | 編集ファイル |
| --- | --- |
| サイト名、相談対象、サービス、技術領域、プロダクト | `content/site.ts` |
| トップページの表示順・レイアウト | `app/page.tsx` |
| サービス、知見、プロダクト、プロフィール、問い合わせの各ページ | `app/services/`、`app/insights/`、`app/products/`、`app/about/`、`app/contact/` |
| ヘッダー、フッター、フォームなどの共通部品 | `app/components/` |
| 色、余白、レスポンシブ表示 | `app/globals.css` |
| title、説明文、OGP、構造化データ | `app/layout.tsx` |
| sitemap と robots.txt | `app/sitemap.ts`、`app/robots.ts` |
| OGP画像 | `public/og.png` |
| ヘッダーロゴ・favicon | `public/brand-logo.svg`、`public/favicon.svg` |

## 問い合わせフォーム

フォームの送信先は未接続です。`.env.local` を作成して、外部フォームサービス等の送信URLを設定してください。

```bash
NEXT_PUBLIC_CONTACT_FORM_ACTION=https://example.com/your-form-endpoint
```

未設定時は送信せず、設定が必要であることをフォーム内に表示します。メールアドレスなどの個人情報を扱う前に、プライバシーポリシーを用意してください。

## 公開前に確定する項目

- `TODO.example.com` を実際のサイトURLへ置換（`app/layout.tsx`、`app/sitemap.ts`、`app/robots.ts`）
- 主宰者の実名、写真、詳細経歴
- 連絡用メールアドレス、所在地、電話番号
- 実績・事例、料金、初回相談、契約・秘密保持に関する案内
- フォーム送信先とプライバシーポリシー

## 知見・研究開発コンテンツを追加する

`content/site.ts` の `sampleInsights` に、タイトル、分類、タグ、公開日、公開状態を追加します。記事本文を公開する段階では、`content/insights/` などを作成して Markdown / MDX を置く構成へ拡張できます。現在は、未執筆の記事を「準備中」として明示しています。

研究開発テーマは同ファイルの `researchProjects` で管理しています。主研究、応用研究、知識普及の階層を維持したまま、詳細ページへのリンクを追加できます。

## 今後追加できる機能

- サービス詳細、実績・事例、技術記事、プロフィール、問い合わせ、プライバシーポリシーの個別ページ
- フォームのスパム対策、受付完了メール、CRM連携
- お知らせ・技術記事のMDXまたはCMS管理
- アクセス解析、コンバージョン計測、検索コンソール連携
- 相談前の資料アップロード、予約カレンダー連携
