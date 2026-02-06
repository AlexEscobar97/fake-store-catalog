"use client";

import { useMemo, useState } from "react";
import { Product } from "../lib/types";
import ProductCard from "./ProductCard";

export default function CatalogClient({
  products,
  categories,
}: {
  products: Product[];
  categories: string[];
}) {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");

  const filtered = useMemo(() => {
    const text = search.trim().toLowerCase();
    return products.filter((p) => {
      const okCategory = category === "all" ? true : p.category === category;
      const okSearch = text ? p.title.toLowerCase().includes(text) : true;
      return okCategory && okSearch;
    });
  }, [products, search, category]);

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
          <span className="text-sm font-medium text-gray-700">Categoría</span>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full rounded-xl border px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-gray-300 sm:w-64"
          >
            <option value="all">Todas</option>
            {categories.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </div>

        <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
          <span className="text-sm font-medium text-gray-700">Buscar</span>
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Buscar por nombre..."
            className="w-full rounded-xl border px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-gray-300 sm:w-80"
          />
        </div>
      </div>

      {filtered.length === 0 ? (
        <div className="rounded-2xl border bg-white p-6 text-center text-sm text-gray-600">
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
