"use client";

import { useEffect, useMemo, useState } from "react";
import { Product } from "../lib/types";
import ProductCard from "./ProductCard";

const BASE_URL = "https://fakestoreapi.com";

export default function CatalogClient({
  products,
  categories,
}: {
  products: Product[];
  categories: string[];
}) {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");

  // Estado “real” usado por la UI
  const [clientProducts, setClientProducts] = useState<Product[]>(products);
  const [clientCategories, setClientCategories] = useState<string[]>(categories);

  // Si SSR vino vacío (caso Vercel), cargamos desde el navegador
  useEffect(() => {
    if (products.length === 0) {
      Promise.all([
        fetch(`${BASE_URL}/products`).then((r) => (r.ok ? r.json() : [])),
        fetch(`${BASE_URL}/products/categories`).then((r) => (r.ok ? r.json() : [])),
      ])
        .then(([p, c]) => {
          setClientProducts(p);
          setClientCategories(c);
        })
        .catch((e) => console.error("Client fallback fetch failed:", e));
    }
  }, [products.length]);

  const filtered = useMemo(() => {
    const text = search.trim().toLowerCase();
    return clientProducts.filter((p) => {
      const okCategory = category === "all" ? true : p.category === category;
      const okSearch = text ? p.title.toLowerCase().includes(text) : true;
      return okCategory && okSearch;
    });
  }, [clientProducts, search, category]);

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
          <label className="text-sm font-semibold" style={{ color: "rgb(var(--brand))" }}>
            Categoría
          </label>

          <select
            className="input max-w-sm"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="all">Todas</option>
            {clientCategories.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </div>

        <div className="flex items-center gap-3">
          <span className="text-sm font-semibold" style={{ color: "rgb(var(--brand))" }}>
            Buscar
          </span>

          <input
            className="input w-full sm:w-96"
            placeholder="Buscar por nombre..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      {filtered.length === 0 ? (
        <div className="rounded-2xl border bg-white p-6 text-center text-sm text-zinc-700"
             style={{ borderColor: "rgb(var(--border))" }}>
          No hay productos con esos filtros.
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filtered.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      )}
    </div>
  );
}
