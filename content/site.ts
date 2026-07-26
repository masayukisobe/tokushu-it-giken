export const site = {
  name: "特殊IT技研",
  englishName: "Specialized IT Engineering Lab",
  description:
    "前例や専門家が見つからない複雑な技術課題を、全体構造から捉え直し、技術判断から検証・設計・実装まで支援します。",
  email: undefined,
  location: undefined,
};

export const heroPositioning = "経営判断だけを扱うのではなく、技術的根拠と実装可能性を確認するエンジニアリングサービスです。";
export const problemQualification = "ひとつでも当てはまる場合、まずは状況の整理からご相談いただけます。";
export const problemNext = "資料や論点が十分に揃っていなくても構いません。何が止まり、誰の判断が必要かを一緒に確認します。";
export const firstContactSteps = ["送信内容を確認する", "30分の相談で論点を整理する", "自分で進めるか、継続支援が必要かを判断する"];

export const consultationCategories = [
  {
    id: "01",
    title: "相談先が見つからない",
    outcome: "必要な専門性と進め方が分かる",
    scenarios: [
      { id: "advisor", title: "どの専門家・会社に頼むべきか分からない", typicalScene: "新しい取り組みを始めたいものの、技術名や必要な役割が定まらず、最初の相談先を選べない", derivedIssues: ["社内外の誰に、何を聞けばよいか決められない", "調査会社、開発会社、専門家のどこから当たるべきか分からない"], first: "いま起きていること、決めたいこと、関係者と制約を一緒に切り分けます", initialOutcome: "必要な専門性と、最初に確認する順番が分かります", paidSupport: [{ goal: "相談先を定める", support: "技術・業務・運用の論点を整理し、必要な専門領域と確認事項を明確にします", deliverables: ["論点一覧", "相談先・確認順の整理"] }, { goal: "判断を進める", support: "一次情報や既存資料を確認し、次の調査・検証の進め方を組み立てます", deliverables: ["技術調査メモ", "次のアクション案"] }] },
      { id: "cross-domain", title: "複数の技術領域にまたがり、相談先を決められない", typicalScene: "AI、クラウド、認証、既存システムなどが関わり、どの領域を起点に相談すべきか決められない", derivedIssues: ["各領域の担当者はいるが、境界の論点が置き去りになっている", "一つの会社に頼むべきか、複数の専門家を組み合わせるべきか迷っている"], first: "関係する技術、業務、運用の境界を描き、判断が必要な接点を整理します", initialOutcome: "誰に何を確認すれば前に進むかが分かります", paidSupport: [{ goal: "全体像を見える化する", support: "技術領域と役割、依存関係、未決事項を一つの構造として整理します", deliverables: ["課題構造図", "役割・論点一覧"] }, { goal: "相談と実行をつなぐ", support: "領域ごとの専門家やベンダーに確認すべきことを整理し、協議を支援します", deliverables: ["確認事項リスト", "進行方針"] }] },
    ],
  },
  {
    id: "02",
    title: "新規テーマの見通しが立たない",
    outcome: "事業価値と実現条件が分かる",
    scenarios: [
      { id: "new-technology", title: "新技術を採用すべきか判断できない", typicalScene: "新技術の可能性は聞いているが、自社の課題に効くのか、採用の前提が満たせるのか分からない", derivedIssues: ["期待される効果を、現場の業務や既存システムへ結び付けられない", "性能、セキュリティ、運用など、どこまで確認すべきか分からない"], first: "目的、利用者、期待する変化、採用判断に必要な条件を整理します", initialOutcome: "採用・見送り・追加検証のどれを考えるべきかが分かります", paidSupport: [{ goal: "採用条件を確かめる", support: "仕様・事例・性能・運用条件を調べ、適用できる範囲と制約を評価します", deliverables: ["技術調査レポート", "採用条件・リスク一覧"] }, { goal: "小さく確かめる", support: "判断に必要な不確実性だけを対象に、検証計画や試作を設計します", deliverables: ["検証計画", "評価結果"] }] },
      { id: "product-feasibility", title: "企画中の自社サービスの実現可能性が分からない", typicalScene: "構想はあるが、技術的に作れるのか、運用できるのか、どこから確かめればよいか分からない", derivedIssues: ["価値仮説と、技術的な実現条件が混ざっている", "最初の試作で何を確かめればよいか決められない"], first: "提供価値、利用場面、必要な技術、未解決の条件を一枚に整理します", initialOutcome: "企画を進める条件と、最初に確かめるべきことが分かります", paidSupport: [{ goal: "実現条件を見極める", support: "技術構成、データ、性能、運用とコストの条件を調べ、成立条件を評価します", deliverables: ["実現可能性評価", "技術選定方針"] }, { goal: "検証を始める", support: "構想を小さな試作やPoCに分け、目的と成功条件を定めます", deliverables: ["PoC計画", "プロトタイプ"] }] },
    ],
  },
  {
    id: "03",
    title: "ベンダー提案を判断できない",
    outcome: "妥当性・リスク・選定軸が分かる",
    scenarios: [
      { id: "vendor-proposal", title: "提案の前提・妥当性・リスクを評価できない", typicalScene: "提案書はあるが、前提や制約が自社に合うのか、後から困る点がないかを判断できない", derivedIssues: ["提案に書かれていない前提や責任分担を確認できていない", "技術的な代替案や、追加費用につながるリスクを見落としそう"], first: "提案の目的、前提条件、未確認事項と、社内で決めるべきことを整理します", initialOutcome: "提案へ確認すべきことと、判断に必要な観点が分かります", paidSupport: [{ goal: "提案を評価する", support: "仕様、構成、セキュリティ、運用条件を確認し、技術的な妥当性を評価します", deliverables: ["ベンダー提案レビュー", "リスク・論点一覧"] }, { goal: "比較して判断する", support: "代替案や追加確認事項を整理し、意思決定に必要な選択肢を提示します", deliverables: ["比較評価表", "確認事項リスト"] }] },
      { id: "product-comparison", title: "複数の提案や製品を比較する軸が定まらない", typicalScene: "候補が複数あり、機能、コスト、実現性、運用のどれを優先して選ぶべきか決められない", derivedIssues: ["各ベンダーの説明が異なり、同じ基準で比べられない", "短期の導入負荷と、将来の拡張性のどちらを優先すべきか迷っている"], first: "目的と制約から、比較すべき評価軸と重み付けを整理します", initialOutcome: "関係者が同じ基準で選ぶための軸が分かります", paidSupport: [{ goal: "比較の軸をつくる", support: "要件、制約、リスクから、機能以外も含めた評価基準を設計します", deliverables: ["評価基準", "比較評価表"] }, { goal: "選定を進める", support: "候補ごとの技術条件、導入負荷、将来の拡張性を確認し、選定を支援します", deliverables: ["技術選定方針", "意思決定用サマリー"] }] },
    ],
  },
  {
    id: "04",
    title: "開発が思うように進まない",
    outcome: "次の判断と打開策が分かる",
    scenarios: [
      { id: "development-stalled", title: "開発が停滞しているが、ボトルネックがはっきりしない", typicalScene: "チームは動いているものの、仕様、連携、性能、運用のどこで止まっているかが見えず、解決策が打てない", derivedIssues: ["課題が増え続け、優先順位を付けられない", "開発、業務、外部チームの間で、止まっている理由の認識が揃わない"], first: "現状、依存関係、決まっていないこと、すでに試したことを整理します", initialOutcome: "いま最初に切り分けるべきボトルネックが分かります", paidSupport: [{ goal: "停滞要因を特定する", support: "構成、進行状況、関係者の役割、検証結果を確認し、詰まりを構造化します", deliverables: ["ボトルネック一覧", "優先順位と対応案"] }, { goal: "打開策を実行する", support: "必要な検証、設計見直し、技術調整を行い、実行順を組み立てます", deliverables: ["検証計画", "実行計画"] }] },
      { id: "technical-roadblock", title: "技術的な難所は見えているが、解決の糸口がつかめない", typicalScene: "原因候補や難しい部分は分かっているが、調べ方や試し方が定まらず、調査が長引いている", derivedIssues: ["仮説が増える一方で、何から検証すべきか決められない", "ログ、コード、構成情報のどこを見れば原因に近づくか分からない"], first: "現象、再現条件、既に試したこと、切り分けるべき仮説を整理します", initialOutcome: "原因に近づく調査順と、次に試す手が分かります", paidSupport: [{ goal: "原因を切り分ける", support: "ログ、構成、依存関係、検証結果を確認し、原因候補を優先順位順に確かめます", deliverables: ["原因仮説一覧", "調査・検証計画"] }, { goal: "解決へ進める", support: "回避策と恒久対応の選択肢を整理し、必要に応じて設計・実装を支援します", deliverables: ["対応方針", "実装・検証結果"] }] },
    ],
  },
];

export const consultationScenes = consultationCategories.flatMap((category) => category.scenarios.map((scene) => ({ ...scene, categoryId: category.id, categoryTitle: category.title })));

export const findConsultationScene = (id: string) => consultationScenes.find((scene) => scene.id === id);

export type ConsultationSceneDetail = {
  intro: string;
  situations: string[];
  initialActions: string[];
  initialOutcomes: string[];
  completionNote?: string;
  paidSupport: Array<{
    goal: string;
    support: string;
    deliverables: string[];
  }>;
};

// The structure used by every consultation-scene page. Add the next scene here
// when its concrete content is ready; the shared page component handles layout.
export const consultationSceneDetails: Record<string, ConsultationSceneDetail> = {
  advisor: {
    intro: "実現したいことはある。しかし、どの技術分野の問題なのか、何を調べ、誰に相談すべきなのかが分からない。問い合わせても対象外と言われ、別の会社を紹介される。そんな、課題にまだ適切な名前が付いていない段階からご相談いただけます",
    situations: [
      "検索に使う技術用語が分からない",
      "IT会社、メーカー、研究者の誰に聞くべきか分からない",
      "問い合わせるたびに専門外と言われる",
      "個別の専門家はいるが、全体を見られる人がいない",
      "技術・設備・データ・制度が絡み、問題の所在が分からない",
      "発注内容を定義できず、見積依頼まで進めない",
    ],
    initialActions: [
      "実現・判断したいことを確認",
      "事実、推測、前提を切り分ける",
      "関係する技術領域と未確認事項を洗い出す",
      "最初に誰へ何を確認すべきか整理する",
    ],
    initialOutcomes: [
      "課題を説明するための言葉",
      "必要な専門領域",
      "最初に確認すべき論点",
      "次に相談すべき相手と伝える内容",
    ],
    completionNote: "相談先と進め方が分かれば、30分で終了して構いません",
    paidSupport: [
      {
        goal: "課題の正体を明らかにする",
        support: "資料確認、ヒアリング、論点分解",
        deliverables: ["課題構造図", "論点・未確認事項一覧"],
      },
      {
        goal: "適切な相談先・発注先を決める",
        support: "必要な専門性の特定、候補調査、依頼範囲の定義",
        deliverables: ["専門領域マップ", "相談先候補", "依頼要件"],
      },
      {
        goal: "次の技術判断まで進める",
        support: "一次情報調査、選択肢比較、必要に応じた予備検証",
        deliverables: ["技術調査レポート", "比較評価", "実行計画"],
      },
    ],
  },
};

export const fourCommonUnknowns = [
  { question: "誰に頼めばよいか分からない", answer: "必要な専門性と進め方を特定する" },
  { question: "やる意味や実現性が分からない", answer: "事業価値と実現条件を整理する" },
  { question: "提案を信じてよいか分からない", answer: "妥当性・リスク・確認点を評価する" },
  { question: "なぜ前に進まないか分からない", answer: "ボトルネックと打開策を明らかにする" },
];

export const serviceConsultationProcess = [
  "30分無料相談",
  "その場で分かることを回答",
  "次に確認すべき論点を整理",
  "必要な場合のみ調査・評価・検証を提案",
  "判断材料を提示",
  "必要に応じて設計・実装まで支援",
];

export const freeConsultationSteps = ["相談", "論点整理", "その場で回答できることを回答", "自分で進める、または継続支援"];

export const consultationMemo = [
  { title: "今、何が起きているか", text: "現象や困っている場面を、一言で構いません", example: "例：提案は受けたが、採用してよいか判断できない" },
  { title: "どこで判断が止まっているか", text: "決められないこと、進められないことを教えてください", example: "例：本番化に進めてよいか、ベンダー案を採るべきか" },
  { title: "試したこと・今ある資料", text: "試したこと、提案書、構成図などがあれば共有してください", example: "例：社内検証の結果、ベンダーからの提案資料" },
];

export const deliverables = ["技術調査レポート", "比較評価表", "リスク・論点一覧", "技術選定方針", "PoC計画と成功条件", "設計資料", "実装・プロトタイプ", "ベンダー提案レビュー"];

export const ongoingSupportExamples = [
  { title: "追加調査・検証", text: "30分では確認しきれない技術条件を調べ、必要なら検証コードで確かめます。" },
  { title: "設計・実装支援", text: "方針が定まった後、設計、プロトタイプ、実装、引き継ぎまで必要な範囲を担います。" },
  { title: "技術判断の伴走", text: "社内やベンダーとの対話に必要な論点、評価基準、意思決定資料を整理します。" },
];

export const serviceDifferences = [
  { title: "経営コンサルティングとは", text: "抽象的な方針だけでは終わりません。仕様書、標準文書、構成、コード、運用条件まで確認し、判断の技術的な根拠をつくります。" },
  { title: "受託開発とは", text: "最初から作ることを前提にしません。原因、制約、代替案を確かめ、作るべきか・何を作るべきかを判断してから設計・実装へ進みます。" },
  { title: "AI導入支援とは", text: "AIだけに対象を限定しません。AI、Web、認証、クラウド、組込みなど、課題に必要な技術領域を横断して扱います。" },
];

export const navigation = [
  { label: "サービス", href: "/services", items: [
    { label: "相談例", description: "困り方から近い相談場面を選ぶ", href: "/services#consultation-topics" },
    { label: "支援の進め方", description: "相談から判断・実行までの流れ", href: "/services#support-process" },
    { label: "30分無料相談", description: "まず状況と次の一手を整理する", href: "/services#free-consultation" },
  ] },
  { label: "インサイト", href: "/insights", items: [
    { label: "特殊IT課題百科", description: "課題構造から探す知見", href: "/insights#problem-encyclopedia" },
    { label: "技術判断ノート", description: "技術を意思決定へつなぐ記録", href: "/insights#decision-notes" },
    { label: "使える技術解説", description: "業務で使える理解へ変える解説", href: "/insights#explainers" },
    { label: "調査レポート", description: "採用判断に必要な調査", href: "/insights#research-reports" },
    { label: "技術ブログ", description: "開発と検証で得た発見", href: "/insights#technical-blog" },
  ] },
  { label: "プロダクト", href: "/products", items: [
    { label: "プロダクト・研究開発", description: "自社で開発・提供するもの", href: "/products" },
    { label: "MathLang", description: "数理ソフトウェア基盤", href: "/products#mathlang" },
    { label: "AIによる独学支援", description: "学習支援システム", href: "/products#ai-learning" },
    { label: "10ページ大学", description: "短編教材シリーズ", href: "/products#ten-page-university" },
  ] },
];

export const problemStates = [
  { title: "社内にも外注先にも、判断できる人がいない", text: "提案はあるのに、前提やリスクを評価できず、次の意思決定が止まっている。" },
  { title: "何の専門家に相談すればよいか分からない", text: "問題がAI、Web、認証、クラウド、組込みなどにまたがり、相談先そのものを決められない。" },
  { title: "複数の技術や製品が絡み、全体像が見えない", text: "各担当は動いているのに、境界にある論点が置き去りになっている。" },
  { title: "ベンダーから提案された内容を評価できない", text: "設計や見積もりが自社の制約に合うのか、別の選択肢があるのかを確認したい。" },
  { title: "PoCは動いたが、本番化の判断ができない", text: "性能、認証、運用、コスト、保守といった条件が残り、試作の先へ進めない。" },
  { title: "導入すべきか、見送るべきかを決められない", text: "新しい技術の期待と実際の制約を分け、今の事業にとっての判断材料がほしい。" },
  { title: "原因調査が長期化している", text: "起きている現象は見えるが、本当の原因や調べる順序がはっきりしない。" },
  { title: "技術要件と業務・運用の制約が衝突している", text: "技術だけで正しい答えでは進めず、現場で成立する設計を探す必要がある。" },
];

export const promises = [
  { number: "01", title: "構造を明らかにする", text: "技術、業務、運用、組織上の論点を切り分け、互いにどう関係しているかを整理します。" },
  { number: "02", title: "境界を明らかにする", text: "できること、できないこと、まだ不確実なことを分け、判断に必要な追加検証を定めます。" },
  { number: "03", title: "判断できる状態にする", text: "選択肢、リスク、必要な検証、次のアクションを、事業・開発それぞれが判断できる形にします。" },
  { number: "04", title: "解決へ進める", text: "必要に応じて、検証、設計、実装、外部チームとの技術調整まで、実務として進めます。" },
];

export const approachSteps = [
  { title: "状況と制約の把握", text: "起きていること、既に試したこと、技術・業務・運用上の制約を確認します。" },
  { title: "一次情報・既存資料の調査", text: "仕様書、標準文書、SDK、論文、コード、設計資料などを必要な深さまで確認します。" },
  { title: "論点と仮説の整理", text: "問題の構造を分解し、何を確認すべきか、取りうる対応を比較できる形にします。" },
  { title: "技術的な検証", text: "資料だけで決められない部分は、必要ならコードを書き、実現性や条件を確かめます。" },
  { title: "判断材料と選択肢の提示", text: "できること・できないこと、リスク、必要な検証を、意思決定に使える形で示します。" },
  { title: "必要に応じて設計・実装支援", text: "選んだ方針を、設計、実装、説明、引き継ぎへつなげます。" },
];

export const services = [
  { id: "01", title: "技術課題診断", lead: "何が止まり、どこから手をつけるべきかを整理します。", text: "資料、構成、コード、提案内容、現場の状況を確認し、技術課題の構造と優先順位を見立てます。", outputs: ["課題構造図", "技術リスク一覧", "原因仮説と次のアクション"] },
  { id: "02", title: "技術的セカンドオピニオン", lead: "設計・選定・見積もりを、第三者として確認します。", text: "外注先や社内チームからの提案について、前提、代替案、見落としうるリスクを確認します。", outputs: ["提案内容の確認", "比較表", "確認すべき質問"] },
  { id: "03", title: "技術調査・実現可能性評価", lead: "採用できる条件と、残る不確実性を明らかにします。", text: "未知・ニッチな技術も、一次情報を読み、実務上の採用可否を判断するための調査と評価を行います。", outputs: ["一次情報の整理", "実現可能性評価", "検証計画"] },
  { id: "04", title: "技術選定・設計支援", lead: "要求と制約から、無理のない技術方針を組み立てます。", text: "AI、Web、クラウド、認証、組込み、ロボティクスを含むシステムについて、要求整理から設計方針まで支援します。", outputs: ["技術選定案", "設計案", "移行・運用方針"] },
  { id: "05", title: "検証・プロトタイプ実装", lead: "作ることではなく、判断に必要な不確実性を減らします。", text: "小規模な検証コードやプロトタイプで、実現性、性能、運用上の条件を確かめます。", outputs: ["検証コード", "プロトタイプ", "評価結果"] },
  { id: "06", title: "技術課題の解決支援", lead: "調査の先にある、設計・実装・調整まで扱います。", text: "特定の技術課題について、調査、設計、実装、デバッグ、外部チームとの技術調整を行います。", outputs: ["実装・デバッグ", "技術調整", "引き継ぎ資料"] },
  { id: "07", title: "技術判断の説明支援", lead: "経営・事業・開発が、同じ論点で話せるようにします。", text: "結論、リスク、必要工数、判断事項の要約と、技術者向けの詳細な根拠を両方整理します。", outputs: ["意思決定用サマリー", "技術説明資料", "詳細根拠"] },
];

export const decisionCase = {
  title: "社内へAIコーディングツールを導入したい",
  lead: "製品を選ぶ前に、導入後の開発プロセスまで含めて判断します。",
  items: ["利用対象", "認証と権限", "コードやデータの取り扱い", "ログと監査", "ガバナンスルール", "教育", "利用環境", "効果測定", "開発プロセスへの組み込み", "ハーネスや追加実装の必要性"],
  conclusion: "ツールの機能比較だけでは、採用可否は決まりません。技術、セキュリティ、開発運用、組織の条件を並べ、何を先に決めるべきかを整理します。",
};

export const technologyGroups = [
  { title: "セマンティックWeb・知識表現", topics: ["オントロジー", "RDF", "OWL", "知識構造化"] },
  { title: "Web・広告技術", topics: ["Cookie", "トラッキング", "Webシステム", "配信基盤"] },
  { title: "ロボティクス・組込み", topics: ["ROS", "ドローン", "DJI SDK", "組込みソフトウェア"] },
  { title: "分散システム", topics: ["ブロックチェーン", "Proof of Work", "分散技術"] },
  { title: "AI・機械学習", topics: ["機械学習", "生成AI", "RAG", "AIエージェント", "AIコーディング", "AIハーネス"] },
  { title: "基盤技術", topics: ["クラウド", "認証", "権限管理", "コンパイラ", "ソフトウェアアーキテクチャ"] },
];

export const insightCategories = [
  { id: "problem-encyclopedia", title: "特殊IT課題百科", description: "技術名ではなく、企業が直面する課題構造から探すための知見です。", examples: ["社内にも外注先にも詳しい人がいない", "複数ベンダーの境界で問題が起きている"] },
  { id: "decision-notes", title: "技術判断ノート", description: "新しい技術を、企業の意思決定という観点から解釈する記録です。", examples: ["RAGは何を解決し、何を解決しないのか", "AIエージェント導入で先に決めること"] },
  { id: "explainers", title: "使える技術解説", description: "複雑な技術を、業務や意思決定で使える理解へ変える解説です。", examples: ["PoCは製品のミニ版ではなく、不確実性を減らす実験", "ガバナンスは許可された速度域を定める仕組み"] },
  { id: "research-reports", title: "調査レポート", description: "新しい技術や標準仕様を、採用判断に必要な論点から読み解く記録です。", examples: ["仕様・標準・SDKを読む際の確認観点", "技術選定の前に確認する条件"] },
  { id: "technical-blog", title: "技術ブログ", description: "開発や調査で得た技術的な発見を、背景と判断の過程とともに共有します。", examples: ["実装・検証で見えた条件", "技術を現場へ適用する際の論点"] },
];

export const sampleInsights = [
  { title: "AIコーディングツール導入は、ツール導入ではなく開発プロセス変更である", category: "技術判断ノート", tags: ["生成AI", "開発プロセス"], date: "準備中", status: "準備中" },
  { title: "PoCが本番化できないとき、最初に分けるべき論点", category: "特殊IT課題百科", tags: ["PoC", "運用設計"], date: "準備中", status: "準備中" },
  { title: "RAGを説明する前に確認したい、知識と業務の距離", category: "使える技術解説", tags: ["RAG", "知識設計"], date: "準備中", status: "準備中" },
];

export const researchProjects = [
  { id: "mathlang", level: "PRODUCT PLATFORM", title: "MathLang", description: "数学的な構造やモデルを、検証可能で実行可能な計算へ接続する技術基盤。", status: "研究開発中" },
  { id: "ai-learning", level: "LEARNING PRODUCT", title: "AIによる独学支援", description: "学習者の理解状態を把握し、教材生成、理解確認、対話支援を統合する学習支援システム。", status: "研究構想" },
  { id: "ten-page-university", level: "EDUCATION PRODUCT", title: "10ページ大学", description: "聞いたことのある言葉を、仕組みまで説明できる教養へ変える短編教材シリーズ。", status: "企画中" },
];

export const profile = {
  summary: "技術と社会実装の接続を中心テーマに、顧客ヒアリング、技術調査、設計、実装、説明までを一貫して担います。",
  history: ["情報工学系大学院修了。AI、ソフトウェア、ロボティクスなどの開発経験。", "約10年間のフリーランス経験。顧客ヒアリング、技術調査、設計、実装、説明を一人で担当。", "複数領域の技術を短期間で理解し、実務上の判断と実装へ適用。", "現在はAI時代の技術基盤、数理ソフトウェア、学習支援などを研究・開発。"],
};

export const faqItems = [
  { question: "課題が整理できていなくても相談できますか？", answer: "はい。何が問題なのか、どの分野の専門家に相談すべきか分からない状態から状況を伺います。" },
  { question: "調査や助言だけを依頼することはできますか？", answer: "可能です。必要な範囲は、相談内容と判断に必要な成果物を確認してから整理します。" },
  { question: "実装まで依頼できますか？", answer: "必要に応じて、検証コード、プロトタイプ、設計・実装、技術調整まで扱います。" },
];
