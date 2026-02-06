export default function Stars({ value }: { value: number }) {
  const full = Math.round(value); 

  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <span
          key={i}
          className={`text-lg ${i < full ? "text-yellow-500" : "text-gray-300"}`}
        >
          ★
        </span>
      ))}
      <span className="ml-2 text-sm text-gray-600">{value.toFixed(1)}</span>
    </div>
  );
}
