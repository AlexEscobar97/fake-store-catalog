import { Product } from "./types";

const BASE_URL = "https://fakestoreapi.com";

export async function getProducts(): Promise<Product[]> {
  const res = await fetch(`${BASE_URL}/products`, { next: { revalidate: 60 } });
  if (!res.ok) throw new Error("No se pudieron obtener los productos");
  return res.json();
}

export async function getCategories(): Promise<string[]> {
  const res = await fetch(`${BASE_URL}/products/categories`, { next: { revalidate: 60 } });
  if (!res.ok) throw new Error("No se pudieron obtener las categorías");
  return res.json();
}

export async function getProductById(id: string): Promise<Product | null> {
  const res = await fetch(`${BASE_URL}/products/${id}`, { next: { revalidate: 60 } });

  if (res.status === 404) return null;
  if (!res.ok) throw new Error("No se pudo obtener el producto");

  return res.json();
}
