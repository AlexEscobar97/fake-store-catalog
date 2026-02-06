import SkeletonCard from "./components/SkeletonCard";

export default function LoadingHome() {
  return (
    <main className="bg-app min-h-screen">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <div className="mb-8 space-y-3">
          <div className="h-6 w-52 animate-pulse rounded bg-white/70" />
          <div className="h-10 w-80 animate-pulse rounded bg-white/70" />
          <div className="h-4 w-96 animate-pulse rounded bg-white/70" />
          <div className="h-1 w-32 rounded-full"
               style={{ background: "linear-gradient(90deg, rgba(var(--accent),0.45), rgba(var(--brand),0.45))" }} />
        </div>

        <div className="mb-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
          <div className="h-11 animate-pulse rounded-xl bg-white/70" />
          <div className="h-11 animate-pulse rounded-xl bg-white/70" />
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {Array.from({ length: 8 }).map((_, i) => (
            <SkeletonCard key={i} />
          ))}
        </div>
      </div>
    </main>
  );
}
