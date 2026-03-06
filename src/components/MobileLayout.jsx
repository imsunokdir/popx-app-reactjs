export default function MobileLayout({ children }) {
  return (
    <div
      className="min-h-screen flex items-center justify-center"
      style={{ backgroundColor: "var(--color-bg)" }}
    >
      <div
        className="mobile-frame flex flex-col overflow-hidden w-full"
        style={{ backgroundColor: "var(--color-surface)" }}
      >
        {children}
      </div>
    </div>
  );
}
