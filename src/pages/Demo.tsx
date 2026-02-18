import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, Check, Bell, MessageSquare, LayoutList, Zap } from "lucide-react";
import { FeedScreen } from "@/components/demo/FeedScreen";
import { NotificationScreen } from "@/components/demo/NotificationScreen";
import { ApprovalScreen } from "@/components/demo/ApprovalScreen";
import { ProcessingScreen } from "@/components/demo/ProcessingScreen";
import { ConfirmationScreen } from "@/components/demo/ConfirmationScreen";
import { ChatScreen } from "@/components/demo/ChatScreen";

const STEPS = [
  {
    id: 1,
    label: "Banking feed",
    sublabel: "Normal day in the app",
    icon: LayoutList,
    description: "The business owner is going about their day inside their banking app — reviewing transactions, checking balance. Payroll isn't something they need to think about.",
  },
  {
    id: 2,
    label: "Notification arrives",
    sublabel: "Day –5 before payday",
    icon: Bell,
    description: "Five days before payday, a push notification arrives. No app switching. No logging into payroll software. One tap from here.",
  },
  {
    id: 3,
    label: "Review & approve",
    sublabel: "Bottom sheet opens",
    icon: Check,
    description: "A bottom sheet slides up inside the banking app. Full payroll summary, balance check, one exception surfaced. Everything needed to make the decision — in one place.",
  },
  {
    id: 4,
    label: "Payments execute",
    sublabel: "25 Faster Payments",
    icon: Zap,
    description: "25 Faster Payments fire simultaneously. FPS submitted to HMRC in real time. Pension contributions scheduled. 25 payslips emailed. All in seconds — not 3 BACS days.",
  },
  {
    id: 5,
    label: "Feed confirmation",
    sublabel: "Back to the timeline",
    icon: LayoutList,
    description: "The banking feed updates. A payroll card sits alongside normal transactions. Every salary payment is enriched — not a lump sum, but a named, itemised transaction.",
  },
  {
    id: 6,
    label: "Chat with the agent",
    sublabel: "Ask anything",
    icon: MessageSquare,
    description: "The agent is always available for questions. Because it lives inside the bank, it can answer questions no standalone payroll tool ever could — about cash flow, future costs, raises.",
  },
];

const SCREEN_COMPONENTS = [
  FeedScreen,
  NotificationScreen,
  ApprovalScreen,
  ProcessingScreen,
  ConfirmationScreen,
  ChatScreen,
];

export default function Demo() {
  const [currentStep, setCurrentStep] = useState(0);
  const [approved, setApproved] = useState(false);

  useEffect(() => {
    setApproved(false);
  }, [currentStep]);

  const step = STEPS[currentStep];
  const ScreenComponent = SCREEN_COMPONENTS[currentStep];
  const isFirst = currentStep === 0;
  const isLast = currentStep === STEPS.length - 1;

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      {/* Nav */}
      <nav className="border-b border-divider bg-background/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
          <Link
            to="/"
            className="flex items-center gap-2 text-xs text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            Back to concept
          </Link>
          <span className="font-display font-700 text-sm text-foreground">Interactive Demo</span>
          <div className="text-xs text-muted-foreground">
            {currentStep + 1} / {STEPS.length}
          </div>
        </div>
      </nav>

      {/* Step progress bar */}
      <div className="w-full h-px bg-divider">
        <motion.div
          className="h-full bg-primary"
          animate={{ width: `${((currentStep + 1) / STEPS.length) * 100}%` }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        />
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col lg:flex-row max-w-6xl mx-auto w-full px-6 py-10 gap-10">

        {/* Left: Step info + controls */}
        <div className="lg:w-80 flex-shrink-0 flex flex-col justify-between gap-8">
          <div>
            {/* Step nav */}
            <div className="space-y-1 mb-10">
              {STEPS.map((s, i) => {
                const Icon = s.icon;
                const isActive = i === currentStep;
                const isPast = i < currentStep;
                return (
                  <button
                    key={s.id}
                    onClick={() => setCurrentStep(i)}
                    className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-left transition-all ${
                      isActive
                        ? "bg-surface-raised border border-primary/30"
                        : isPast
                        ? "opacity-60 hover:opacity-80"
                        : "opacity-40 hover:opacity-60"
                    }`}
                  >
                    <div
                      className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 text-xs ${
                        isPast
                          ? "bg-primary/20 text-primary"
                          : isActive
                          ? "bg-primary text-primary-foreground"
                          : "bg-surface border border-divider text-muted-foreground"
                      }`}
                    >
                      {isPast ? <Check className="w-3 h-3" /> : <Icon className="w-3 h-3" />}
                    </div>
                    <div>
                      <div className={`text-xs font-semibold ${isActive ? "text-foreground" : "text-secondary"}`}>
                        {s.label}
                      </div>
                      <div className="text-xs text-muted-foreground">{s.sublabel}</div>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Description */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentStep}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25 }}
              >
                <div className="text-xs font-display font-600 text-primary uppercase tracking-widest mb-2">
                  Step {currentStep + 1}
                </div>
                <h2 className="font-display font-700 text-xl text-foreground mb-3">{step.label}</h2>
                <p className="text-sm text-secondary leading-relaxed">{step.description}</p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Prev / Next */}
          <div className="flex gap-3">
            <button
              onClick={() => setCurrentStep((s) => Math.max(0, s - 1))}
              disabled={isFirst}
              className="flex-1 flex items-center justify-center gap-2 text-sm font-medium border border-divider rounded-lg py-2.5 text-secondary hover:text-foreground hover:border-secondary disabled:opacity-30 disabled:cursor-not-allowed transition-all"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              Previous
            </button>
            <button
              onClick={() => setCurrentStep((s) => Math.min(STEPS.length - 1, s + 1))}
              disabled={isLast}
              className="flex-1 flex items-center justify-center gap-2 text-sm font-semibold rounded-lg py-2.5 text-primary-foreground disabled:opacity-30 disabled:cursor-not-allowed transition-all"
              style={{ background: isLast ? undefined : "var(--gradient-accent)" }}
            >
              Next
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Right: Phone mockup */}
        <div className="flex-1 flex items-center justify-center">
          <PhoneMockup>
            <AnimatePresence mode="wait">
              <motion.div
                key={currentStep}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="h-full"
              >
                <ScreenComponent
                  onApprove={() => {
                    setApproved(true);
                    setTimeout(() => setCurrentStep(3), 400);
                  }}
                  approved={approved}
                  onNext={() => setCurrentStep((s) => Math.min(STEPS.length - 1, s + 1))}
                />
              </motion.div>
            </AnimatePresence>
          </PhoneMockup>
        </div>
      </div>
    </div>
  );
}

function PhoneMockup({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative w-[340px] h-[680px] flex-shrink-0">
      {/* Phone frame */}
      <div className="absolute inset-0 rounded-[42px] border-2 border-divider bg-surface shadow-2xl overflow-hidden">
        {/* Status bar */}
        <div className="flex items-center justify-between px-6 pt-3 pb-2 bg-[hsl(20_6%_9%)]">
          <span className="text-[10px] text-foreground font-semibold">9:41</span>
          <div className="w-20 h-5 bg-background rounded-full mx-auto absolute left-1/2 -translate-x-1/2 top-2" />
          <div className="flex items-center gap-1">
            <div className="w-3 h-2 border border-foreground/60 rounded-sm">
              <div className="w-2 h-full bg-foreground/60 rounded-[1px]" />
            </div>
          </div>
        </div>
        {/* Screen content */}
        <div className="absolute inset-0 top-10 overflow-hidden">
          {children}
        </div>
      </div>
      {/* Side buttons */}
      <div className="absolute right-[-3px] top-24 w-1 h-14 bg-divider rounded-l-sm" />
      <div className="absolute left-[-3px] top-20 w-1 h-10 bg-divider rounded-r-sm" />
      <div className="absolute left-[-3px] top-32 w-1 h-10 bg-divider rounded-r-sm" />
    </div>
  );
}
