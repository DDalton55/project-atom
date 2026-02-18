import { motion } from "framer-motion";
import { FadeIn } from "@/components/FadeIn";
import { ComparisonTable } from "@/components/ComparisonTable";
import { NotificationCard } from "@/components/PayrollCards";
import { ChatDemo } from "@/components/ChatDemo";
import { IntegrationTiers } from "@/components/IntegrationTiers";

const AGENT_HANDLES = [
  "HMRC registration & RTI submissions (FPS, EPS)",
  "Tax code changes — received from HMRC, applied automatically",
  "Pension auto-enrolment and contribution calculations",
  "NI calculations (employee and employer)",
  "Statutory payments (SSP, SMP, SPP)",
  "Payslip generation and distribution",
  "Year-end processes (P60, P11D)",
  "Legislative threshold monitoring (NMW/NLW)",
  "New starter and leaver processing",
  "Holiday pay calculations",
];

const PITCHES = [
  {
    audience: "For the host app",
    text: "Embedded agentic payroll turns your business account into the only tool SMEs need to pay their people — compliant, automated, and impossible to switch away from.",
  },
  {
    audience: "For the business owner",
    text: "Your bank runs payroll for you. Review a summary, tap approve, everyone's paid. Two minutes a month.",
  },
  {
    audience: "For the employee",
    text: "Your salary arrives with a full payslip attached. No portals. No PDFs. Just your money, explained.",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Nav */}
      <nav className="fixed top-0 inset-x-0 z-50 border-b border-divider bg-background/80 backdrop-blur-md">
        <div className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
          <span className="font-display font-800 text-sm tracking-tight text-foreground">
            Embedded Agentic Payroll
          </span>
          <a
            href="#pitch"
            className="text-xs font-medium text-muted-foreground hover:text-primary transition-colors"
          >
            The Pitch →
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative pt-36 pb-28 px-6 overflow-hidden">
        {/* Background glow */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] pointer-events-none"
          style={{
            background: "radial-gradient(ellipse at center, hsl(18 80% 54% / 0.08) 0%, transparent 70%)",
          }}
        />

        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 border border-primary/30 rounded-full px-3 py-1 text-xs text-primary font-medium mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              Product Concept
            </div>

            <h1 className="font-display text-display-xl font-800 text-foreground mb-6 max-w-3xl">
              What happens when payroll{" "}
              <span className="text-gradient">lives inside the bank</span>
              , not beside it
            </h1>

            <p className="text-lg text-secondary leading-relaxed max-w-2xl mb-8">
              Traditional embedded payroll embeds screens. Agentic embedded payroll embeds intelligence. The agent works through the host app's existing surfaces — notifications, feed items, chat. The host provides the surface. The agent provides the brain.
            </p>

            <div className="flex items-center gap-6 text-sm">
              <a
                href="#how-it-works"
                className="font-medium text-foreground hover:text-primary transition-colors"
              >
                See how it works →
              </a>
              <a
                href="#comparison"
                className="text-muted-foreground hover:text-secondary transition-colors"
              >
                Compare approaches
              </a>
            </div>
          </motion.div>

          {/* Hero stat strip */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-16 pt-8 border-t border-divider grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {[
              { value: "90s", label: "Payroll in 90 seconds" },
              { value: "1 tap", label: "Single approval action" },
              { value: "Same day", label: "Faster Payments, not BACS" },
              { value: "70%", label: "UK SMEs using manual payroll" },
            ].map((stat, i) => (
              <div key={i}>
                <div className="font-display font-800 text-2xl text-gradient mb-1">{stat.value}</div>
                <div className="text-xs text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Comparison */}
      <section id="comparison" className="py-20 px-6 border-t border-divider">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <div className="mb-10">
              <div className="text-xs font-display font-600 text-primary uppercase tracking-widest mb-3">02 / Comparison</div>
              <h2 className="font-display text-display-md font-700 text-foreground">
                A feature vs. a capability
              </h2>
              <p className="text-secondary mt-3 max-w-xl">
                Traditional embedded payroll gives the host app a feature. Agentic embedded payroll gives the host app a capability.
              </p>
            </div>
          </FadeIn>
          <div className="bg-surface rounded-xl border border-divider overflow-hidden">
            <ComparisonTable />
          </div>
        </div>
      </section>

      {/* UX Flow */}
      <section id="how-it-works" className="py-20 px-6 border-t border-divider">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <div className="mb-12">
              <div className="text-xs font-display font-600 text-primary uppercase tracking-widest mb-3">03 / User Experience</div>
              <h2 className="font-display text-display-md font-700 text-foreground max-w-lg">
                One push notification. One bottom sheet. One button.
              </h2>
              <p className="text-secondary mt-3 max-w-xl">
                The business owner never opens "payroll software." Payroll is a thing that happens in your bank — not a place you go.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
            <div className="space-y-3">
              <FadeIn>
                <div className="text-xs font-display font-600 text-muted-foreground uppercase tracking-wider mb-4">
                  Day −5 · Notification
                </div>
              </FadeIn>
              <NotificationCard type="push" />
              <FadeIn delay={0.2}>
                <p className="text-xs text-muted-foreground leading-relaxed pt-2">
                  Push notification arrives. Tap opens the approval flow directly inside the banking app — no navigation, no separate app.
                </p>
              </FadeIn>
            </div>

            <div className="space-y-3">
              <FadeIn>
                <div className="text-xs font-display font-600 text-muted-foreground uppercase tracking-wider mb-4">
                  Payday · Approval sheet
                </div>
              </FadeIn>
              <NotificationCard type="approval" />
              <FadeIn delay={0.25}>
                <p className="text-xs text-muted-foreground leading-relaxed pt-2">
                  Full payroll summary with balance check. One exception surfaced. One button to approve and pay — 25 Faster Payments execute instantly.
                </p>
              </FadeIn>
            </div>

            <div className="space-y-3">
              <FadeIn>
                <div className="text-xs font-display font-600 text-muted-foreground uppercase tracking-wider mb-4">
                  After · Feed card
                </div>
              </FadeIn>
              <NotificationCard type="complete" />
              <FadeIn delay={0.3}>
                <p className="text-xs text-muted-foreground leading-relaxed pt-2">
                  Confirmation card sits in the banking feed alongside transactions. Payroll is just another financial event, not a separate application.
                </p>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Conversational Demo */}
      <section className="py-20 px-6 border-t border-divider">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <FadeIn>
              <div>
                <div className="text-xs font-display font-600 text-primary uppercase tracking-widest mb-3">04 / Conversational Intelligence</div>
                <h2 className="font-display text-display-md font-700 text-foreground mb-4">
                  The agent lives inside the bank
                </h2>
                <p className="text-secondary leading-relaxed mb-6">
                  This conversation is only possible because the agent has access to the business's full financial picture. A standalone payroll product can't see supplier payments or revenue patterns. This is the structural advantage of embedded.
                </p>
                <ul className="space-y-2 text-sm text-secondary">
                  {["Ask about cash flow", "Request salary changes", "Get compliance alerts", "Review upcoming costs"].map((item, i) => (
                    <li key={i} className="flex items-center gap-2.5">
                      <span className="text-primary text-xs">→</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
            <div className="bg-surface rounded-xl border border-divider p-6">
              <ChatDemo />
            </div>
          </div>
        </div>
      </section>

      {/* Agent Capabilities */}
      <section className="py-20 px-6 border-t border-divider">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <div className="mb-10">
              <div className="text-xs font-display font-600 text-primary uppercase tracking-widest mb-3">05 / Autonomous Capabilities</div>
              <h2 className="font-display text-display-md font-700 text-foreground">
                What the agent handles on its own
              </h2>
              <p className="text-secondary mt-3 max-w-xl">
                The agent handles 95% autonomously, surfaces the 5% for human review. The business owner always has final sign-off.
              </p>
            </div>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {AGENT_HANDLES.map((item, i) => (
              <FadeIn key={i} delay={i * 0.04}>
                <div className="flex items-start gap-3 p-4 rounded-lg border border-divider bg-surface hover:border-primary/30 transition-colors group">
                  <span className="text-primary text-sm flex-shrink-0 group-hover:scale-110 transition-transform">→</span>
                  <span className="text-sm text-secondary leading-snug">{item}</span>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Tiers */}
      <section className="py-20 px-6 border-t border-divider">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <div className="mb-10">
              <div className="text-xs font-display font-600 text-primary uppercase tracking-widest mb-3">06 / Platform Architecture</div>
              <h2 className="font-display text-display-md font-700 text-foreground">
                Three integration tiers
              </h2>
              <p className="text-secondary mt-3 max-w-xl">
                Not every host app has the same capabilities. The embedded payroll agent adapts — from deep banking integration to lightweight chat-only deployment.
              </p>
            </div>
          </FadeIn>
          <IntegrationTiers />
        </div>
      </section>

      {/* Defensibility */}
      <section className="py-20 px-6 border-t border-divider">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <div className="mb-10">
              <div className="text-xs font-display font-600 text-primary uppercase tracking-widest mb-3">07 / Defensibility</div>
              <h2 className="font-display text-display-md font-700 text-foreground">
                What makes this impossible to copy
              </h2>
            </div>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              {
                title: "The Data Flywheel",
                body: "A standalone payroll product only sees payroll data. An embedded agent inside the bank sees everything financial. Over time, this context makes the agent's advice impossible to replicate outside the banking context.",
              },
              {
                title: "The Switching Cost",
                body: "Once payroll runs through your bank, switching payroll means potentially switching banks. Every employee's salary is linked. HMRC Direct Debits are set up. Historical data lives alongside financial data.",
              },
              {
                title: "The Network Effect",
                body: "If employees also bank with the host, their salary arrives with a full payslip in the transaction feed. More personal accounts = more data. A B2B2C network effect that's very hard to unwind.",
              },
            ].map((card, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="p-6 rounded-xl border border-divider bg-surface h-full">
                  <h3 className="font-display font-700 text-foreground mb-3">{card.title}</h3>
                  <p className="text-sm text-secondary leading-relaxed">{card.body}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Three-Sentence Pitch */}
      <section id="pitch" className="py-24 px-6 border-t border-divider">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <div className="mb-12">
              <div className="text-xs font-display font-600 text-primary uppercase tracking-widest mb-3">08 / The Pitch</div>
              <h2 className="font-display text-display-md font-700 text-foreground">
                Three sentences. Three audiences.
              </h2>
            </div>
          </FadeIn>
          <div className="space-y-4">
            {PITCHES.map((pitch, i) => (
              <FadeIn key={i} delay={i * 0.12}>
                <div className={`p-6 rounded-xl border flex flex-col md:flex-row gap-4 ${i === 0 ? "border-primary/30 bg-surface accent-glow" : "border-divider bg-surface"}`}>
                  <div className="md:w-40 flex-shrink-0">
                    <span className="text-xs font-display font-600 text-muted-foreground uppercase tracking-wide">{pitch.audience}</span>
                  </div>
                  <p className={`text-base leading-relaxed ${i === 0 ? "text-foreground font-medium" : "text-secondary"}`}>
                    "{pitch.text}"
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Closing line */}
      <section className="py-24 px-6 border-t border-divider">
        <div className="max-w-5xl mx-auto text-center">
          <FadeIn>
            <p className="font-display text-display-md font-700 text-foreground max-w-3xl mx-auto leading-tight">
              "Your customer did payroll in{" "}
              <span className="text-gradient">90 seconds</span>{" "}
              without leaving their bank account. That's not a feature —{" "}
              <span className="text-gradient">that's a reason to never leave.</span>"
            </p>
            <p className="text-muted-foreground text-sm mt-6">Embedded Agentic Payroll · Product Concept</p>
          </FadeIn>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-divider py-8 px-6">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <span className="font-display font-700 text-sm text-foreground">Embedded Agentic Payroll</span>
          <span className="text-xs text-muted-foreground">Product Concept Document</span>
        </div>
      </footer>
    </div>
  );
};

export default Index;
