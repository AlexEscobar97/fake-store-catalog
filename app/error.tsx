"use client";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main className="bg-app min-h-screen">
      <div className="mx-auto max-w-3xl px-4 py-10">
        <div className="card p-6">
          <div className="mb-3 inline-flex items-center gap-2">
            <span
              className="inline-flex h-10 w-10 items-center justify-center rounded-xl text-white"
              style={{ backgroundColor: "rgb(var(--brand))" }}
            >
              !
            </span>
            <div>
              <h2 className="text-lg font-extrabold" style={{ color: "rgb(var(--brand))" }}>
                Ocurrió un error
              </h2>
              <p className="text-sm text-muted">Intentá recargar la sección.</p>
            </div>
          </div>

          <p className="mt-3 rounded-xl border bg-white p-3 text-sm text-zinc-700"
             style={{ borderColor: "rgb(var(--border))" }}>
            {error.message || "No se pudo cargar la información."}
          </p>

        </div>
      </div>
    </main>
  );
}
