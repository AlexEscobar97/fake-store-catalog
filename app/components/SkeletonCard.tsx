export default function SkeletonCard() {
  return (
    <div className="animate-pulse rounded-2xl border bg-white p-4 shadow-sm">
      <div className="h-48 rounded-xl bg-gray-200" />
      <div className="mt-4 space-y-3">
        <div className="h-3 w-24 rounded bg-gray-200" />
        <div className="h-4 w-full rounded bg-gray-200" />
        <div className="h-4 w-4/5 rounded bg-gray-200" />
        <div className="h-5 w-20 rounded bg-gray-200" />
      </div>
    </div>
  );
}
