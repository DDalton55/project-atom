import { FadeIn } from "./FadeIn";

interface NotificationCardProps {
  type: "push" | "feed" | "approval" | "complete";
}

export function NotificationCard({ type }: NotificationCardProps) {
  if (type === "push") {
    return (
      <FadeIn delay={0.1}>
        <div className="bg-surface-raised border border-divider rounded-xl p-4 max-w-xs font-sans">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-7 h-7 rounded-lg bg-primary flex items-center justify-center text-primary-foreground text-xs font-bold">M</div>
            <div>
              <div className="text-xs font-semibold text-foreground">Monzo Business</div>
              <div className="text-xs text-muted-foreground">now</div>
            </div>
          </div>
          <div className="text-sm font-semibold text-foreground mb-1">Payroll ready for review</div>
          <div className="text-xs text-secondary leading-relaxed">
            February payroll prepared for 25 employees.<br />
            <span className="text-foreground font-medium">£61,219 net to pay</span> · £18,945 HMRC due Mar 22<br />
            <span className="text-primary">1 item needs your review.</span>
          </div>
          <button className="mt-3 w-full text-xs font-semibold text-primary border border-primary/30 rounded-lg py-2 hover:bg-primary/10 transition-colors">
            Review &amp; Approve →
          </button>
        </div>
      </FadeIn>
    );
  }

  if (type === "approval") {
    return (
      <FadeIn delay={0.15}>
        <div className="bg-surface-raised border border-divider rounded-xl p-5 max-w-xs font-sans">
          <div className="text-sm font-display font-700 text-foreground mb-1">February 2026 Payroll</div>
          <div className="text-xs text-muted-foreground mb-4">25 employees · £87,432 gross</div>

          <div className="bg-surface border border-divider rounded-lg p-3 mb-3">
            <div className="flex items-start gap-2">
              <span className="text-primary text-xs mt-0.5">⚠</span>
              <div>
                <div className="text-xs font-semibold text-foreground">Sarah Chen — tax code changed</div>
                <div className="text-xs text-secondary mt-0.5">1257L → 1185L · take-home drops £47/mo</div>
                <div className="text-xs text-muted-foreground mt-1">Applied automatically. For your awareness.</div>
              </div>
            </div>
          </div>

          <div className="text-xs text-muted-foreground mb-3">✓ 24 employees unchanged from January</div>

          <div className="border-t border-divider pt-3 space-y-1.5 mb-3">
            <div className="flex justify-between text-xs">
              <span className="text-secondary">To employees (25)</span>
              <span className="text-foreground font-medium">£61,219</span>
            </div>
            <div className="flex justify-between text-xs">
              <span className="text-secondary">HMRC (due Mar 22)</span>
              <span className="text-foreground font-medium">£18,945</span>
            </div>
            <div className="flex justify-between text-xs">
              <span className="text-secondary">NEST pension (due Mar 22)</span>
              <span className="text-foreground font-medium">£4,612</span>
            </div>
            <div className="flex justify-between text-xs border-t border-divider pt-1.5 mt-1.5">
              <span className="text-secondary">Total this month</span>
              <span className="text-foreground font-semibold">£97,894</span>
            </div>
            <div className="flex justify-between text-xs">
              <span className="text-muted-foreground">Available balance</span>
              <span className="text-primary font-medium">£142,350 ✓</span>
            </div>
          </div>

          <button className="w-full text-sm font-display font-600 text-primary-foreground rounded-lg py-2.5 transition-all"
            style={{ background: "var(--gradient-accent)" }}>
            Approve &amp; Pay
          </button>
        </div>
      </FadeIn>
    );
  }

  if (type === "complete") {
    return (
      <FadeIn delay={0.2}>
        <div className="bg-surface-raised border border-divider rounded-xl p-4 max-w-xs font-sans">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center">
              <span className="text-primary text-xs">✓</span>
            </div>
            <span className="text-xs font-semibold text-foreground">February Payroll Complete</span>
          </div>
          <div className="space-y-1.5 text-xs">
            <div className="flex justify-between">
              <span className="text-secondary">25 employees paid</span>
              <span className="text-foreground font-medium">£61,219</span>
            </div>
            <div className="text-secondary">✓ FPS submitted to HMRC</div>
            <div className="text-secondary">✓ HMRC payment scheduled: £18,945 (Mar 22)</div>
            <div className="text-secondary">✓ Pension sent: £4,612 to NEST</div>
          </div>
          <div className="mt-3 pt-3 border-t border-divider text-xs text-muted-foreground">
            Approved by you at 14:32
          </div>
        </div>
      </FadeIn>
    );
  }

  return null;
}
