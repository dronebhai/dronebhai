export default function MobileBottomBar() {
  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 w-full z-50 border-t border-outline-variant/30 shadow-[0_-8px_30px_rgba(0,0,0,0.12)] bg-surface/95 backdrop-blur-lg px-3.5 py-2.5 pb-[max(0.625rem,env(safe-area-inset-bottom))] flex items-center gap-3">
      <a
        href="tel:8002800380"
        className="flex-1 h-11 min-h-[44px] flex items-center justify-center gap-2 text-primary bg-primary/10 border border-primary/25 rounded-xl font-button text-xs uppercase font-bold active:scale-[0.97] transition-all hover:bg-primary/15"
      >
        <span className="material-symbols-outlined text-lg">call</span>
        <span>Call Now</span>
      </a>
      <a
        href="https://wa.me/918002800380?text=Hi%20Dronebhai,%20I%20want%20to%20inquire%20about%20drone%20sales/service"
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 h-11 min-h-[44px] flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-xl font-button text-xs uppercase font-bold active:scale-[0.97] transition-all shadow-sm"
      >
        <span className="material-symbols-outlined text-lg">chat</span>
        <span>WhatsApp</span>
      </a>
    </nav>
  );
}

