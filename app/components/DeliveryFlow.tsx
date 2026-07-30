type DeliveryPhase = {
  id: string;
  ability: string;
  title: string;
  description: string;
  outputs: readonly string[];
};

export function DeliveryFlow({
  phases,
  compact = false,
}: {
  phases: readonly DeliveryPhase[];
  compact?: boolean;
}) {
  return <ol className={compact ? "delivery-flow delivery-flow-compact" : "delivery-flow"} aria-label="技術を見立て、判断材料をつくり、実行可能な形へ設計し、関係者と実行まで進める流れ">
    {phases.map((phase) => <li key={phase.id}>
      <header><span>{phase.id}</span><h3>{compact ? phase.ability : phase.title}</h3></header>
      {!compact && <p className="delivery-phase-description">{phase.description}</p>}
      <div className="delivery-phase-output">
        <span>{compact ? "対応する支援" : "成果物"}</span>
        {compact
          ? phase.title
          : <ul>{phase.outputs.map((output) => <li key={output}>{output}</li>)}</ul>}
      </div>
    </li>)}
  </ol>;
}
