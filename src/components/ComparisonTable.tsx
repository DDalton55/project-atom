import { FadeIn } from "./FadeIn";

const COMPARISON = [
  { label: "What's embedded", traditional: "UI components — forms, tables, dashboards", agentic: "An autonomous agent with decision-making capability" },
  { label: "Host app role", traditional: "Shell / container for payroll screens", agentic: "Provides data context, interaction surfaces, payment rails" },
  { label: "User experience", traditional: '"Payroll tab inside my bank"', agentic: '"My bank runs payroll for me"' },
  { label: "Setup", traditional: "Multi-step onboarding wizard", agentic: "Agent ingests bank data, asks 3–4 questions" },
  { label: "Monthly interaction", traditional: "Open payroll section, review, configure, submit", agentic: "Receive notification, review summary, tap approve" },
  { label: "Payment execution", traditional: "BACS file → sent to bank → 3 day wait", agentic: "Direct from business account → Faster Payments → same day" },
  { label: "Cash flow awareness", traditional: "None — payroll calculated in isolation", agentic: "Agent sees balance, incoming payments, warns on shortfalls" },
  { label: "Error handling", traditional: "User investigates, navigates forms, fixes data", agentic: "Agent identifies, explains, proposes fix, executes on approval" },
];

export function ComparisonTable() {
  return (
    <FadeIn>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr>
              <th className="py-4 px-5 text-left font-display font-600 text-muted-foreground text-xs uppercase tracking-widest border-b border-divider w-[220px]"></th>
              <th className="py-4 px-5 text-left font-display font-600 text-muted-foreground text-xs uppercase tracking-widest border-b border-divider">
                Traditional Embedded Payroll
              </th>
              <th className="py-4 px-5 text-left text-xs uppercase tracking-widest border-b border-divider">
                <span className="font-display font-700 text-gradient">Agentic Embedded Payroll</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {COMPARISON.map((row, i) => (
              <tr key={i} className="group border-b border-divider last:border-0">
                <td className="py-4 px-5 text-muted-foreground font-medium text-xs uppercase tracking-wide align-top whitespace-nowrap">
                  {row.label}
                </td>
                <td className="py-4 px-5 text-secondary leading-relaxed align-top">
                  {row.traditional}
                </td>
                <td className="py-4 px-5 text-foreground leading-relaxed align-top font-medium">
                  {row.agentic}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </FadeIn>
  );
}
