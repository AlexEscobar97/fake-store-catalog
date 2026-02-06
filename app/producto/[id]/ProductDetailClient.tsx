"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Stars from "@/components/Stars";
import type { Product } from "@/lib/types";

const API_BASE = "https://fakestoreapi.com";

function DetailSkeleton() {
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
          </div>
        </div>
      </div>
    </main>
  );
}

async function fetchProductSafe(id: string): Promise<Product | null> {
  try {
    const res = await fetch(`${API_BASE}/products/${id}`, {
      cache: "no-store",
      headers: { Accept: "application/json" },
    });

    if (!res.ok) return null;


    const text = await res.text();
    if (!text.trim()) return null;

    return JSON.parse(text) as Product;
  } catch {
    return null;
  }
}

export default function ProductDetailClient({ id }: { id: string }) {
  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState<Product | null>(null);

  const load = async () => {
    setLoading(true);
    const p = await fetchProductSafe(id);
    setProduct(p);
    setLoading(false);
  };

  useEffect(() => {
    load();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  if (loading) return <DetailSkeleton />;

  if (!product) {
    return (
      <main className="bg-app min-h-screen">
        <div className="mx-auto max-w-3xl px-4 py-14">
          <div className="card p-6">
            <h1 className="text-2xl font-extrabold" style={{ color: "rgb(var(--brand))" }}>
              No se pudo cargar el producto
            </h1>

            <p className="mt-2 text-sm text-muted">
              El servicio de Fake Store no respondió correctamente (pasa a veces en producción).
              Probá reintentar.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/" className="btn btn-ghost">
                ← Volver al catálogo
              </Link>

              <button onClick={load} className="btn btn-primary">
                Reintentar
              </button>
            </div>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="bg-app min-h-screen">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <div className="mb-6 flex items-center justify-between gap-3">
          <Link
            href="/"
            className="btn btn-ghost"
            style={{ borderColor: "rgba(var(--accent), 0.25)" }}
          >
            <span aria-hidden>←</span> Volver
          </Link>

          <span className="chip">{product.category}</span>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <div className="card p-6 soft-ring">
            <div className="flex items-center justify-center rounded-2xl bg-white p-6">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={product.image}
                alt={product.title}
                className="max-h-[440px] w-full object-contain transition duration-300 hover:scale-[1.02]"
              />
            </div>

            <div className="mt-5 grid grid-cols-3 gap-3 text-center text-xs text-muted">
              <div className="rounded-xl border bg-white p-3" style={{ borderColor: "rgb(var(--border))" }}>
                <div className="font-extrabold" style={{ color: "rgb(var(--brand))" }}>
                  ${product.price.toFixed(2)}
                </div>
                <div>Precio</div>
              </div>

              <div className="rounded-xl border bg-white p-3" style={{ borderColor: "rgb(var(--border))" }}>
                <div className="font-extrabold" style={{ color: "rgb(var(--brand))" }}>
                  {(product.rating?.rate ?? 0).toFixed(1)}
                </div>
                <div>Rating</div>
              </div>

              <div className="rounded-xl border bg-white p-3" style={{ borderColor: "rgb(var(--border))" }}>
                <div className="font-extrabold" style={{ color: "rgb(var(--brand))" }}>
                  {product.rating?.count ?? 0}
                </div>
                <div>Reseñas</div>
              </div>
            </div>
          </div>

          <div className="space-y-5">
            <h1 className="text-2xl font-extrabold sm:text-3xl" style={{ color: "rgb(var(--brand))" }}>
              {product.title}
            </h1>

            <div className="card p-5">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <Stars value={product.rating?.rate ?? 0} />
                <div className="text-sm text-muted">{product.rating?.count ?? 0} reseñas</div>
              </div>

              <div className="mt-4 flex items-end justify-between gap-4">
                <div>
                  <div className="text-xs font-semibold text-muted">Precio</div>
                  <div className="text-3xl font-extrabold" style={{ color: "rgb(var(--accent))" }}>
                    ${product.price.toFixed(2)}
                  </div>
                </div>

                <button className="btn btn-primary">Agregar (demo)</button>
              </div>

              <div className="mt-5 h-px" style={{ backgroundColor: "rgb(var(--border))" }} />

              <p className="mt-5 text-sm leading-7 text-zinc-700">{product.description}</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
