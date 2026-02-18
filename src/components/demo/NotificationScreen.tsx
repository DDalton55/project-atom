import { motion } from "framer-motion";

interface ScreenProps {
  onApprove?: () => void;
  approved?: boolean;
  onNext?: () => void;
}

export function NotificationScreen({ onNext }: ScreenProps) {
  return (
    <div className="flex flex-col h-full bg-[hsl(20_8%_6%)] font-sans">
      {/* Blurred feed behind */}
      <div className="flex-1 px-5 pt-4 opacity-30 blur-[1px] select-none pointer-events-none">
        <div className="flex items-center justify-between mb-4">
          <div>
            <div className="text-xs text-muted-foreground">Good morning,</div>
            <div className="text-base font-display font-700 text-foreground">Northfield Digital</div>
          </div>
          <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground text-xs font-bold">N</div>
        </div>
        <div className="bg-surface rounded-xl p-4 border border-divider">
          <div className="text-xs text-muted-foreground mb-1">Business account</div>
          <div className="font-display font-800 text-2xl text-foreground">£142,350.00</div>
        </div>
      </div>

      {/* Push notification overlay */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5, ease: "easeOut" }}
        className="absolute top-14 left-4 right-4 z-10"
      >
        <div className="bg-[hsl(20_6%_13%)] border border-divider rounded-2xl p-4 shadow-2xl backdrop-blur-xl">
          {/* Notification header */}
          <div className="flex items-center gap-2.5 mb-3">
            <div className="w-8 h-8 rounded-xl bg-primary flex items-center justify-center text-primary-foreground text-sm font-bold">M</div>
            <div className="flex-1">
              <div className="text-xs font-semibold text-foreground">Monzo Business</div>
              <div className="text-[10px] text-muted-foreground">now</div>
            </div>
          </div>
          
          <div className="text-sm font-semibold text-foreground mb-1.5">
            Payroll ready for review
          </div>
          <div className="text-xs text-secondary leading-relaxed mb-3">
            February payroll prepared for <strong className="text-foreground">25 employees</strong>.<br />
            £61,219 net to pay · £18,945 HMRC due Mar 22<br />
            <span className="text-primary font-medium">1 item needs your review.</span>
          </div>

          <button
            onClick={onNext}
            className="w-full text-xs font-semibold py-2 rounded-xl text-primary-foreground transition-all active:scale-[0.98]"
            style={{ background: "var(--gradient-accent)" }}
          >
            Review &amp; Approve →
          </button>
        </div>
      </motion.div>

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
