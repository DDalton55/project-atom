const NAV_ITEMS = ["Home", "Pay", "Cards", "More"];

export function PhoneBottomNav() {
  return (
    <div className="border-t border-divider px-6 py-3 flex justify-around">
      {NAV_ITEMS.map((item, i) => (
        <div key={i} className={`text-[10px] flex flex-col items-center gap-1 ${i === 0 ? "text-primary" : "text-muted-foreground"}`}>
          <div className={`w-1 h-1 rounded-full ${i === 0 ? "bg-primary" : "bg-transparent"}`} />
          {item}
        </div>
      ))}
    </div>
  );
}
