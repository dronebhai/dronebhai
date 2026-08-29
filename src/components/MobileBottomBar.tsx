export default function MobileBottomBar() {
  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 w-full z-50 h-16 border-t border-outline-variant/40 shadow-[0_-4px_20px_rgba(0,0,0,0.08)] bg-surface/95 backdrop-blur-md px-3 py-2 flex items-center gap-2">
      <a
        href="tel:8002800380"
        className="flex-1 h-full min-h-[44px] flex items-center justify-center gap-1.5 text-primary border border-primary/40 rounded-lg font-button text-xs font-bold active:scale-[0.98] transition-transform hover:bg-primary/5 shadow-xs"
      >
        <span className="material-symbols-outlined text-lg">call</span>
        <span>Call Now</span>
      </a>
      <a
        href="https://wa.me/918002800380"
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 h-full min-h-[44px] flex items-center justify-center gap-1.5 bg-primary text-on-primary rounded-lg font-button text-xs font-bold active:scale-[0.98] transition-transform hover:brightness-110 shadow-sm"
      >
        <span className="material-symbols-outlined text-lg">chat</span>
        <span>WhatsApp</span>
      </a>
    </nav>
  );
}

