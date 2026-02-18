import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface ScreenProps {
  onApprove?: () => void;
  approved?: boolean;
  onNext?: () => void;
}

const PAYMENTS = [
  "Tom Parker — £2,500.73",
  "Sarah Chen — £2,843.55",
  "James Liu — £3,100.00",
  "Priya Sharma — £2,150.00",
  "Oliver Wright — £2,800.00",
  "Emma Davis — £1,950.00",
  "Liam Johnson — £3,400.00",
  "Sophie Williams — £2,250.00",
  "Noah Brown — £2,600.00",
  "Isla Taylor — £1,875.00",
];

const MILESTONES = [
  { label: "25 Faster Payments sent", delay: 0.3 },
  { label: "FPS submitted to HMRC", delay: 1.2 },
  { label: "HMRC payment scheduled (Mar 22)", delay: 1.8 },
  { label: "NEST pension contributions sent", delay: 2.4 },
  { label: "25 payslips emailed to employees", delay: 3.0 },
];

export function ProcessingScreen({ onNext }: ScreenProps) {
  const [milestones, setMilestones] = useState<boolean[]>([false, false, false, false, false]);
  const [done, setDone] = useState(false);

  useEffect(() => {
    MILESTONES.forEach((m, i) => {
      setTimeout(() => {
        setMilestones((prev) => {
          const next = [...prev];
          next[i] = true;
          return next;
        });
      }, m.delay * 1000);
    });
    setTimeout(() => setDone(true), 3600);
  }, []);

  return (
    <div className="flex flex-col h-full bg-[hsl(20_8%_6%)] font-sans px-5 pt-6 pb-4">
      {/* Header */}
      <div className="text-center mb-6">
        <motion.div
          animate={{ rotate: done ? 0 : 360 }}
          transition={{ duration: 1.2, repeat: done ? 0 : Infinity, ease: "linear" }}
          className="w-12 h-12 rounded-full border-2 border-primary/30 border-t-primary mx-auto mb-3 flex items-center justify-center"
        >
          {done && <span className="text-primary text-lg">✓</span>}
        </motion.div>
        <div className="font-display font-700 text-base text-foreground">
          {done ? "Payroll complete" : "Processing…"}
        </div>
        <div className="text-xs text-muted-foreground mt-1">February 2026</div>
      </div>

      {/* Payment stream */}
      <div className="bg-surface rounded-xl border border-divider p-3 mb-4 overflow-hidden" style={{ height: 140 }}>
        <div className="text-[10px] font-semibold text-muted-foreground uppercase tracking-wider mb-2">
          Payments sending
        </div>
        <div className="space-y-1 overflow-hidden" style={{ height: 110 }}>
          {PAYMENTS.map((payment, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: [0, 1, 0.4], x: 0 }}
              transition={{ delay: i * 0.12, duration: 0.6 }}
              className="flex items-center gap-2 text-xs"
            >
              <span className="text-primary text-[10px]">→</span>
              <span className="text-secondary">{payment}</span>
              <span className="ml-auto text-primary text-[10px]">✓</span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Milestones */}
      <div className="space-y-2 flex-1">
        {MILESTONES.map((m, i) => (
          <div key={i} className={`flex items-center gap-2.5 text-xs transition-all duration-500 ${milestones[i] ? "opacity-100" : "opacity-25"}`}>
            <div className={`w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 transition-all ${milestones[i] ? "bg-primary/20" : "bg-surface border border-divider"}`}>
              {milestones[i] && <span className="text-primary text-[8px]">✓</span>}
            </div>
            <span className={milestones[i] ? "text-secondary" : "text-muted-foreground"}>{m.label}</span>
          </div>
        ))}
      </div>

      {done && (
        <motion.button
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          onClick={onNext}
          className="w-full py-3 rounded-2xl text-sm font-display font-700 text-primary-foreground mt-4"
          style={{ background: "var(--gradient-accent)" }}
        >
          View banking feed →
        </motion.button>
      )}
    </div>
  );
}
