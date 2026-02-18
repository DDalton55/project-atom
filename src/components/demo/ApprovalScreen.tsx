import { motion } from "framer-motion";
import { useState } from "react";

interface ScreenProps {
  onApprove?: () => void;
  approved?: boolean;
  onNext?: () => void;
}

export function ApprovalScreen({ onApprove }: ScreenProps) {
  const [acknowledged, setAcknowledged] = useState(false);

  return (
    <div className="flex flex-col h-full bg-[hsl(20_8%_6%)] font-sans">
      {/* Dimmed background */}
      <div className="flex-1 bg-black/50" />

      {/* Bottom sheet */}
      <motion.div
        initial={{ y: "100%" }}
        animate={{ y: 0 }}
        transition={{ type: "spring", damping: 30, stiffness: 300, delay: 0.1 }}
        className="absolute bottom-0 left-0 right-0 bg-[hsl(20_6%_10%)] rounded-t-3xl border-t border-divider"
        style={{ maxHeight: "88%" }}
      >
        {/* Handle */}
        <div className="flex justify-center pt-3 pb-1">
          <div className="w-10 h-1 rounded-full bg-divider" />
        </div>

        <div className="px-5 pb-6 overflow-y-auto" style={{ maxHeight: "calc(88vh - 20px)" }}>
          {/* Title */}
          <div className="py-3 border-b border-divider mb-4">
            <div className="font-display font-700 text-base text-foreground">February 2026 Payroll</div>
            <div className="text-xs text-muted-foreground mt-0.5">25 employees · £87,432 gross</div>
          </div>

          {/* Exception */}
          <div className={`rounded-xl p-3 mb-4 border transition-all ${acknowledged ? "border-divider bg-surface opacity-60" : "border-primary/40 bg-primary/5"}`}>
            <div className="flex items-start gap-2">
              <span className="text-primary text-sm flex-shrink-0">⚠</span>
              <div className="flex-1">
                <div className="text-xs font-semibold text-foreground">Sarah Chen — tax code changed by HMRC</div>
                <div className="text-xs text-secondary mt-0.5">1257L → 1185L · take-home drops £47/mo</div>
                <div className="text-[10px] text-muted-foreground mt-1">Applied automatically. For your awareness.</div>
              </div>
            </div>
            {!acknowledged && (
              <button
                onClick={() => setAcknowledged(true)}
                className="mt-2 ml-6 text-[10px] font-medium text-primary border border-primary/30 rounded-lg px-3 py-1 hover:bg-primary/10 transition-colors"
              >
                Acknowledged
              </button>
            )}
          </div>

          <div className="text-[10px] text-muted-foreground mb-3">✓ 24 employees unchanged from January</div>

          {/* Payment breakdown */}
          <div className="bg-surface rounded-xl border border-divider p-3 mb-4">
            <div className="text-[10px] font-semibold text-muted-foreground uppercase tracking-wider mb-2.5">Payment summary</div>
            <div className="space-y-2">
              {[
                { label: "To employees (25)", value: "£61,219" },
                { label: "HMRC (due Mar 22)", value: "£18,945" },
                { label: "NEST pension (due Mar 22)", value: "£4,612" },
              ].map((row, i) => (
                <div key={i} className="flex justify-between text-xs">
                  <span className="text-secondary">{row.label}</span>
                  <span className="text-foreground font-medium">{row.value}</span>
                </div>
              ))}
              <div className="border-t border-divider pt-2 mt-2 flex justify-between text-xs">
                <span className="text-secondary font-medium">Total this month</span>
                <span className="text-foreground font-semibold">£97,894</span>
              </div>
              <div className="flex justify-between text-xs">
                <span className="text-muted-foreground">Available balance</span>
                <span className="text-primary font-semibold">£142,350 ✓</span>
              </div>
            </div>
          </div>

          {/* CTA */}
          <button
            onClick={onApprove}
            className="w-full py-3.5 rounded-2xl text-sm font-display font-700 text-primary-foreground transition-all active:scale-[0.98] hover:opacity-90"
            style={{ background: "var(--gradient-accent)" }}
          >
            Approve &amp; Pay
          </button>
          <p className="text-center text-[10px] text-muted-foreground mt-2">
            25 Faster Payments will execute immediately
          </p>
        </div>
      </motion.div>
    </div>
  );
}
