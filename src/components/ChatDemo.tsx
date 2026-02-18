import { FadeIn } from "./FadeIn";

const EXCHANGES = [
  {
    owner: "Give Tom a raise to £41,000",
    agent: "Tom Parker's salary will increase from £38,000 to £41,000 from March.\n\nMonthly take-home: £2,501 → £2,688 (+£187)\nYour monthly cost increases by £271 (salary + employer NI + pension).",
    actions: ["Confirm", "Adjust"],
  },
  {
    owner: "Can I afford payroll this month?",
    agent: "Your February payroll costs £97,894. Your current balance is £142,350.\n\nAfter payroll, you'll have £44,456 — but you have a £12,000 supplier payment due Mar 3 and your March payroll will be similar (~£98k).\n\nExpected income before March payroll: £85,000 (based on your average monthly revenue)\n\nYou're fine, but it'll be tighter than usual.",
    actions: ["Set up balance alert", "No thanks"],
  },
];

export function ChatDemo() {
  return (
    <div className="space-y-6 max-w-sm">
      {EXCHANGES.map((exchange, i) => (
        <FadeIn key={i} delay={i * 0.15}>
          <div className="space-y-3">
            {/* Owner message */}
            <div className="flex justify-end">
              <div className="bg-primary/15 border border-primary/25 rounded-2xl rounded-tr-sm px-4 py-2.5 max-w-[85%]">
                <p className="text-sm text-foreground">{exchange.owner}</p>
              </div>
            </div>
            {/* Agent response */}
            <div className="flex justify-start">
              <div className="space-y-2 max-w-[90%]">
                <div className="bg-surface-raised border border-divider rounded-2xl rounded-tl-sm px-4 py-3">
                  <p className="text-xs text-secondary leading-relaxed whitespace-pre-line">{exchange.agent}</p>
                </div>
                <div className="flex gap-2">
                  {exchange.actions.map((action, j) => (
                    <button
                      key={j}
                      className={`text-xs px-3 py-1.5 rounded-full border transition-colors ${
                        j === 0
                          ? "border-primary/40 text-primary hover:bg-primary/10"
                          : "border-divider text-muted-foreground hover:border-secondary"
                      }`}
                    >
                      {action}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      ))}
    </div>
  );
}
