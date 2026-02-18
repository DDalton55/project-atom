import type { ScreenProps } from "./types";
import { PhoneBottomNav } from "./PhoneBottomNav";

type Transaction = {
  icon: string;
  name: string;
  amount: string;
  sub: string;
  time: string;
  positive?: boolean;
};

const TRANSACTIONS: Transaction[] = [
  { icon: "🏬", name: "Office Direct", amount: "-£2,340.00", sub: "Monthly rent · Mar 1", time: "Mar 1" },
  { icon: "⚡", name: "British Gas Business", amount: "-£318.50", sub: "Utility bill", time: "Feb 28" },
  { icon: "📦", name: "Acme Supplies Ltd", amount: "-£1,290.00", sub: "Invoice #2891", time: "Feb 27" },
  { icon: "💰", name: "Client: Apex Corp", amount: "+£14,500.00", sub: "Invoice #1042 paid", time: "Feb 26", positive: true },
  { icon: "☕", name: "Pret A Manger", amount: "-£18.40", sub: "Team lunch", time: "Feb 25" },
];

export function FeedScreen(_props: ScreenProps) {
  return (
    <div className="flex flex-col h-full bg-[hsl(20_8%_6%)] font-sans">
      {/* Header */}
      <div className="px-5 pt-4 pb-3">
        <div className="flex items-center justify-between mb-4">
          <div>
            <div className="text-xs text-muted-foreground">Good morning,</div>
            <div className="text-base font-display font-700 text-foreground">Northfield Digital</div>
          </div>
          <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground text-xs font-bold">N</div>
        </div>
        {/* Balance */}
        <div className="bg-surface rounded-xl p-4 mb-1 border border-divider">
          <div className="text-xs text-muted-foreground mb-1">Business account</div>
          <div className="font-display font-800 text-2xl text-foreground">£142,350.00</div>
          <div className="text-xs text-muted-foreground mt-0.5">Available balance</div>
        </div>
      </div>

      {/* Transactions */}
      <div className="px-5 flex-1 overflow-hidden">
        <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Recent activity</div>
        <div className="space-y-2">
          {TRANSACTIONS.map((tx, i) => (
            <div key={i} className="flex items-center gap-3 py-2 border-b border-divider/50 last:border-0">
              <div className="w-8 h-8 rounded-full bg-surface-raised flex items-center justify-center text-sm flex-shrink-0">
                {tx.icon}
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-xs font-medium text-foreground truncate">{tx.name}</div>
                <div className="text-[10px] text-muted-foreground">{tx.sub}</div>
              </div>
              <div className="text-right flex-shrink-0">
                <div className={`text-xs font-semibold ${tx.positive ? "text-primary" : "text-foreground"}`}>{tx.amount}</div>
                <div className="text-[10px] text-muted-foreground">{tx.time}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <PhoneBottomNav />
    </div>
  );
}
