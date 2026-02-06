// app/lib/api.ts
import type { Product } from "./types";

const API_BASE = "https://fakestoreapi.com";

async function fetchJsonSafe<T>(url: string, timeoutMs = 12000): Promise<T | null> {
  const controller = new AbortController();
  const t = setTimeout(() => controller.abort(), timeoutMs);

  try {
    const res = await fetch(url, {
      cache: "no-store",
      headers: {
        Accept: "application/json",
      },
      signal: controller.signal,
    });

    // Si FakeStore responde 429/500/404 etc
    if (!res.ok) return null;

    const contentType = res.headers.get("content-type") || "";
    const text = await res.text();

    if (!text.trim()) return null;

    if (!contentType.includes("application/json")) return null;

    try {
      return JSON.parse(text) as T;
    } catch {
      return null;
    }
  } catch {
    return null;
  } finally {
    clearTimeout(t);
  }
}

export async function getProducts(): Promise<Product[]> {
  const data = await fetchJsonSafe<Product[]>(`${API_BASE}/products`);
  return data ?? [];
}

export async function getCategories(): Promise<string[]> {
  const data = await fetchJsonSafe<string[]>(`${API_BASE}/products/categories`);
  return data ?? [];
}

export async function getProductById(id: string): Promise<Product | null> {
  return await fetchJsonSafe<Product>(`${API_BASE}/products/${id}`);
}
