import CatalogClient from "./components/CatalogClient";
import { getCategories, getProducts } from "./lib/api";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  const [products, categories] = await Promise.all([
    getProducts().catch(() => []),
    getCategories().catch(() => []),
  ]);

  return (
    <main className="bg-app min-h-screen">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <header className="mb-8">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border bg-white px-3 py-1 text-xs font-semibold text-zinc-700">
            <span
              className="inline-block h-2 w-2 rounded-full"
              style={{ backgroundColor: "rgb(var(--accent))" }}
            />
            Fake Store • Next.js • TS • Tailwind
          </div>

          <h1 className="section-title" style={{ color: "rgb(var(--brand))" }}>
            Catálogo de Productos
          </h1>

          <p className="mt-2 text-sm text-muted">
            Búsqueda + filtro por categoría, cards responsivas y detalle del producto.
          </p>

          <div
            className="mt-5 h-1 w-32 rounded-full"
            style={{
              background:
                "linear-gradient(90deg, rgb(var(--accent)), rgb(var(--brand)))",
            }}
          />
        </header>

        <CatalogClient
          products={products}
          categories={categories}
        />
      </div>
    </main>
  );
}
