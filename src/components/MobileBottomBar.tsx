export default function MobileBottomBar() {
  return (
    <nav className="md:hidden fixed bottom-0 w-full z-50 h-[72px] border-t border-outline-variant/50 shadow-[0_-4px_12px_rgba(0,0,0,0.05)] bg-surface flex p-2 gap-2">
      <a
        href="tel:8002800380"
        className="flex-1 flex items-center justify-center gap-2 text-primary border-2 border-primary rounded-lg m-2 font-button text-button active:scale-[0.98] transition-transform hover:bg-surface-container-low"
      >
        <span className="material-symbols-outlined">call</span>
        Call Now
      </a>
      <a
        href="https://wa.me/918002800380"
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 flex items-center justify-center gap-2 bg-primary text-on-primary h-full font-button text-button rounded-lg m-2 active:scale-[0.98] transition-transform hover:brightness-110 shadow-[0_4px_14px_rgba(0,150,136,0.3)]"
      >
        <span className="material-symbols-outlined">chat</span>
        WhatsApp Support
      </a>
    </nav>
  );
}
