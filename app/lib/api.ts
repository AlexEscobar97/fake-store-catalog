import { Product } from "./types";

const BASE_URL = "https://fakestoreapi.com";

export async function getProducts(): Promise<Product[]> {
  try {
    const res = await fetch(`${BASE_URL}/products`, {
      cache: "no-store",
    });

    if (!res.ok) {
      console.error("FakeStore getProducts failed:", res.status, res.statusText);
      return [];
    }

    return await res.json();
  } catch (error) {
    console.error("Error obteniendo productos (exception):", error);
    return [];
  }
}

export async function getCategories(): Promise<string[]> {
  try {
    const res = await fetch(`${BASE_URL}/products/categories`, {
      cache: "no-store",
    });

    if (!res.ok) {
      console.error("FakeStore getCategories failed:", res.status, res.statusText);
      return [];
    }

    return await res.json();
  } catch (error) {
    console.error("Error obteniendo categorías (exception):", error);
    return [];
  }
}

export async function getProductById(id: string): Promise<Product | null> {
  try {
    const res = await fetch(`${BASE_URL}/products/${id}`, {
      cache: "no-store",
    });

    if (!res.ok) {
      console.error("FakeStore getProductById failed:", res.status, res.statusText);
      return null;
    }

    return await res.json();
  } catch (error) {
    console.error("Error obteniendo producto (exception):", error);
    return null;
  }
}
