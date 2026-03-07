export default function AnimatedBackground() {
  return (
    <div className="absolute top-0 bottom-0 left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] z-0 pointer-events-none overflow-hidden">
      <div className="absolute inset-0 grid-bg-overlay animate-grid-slow group-hover:animate-grid-fast"></div>
    </div>
  );
}