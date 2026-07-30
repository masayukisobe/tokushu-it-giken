type DeliveryPhase = {
  id: string;
  shortTitle: string;
  title: string;
  steps: readonly string[];
  output: string;
};

export function DeliveryFlow({
  phases,
  compact = false,
}: {
  phases: readonly DeliveryPhase[];
  compact?: boolean;
}) {
  return <ol className={compact ? "delivery-flow delivery-flow-compact" : "delivery-flow"} aria-label="技術課題を見立て、計画と実行へつなぐ流れ">
    {phases.map((phase) => <li key={phase.id}>
      <header><span>{phase.id}</span><h3>{compact ? phase.shortTitle : phase.title}</h3></header>
      {!compact && <ul>{phase.steps.map((step) => <li key={step}>{step}</li>)}</ul>}
      <p className="delivery-phase-output"><span>得られるもの</span>{phase.output}</p>
    </li>)}
  </ol>;
}
