export default function LoadingDetail() {
  return (
    <main className="bg-app min-h-screen">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <div className="mb-6 h-10 w-28 animate-pulse rounded-xl bg-white/70" />

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <div className="card p-6">
            <div className="h-[440px] animate-pulse rounded-2xl bg-white/70" />
            <div className="mt-5 grid grid-cols-3 gap-3">
              <div className="h-16 animate-pulse rounded-xl bg-white/70" />
              <div className="h-16 animate-pulse rounded-xl bg-white/70" />
              <div className="h-16 animate-pulse rounded-xl bg-white/70" />
            </div>
          </div>

          <div className="space-y-4">
            <div className="h-10 w-3/4 animate-pulse rounded bg-white/70" />
            <div className="card p-5">
              <div className="h-6 w-40 animate-pulse rounded bg-white/70" />
              <div className="mt-4 h-10 w-48 animate-pulse rounded bg-white/70" />
              <div className="mt-4 h-32 w-full animate-pulse rounded bg-white/70" />
            </div>
            <div className="card p-5">
              <div className="h-6 w-32 animate-pulse rounded bg-white/70" />
              <div className="mt-3 h-12 w-full animate-pulse rounded bg-white/70" />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
