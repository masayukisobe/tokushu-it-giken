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

export const consultationOutcomes = [
  { before: "誰に相談すればいいか分からない", after: "最初に確認すべき論点、相談先、進め方が整理される" },
  { before: "ベンダー提案を評価できない", after: "技術的な妥当性、リスク、追加確認事項が明確になる" },
  { before: "新技術を採用すべきか判断できない", after: "採用・見送りの判断材料と、必要な検証方法が得られる" },
  { before: "技術・業務・組織の論点が絡み合っている", after: "問題を分解し、優先順位と次の一手が決まる" },
  { before: "PoCを始めるべきか迷っている", after: "PoCの目的、範囲、成功条件、やらない選択肢まで整理される" },
  { before: "社内に技術判断できる人がいない", after: "一時的な技術責任者の視点で、意思決定を支援してもらえる" },
];

export const consultationJourney = [
  {
    id: "01",
    phase: "相談先の探索",
    before: "相談先が見つからない",
    after: "専門領域と進め方が見える",
    examples: [
      { issue: "誰に相談すればいいか分からない", support: "技術・業務・組織の論点を分け、最初に確認すべきことと相談先を整理します" },
      { issue: "技術・業務・組織の論点が絡み合っている", support: "判断が必要な論点と、今すぐ進められることを切り分けます" },
    ],
  },
  {
    id: "02",
    phase: "新規テーマの構想評価",
    before: "新規テーマの見通しが立たない",
    after: "事業価値と実現条件が見える",
    examples: [
      { issue: "新技術を採用すべきか判断できない", support: "採用・見送りの判断材料と、確かめるべき実現条件を整理します" },
    ],
  },
  {
    id: "03",
    phase: "外部提案の評価",
    before: "ベンダー提案を判断できない",
    after: "妥当性・リスク・確認点が見える",
    examples: [
      { issue: "提案内容の技術的な妥当性を評価できない", support: "前提・制約・代替案を確認し、判断に必要な確認点を整理します" },
    ],
  },
  {
    id: "04",
    phase: "開発・PoCの実行と打開",
    before: "開発・PoCが前に進まない",
    after: "ボトルネックと打開策が見える",
    examples: [
      { issue: "PoCを始めるべきか迷っている", support: "目的・範囲・成功条件を定め、やらない選択肢も含めて判断します" },
      { issue: "社内に技術判断できる人がいない", support: "一時的な技術責任者の視点で、次の判断と実行の優先順位を支えます" },
    ],
  },
];

export const freeConsultationSteps = ["相談", "論点整理", "その場で回答できることを回答", "自分で進める、または継続支援"];

export const consultationMemo = [
  { title: "今、何が起きているか", text: "現象や困っている場面を、一言で構いません", example: "例：提案は受けたが、採用してよいか判断できない" },
  { title: "どこで判断が止まっているか", text: "決められないこと、進められないことを教えてください", example: "例：PoCを始めるべきか、ベンダー案を採るべきか" },
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
  { label: "Services", href: "/services", items: [
    { label: "Overview", description: "提供サービスの全体像", href: "/services" },
    { label: "Before / After", description: "困り方別に見る支援", href: "/services#before-after" },
    { label: "What We Solve", description: "相談できる課題", href: "/services#consultation-issues" },
    { label: "How We Work", description: "支援の進め方", href: "/services#support-process" },
    { label: "Deliverables", description: "得られる成果物", href: "/services#deliverables" },
  ] },
  { label: "Insights", href: "/insights", items: [
    { label: "Problem Encyclopedia", description: "特殊IT課題百科", href: "/insights#problem-encyclopedia" },
    { label: "Decision Notes", description: "技術判断ノート", href: "/insights#decision-notes" },
    { label: "Explainers", description: "技術解説", href: "/insights#explainers" },
    { label: "Research Reports", description: "調査レポート", href: "/insights#research-reports" },
    { label: "Technical Blog", description: "技術ブログ", href: "/insights#technical-blog" },
  ] },
  { label: "Products", href: "/products", items: [
    { label: "All Products", description: "自社プロダクト一覧", href: "/products" },
    { label: "MathLang", description: "数理ソフトウェア基盤", href: "/products#mathlang" },
    { label: "AI Learning Support", description: "AIによる独学支援", href: "/products#ai-learning" },
    { label: "10 Page University", description: "短編教材シリーズ", href: "/products#ten-page-university" },
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
