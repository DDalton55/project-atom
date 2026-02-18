import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import type { ScreenProps } from "./types";

type Message = {
  from: "owner" | "agent";
  text: string;
  actions?: string[];
};

const INITIAL_MESSAGES: Message[] = [
  {
    from: "agent",
    text: "February payroll complete. 25 employees paid. Anything you'd like to review?",
  },
];

const PROMPTS = [
  { label: "Can I afford a raise?", query: "Can I give Tom a raise to £41,000?" },
  { label: "Cash flow check", query: "Can I afford payroll next month?" },
  { label: "Compliance check", query: "Any compliance issues I should know about?" },
];

const RESPONSES: Record<string, Message[]> = {
  "Can I give Tom a raise to £41,000?": [
    {
      from: "agent",
      text: "Tom Parker's salary will increase from £38,000 to £41,000 from March.\n\nMonthly take-home: £2,501 → £2,688 (+£187)\nYour monthly cost increases by £271 (salary + employer NI + pension).",
      actions: ["Confirm from March", "Adjust"],
    },
  ],
  "Can I afford payroll next month?": [
    {
      from: "agent",
      text: "Your March payroll will be ~£98k. Current balance: £44,456.\n\nExpected income before payroll: £85,000 (based on your average monthly revenue).\n\nYou're fine, but tighter than usual. Want me to alert you if balance drops below £50,000?",
      actions: ["Set up alert", "No thanks"],
    },
  ],
  "Any compliance issues I should know about?": [
    {
      from: "agent",
      text: "One item flagged:\n\nLily Zhang turns 22 on March 3. The National Living Wage increases, and her salary of £24,000 will be £1,396 below the legal minimum.\n\nRecommended: increase to £25,396 from March. Monthly cost impact: +£116.",
      actions: ["Fix it now", "Remind me later"],
    },
  ],
};

export function ChatScreen(_props: ScreenProps) {
  const [messages, setMessages] = useState<Message[]>(INITIAL_MESSAGES);
  const [used, setUsed] = useState<string[]>([]);
  const pendingTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (pendingTimeout.current) clearTimeout(pendingTimeout.current);
    };
  }, []);

  const sendMessage = (query: string) => {
    if (used.includes(query)) return;
    setUsed((u) => [...u, query]);
    const userMsg: Message = { from: "owner", text: query };
    setMessages((m) => [...m, userMsg]);
    pendingTimeout.current = setTimeout(() => {
      const responses = RESPONSES[query] || [];
      setMessages((m) => [...m, ...responses]);
      pendingTimeout.current = null;
    }, 600);
  };

  return (
    <div className="flex flex-col h-full bg-[hsl(20_8%_6%)] font-sans">
      {/* Header */}
      <div className="px-4 py-3 border-b border-divider bg-surface">
        <div className="flex items-center gap-2.5">
          <div className="w-7 h-7 rounded-full bg-primary flex items-center justify-center text-primary-foreground text-xs font-bold flex-shrink-0">A</div>
          <div>
            <div className="text-xs font-semibold text-foreground">Payroll Agent</div>
            <div className="flex items-center gap-1">
              <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              <span className="text-[10px] text-muted-foreground">Active</span>
            </div>
          </div>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto px-4 py-3 space-y-3">
        {messages.map((msg, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className={`flex ${msg.from === "owner" ? "justify-end" : "justify-start"}`}
          >
            <div className="max-w-[85%] space-y-1.5">
              <div
                className={`rounded-2xl px-3 py-2 text-xs leading-relaxed whitespace-pre-line ${
                  msg.from === "owner"
                    ? "bg-primary/15 border border-primary/25 text-foreground rounded-tr-sm"
                    : "bg-surface-raised border border-divider text-secondary rounded-tl-sm"
                }`}
              >
                {msg.text}
              </div>
              {msg.actions && (
                <div className="flex gap-1.5 flex-wrap">
                  {msg.actions.map((action, j) => (
                    <button
                      type="button"
                      key={j}
                      className={`text-[10px] px-2.5 py-1 rounded-full border transition-colors ${
                        j === 0
                          ? "border-primary/40 text-primary hover:bg-primary/10"
                          : "border-divider text-muted-foreground"
                      }`}
                    >
                      {action}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Prompt suggestions */}
      <div className="px-4 pb-2 pt-1 border-t border-divider">
        <div className="text-[10px] text-muted-foreground mb-1.5">Try asking:</div>
        <div className="flex flex-col gap-1.5">
          {PROMPTS.filter((p) => !used.includes(p.query)).slice(0, 2).map((prompt, i) => (
            <button
              type="button"
              key={i}
              onClick={() => sendMessage(prompt.query)}
              className="text-left text-[11px] text-secondary border border-divider rounded-xl px-3 py-2 hover:border-primary/30 hover:text-foreground transition-all"
            >
              {prompt.query}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
