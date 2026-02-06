import { Product } from "./types";

const API_BASE = "https://fakestoreapi.com";

async function fetchJson<T>(url: string, timeoutMs = 10000): Promise<T> {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), timeoutMs);

  try {
    const res = await fetch(url, {
      cache: "no-store",
      next: { revalidate: 0 },
      headers: { accept: "application/json" },
      signal: controller.signal,
    });

    const text = await res.text();

    if (!res.ok) {
      if (res.status === 404) {
        throw new Error("NOT_FOUND");
      }

      throw new Error(
        `HTTP_${res.status}: ${text ? text.slice(0, 200) : "RESPUESTA_VACIA"}`
      );
    }

    if (!text) {
      throw new Error("RESPUESTA_VACIA");
    }

    try {
      return JSON.parse(text) as T;
    } catch {
      throw new Error("JSON_INVALIDO");
    }
  } finally {
    clearTimeout(timeout);
  }
}

export async function getProducts(): Promise<Product[]> {
  try {
    return await fetchJson<Product[]>(`${API_BASE}/products`);
  } catch (e) {
    console.error("[getProducts] Error:", e);
    return [];
  }
}

export async function getCategories(): Promise<string[]> {
  try {
    return await fetchJson<string[]>(`${API_BASE}/products/categories`);
  } catch (e) {
    console.error("[getCategories] Error:", e);
    return [];
  }
}

/**
 * Devuelve:
 * - Product si existe
 * - null si NO existe (404 real)
 * - throws si es error de red/parse (para mostrar pantalla de error, no 404)
 */
export async function getProductByIdStrict(id: string): Promise<Product | null> {
  try {
    return await fetchJson<Product>(`${API_BASE}/products/${encodeURIComponent(id)}`);
  } catch (e: any) {
    if (e?.message === "NOT_FOUND") return null;
    throw e; // error real (red / vacío / json inválido)
  }
}
