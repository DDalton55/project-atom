import { FadeIn } from "./FadeIn";

const TIERS = [
  {
    number: "01",
    name: "Deep Integration",
    hosts: "Monzo Business, Starling Business",
    features: [
      "Full access to account data & payment rails",
      "Payments execute directly from business account",
      "Transactions enriched with payroll data",
      "Cash flow intelligence enabled",
      "Employee experience (if they use the same platform)",
    ],
    highlight: true,
  },
  {
    number: "02",
    name: "Standard Integration",
    hosts: "Xero, FreeAgent, QuickBooks",
    features: [
      "Agent connects via API to accounting data",
      "Payroll summary posted to host app",
      "Payments via BACS (3-day cycle)",
      "Chat-based interaction via host messaging",
      "No cash flow intelligence",
    ],
    highlight: false,
  },
  {
    number: "03",
    name: "Lightweight Integration",
    hosts: "Slack, Teams, any chat app",
    features: [
      "Purely conversational interface",
      "Monthly summary via message",
      "Approval via chat interaction",
      "Payments initiated but not executed by host",
      "Ghost Payroll surfaced through messaging",
    ],
    highlight: false,
  },
];

export function IntegrationTiers() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {TIERS.map((tier, i) => (
        <FadeIn key={i} delay={i * 0.1}>
          <div
            className={`rounded-xl p-6 border h-full flex flex-col ${
              tier.highlight
                ? "border-primary/30 bg-surface accent-glow"
                : "border-divider bg-surface"
            }`}
          >
            <div className="text-xs font-display font-600 text-muted-foreground tracking-widest mb-1">
              TIER {tier.number}
            </div>
            <div className={`font-display font-700 text-lg mb-1 ${tier.highlight ? "text-gradient" : "text-foreground"}`}>
              {tier.name}
            </div>
            <div className="text-xs text-muted-foreground mb-5 pb-4 border-b border-divider">
              e.g. {tier.hosts}
            </div>
            <ul className="space-y-2.5 flex-1">
              {tier.features.map((feature, j) => (
                <li key={j} className="flex items-start gap-2.5 text-xs text-secondary leading-relaxed">
                  <span className={`mt-0.5 flex-shrink-0 ${tier.highlight ? "text-primary" : "text-muted-foreground"}`}>→</span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </FadeIn>
      ))}
    </div>
  );
}
