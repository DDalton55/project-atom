import { motion } from "framer-motion";

interface ScreenProps {
  onApprove?: () => void;
  approved?: boolean;
  onNext?: () => void;
}

const ENRICHED_TRANSACTIONS = [
  {
    icon: "💸",
    name: "Salary — Tom Parker",
    amount: "-£2,500.73",
    sub: "Senior Designer · February 2026",
    detail: "Gross: £3,166.67 · Tax: £315 · NI: £249",
    isNew: true,
    delay: 0.1,
  },
  {
    icon: "💸",
    name: "Salary — Sarah Chen",
    amount: "-£2,843.55",
    sub: "Marketing Manager · February 2026",
    detail: "Tax code changed this month (HMRC) ⚠",
    isNew: true,
    delay: 0.2,
  },
  {
    icon: "💸",
    name: "HMRC — PAYE February",
    amount: "-£18,945.00",
    sub: "Employee tax + NI + Employer NI",
    detail: "Due: Mar 22 · Scheduled ✓",
    isNew: true,
    delay: 0.3,
  },
  {
    icon: "💸",
    name: "NEST Pension — February",
    amount: "-£4,612.00",
    sub: "25 employees · 5% ee / 3% er",
    detail: "Contribution submitted",
    isNew: true,
    delay: 0.4,
  },
  {
    icon: "🏬",
    name: "Office Direct",
    amount: "-£2,340.00",
    sub: "Monthly rent · Mar 1",
    detail: "",
    isNew: false,
    delay: 0,
  },
];

export function ConfirmationScreen({}: ScreenProps) {
  return (
    <div className="flex flex-col h-full bg-[hsl(20_8%_6%)] font-sans">
      <div className="px-5 pt-4 pb-2">
        <div className="flex items-center justify-between mb-3">
          <div>
            <div className="text-xs text-muted-foreground">Good morning,</div>
            <div className="text-base font-display font-700 text-foreground">Northfield Digital</div>
          </div>
          <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground text-xs font-bold">N</div>
        </div>

        {/* Balance updated */}
        <div className="bg-surface rounded-xl p-3 mb-3 border border-divider">
          <div className="flex justify-between items-end">
            <div>
              <div className="text-[10px] text-muted-foreground mb-0.5">Business account</div>
              <div className="font-display font-800 text-xl text-foreground">£44,456.00</div>
            </div>
            <div className="text-[10px] text-muted-foreground text-right">
              <span className="text-primary">↓ £97,894</span><br />Payroll paid
            </div>
          </div>
        </div>

        {/* Payroll confirmation card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: -10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.4 }}
          className="border border-primary/30 bg-primary/5 rounded-xl p-3 mb-3"
          style={{ boxShadow: "0 0 20px hsl(18 80% 54% / 0.08)" }}
        >
          <div className="flex items-center gap-2 mb-2">
            <div className="w-4 h-4 rounded-full bg-primary/20 flex items-center justify-center">
              <span className="text-primary text-[8px]">✓</span>
            </div>
            <span className="text-xs font-display font-700 text-foreground">February Payroll Complete</span>
          </div>
          <div className="grid grid-cols-2 gap-x-3 gap-y-1 text-[10px] ml-6">
            <span className="text-secondary">25 employees paid</span>
            <span className="text-foreground font-medium">£61,219</span>
            <span className="text-secondary">FPS submitted</span>
            <span className="text-primary">✓ HMRC</span>
            <span className="text-secondary">HMRC scheduled</span>
            <span className="text-foreground">Mar 22</span>
            <span className="text-secondary">Pension sent</span>
            <span className="text-foreground">£4,612 NEST</span>
          </div>
          <div className="text-[9px] text-muted-foreground mt-2 ml-6">Approved by you at 14:32</div>
        </motion.div>
      </div>

      {/* Enriched transactions */}
      <div className="px-5 flex-1 overflow-hidden">
        <div className="text-[10px] font-semibold text-muted-foreground uppercase tracking-wider mb-2">
          Today's activity
        </div>
        <div className="space-y-0">
          {ENRICHED_TRANSACTIONS.map((tx, i) => (
            <motion.div
              key={i}
              initial={tx.isNew ? { opacity: 0, x: 10 } : { opacity: 1 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: tx.delay, duration: 0.4 }}
              className={`flex items-start gap-2.5 py-2 border-b border-divider/40 last:border-0 ${tx.isNew ? "bg-primary/[0.03] -mx-1 px-1 rounded" : ""}`}
            >
              <div className="w-7 h-7 rounded-full bg-surface-raised flex items-center justify-center text-xs flex-shrink-0 mt-0.5">
                {tx.icon}
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-xs font-medium text-foreground leading-tight">{tx.name}</div>
                <div className="text-[10px] text-muted-foreground">{tx.sub}</div>
                {tx.detail && (
                  <div className="text-[9px] text-secondary mt-0.5">{tx.detail}</div>
                )}
              </div>
              <div className="text-xs font-semibold text-foreground flex-shrink-0">{tx.amount}</div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bottom nav */}
      <div className="border-t border-divider px-6 py-3 flex justify-around">
        {["Home", "Pay", "Cards", "More"].map((item, i) => (
          <div key={i} className={`text-[10px] flex flex-col items-center gap-1 ${i === 0 ? "text-primary" : "text-muted-foreground"}`}>
            <div className={`w-1 h-1 rounded-full ${i === 0 ? "bg-primary" : "bg-transparent"}`} />
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}
