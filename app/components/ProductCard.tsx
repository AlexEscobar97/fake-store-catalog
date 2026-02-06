import Link from "next/link";
import type { Product } from "@/lib/types";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      href={`/producto/${product.id}`}
      className="group rounded-2xl border bg-white p-4 shadow-sm transition hover:shadow-md"
    >
      <div className="flex h-48 items-center justify-center overflow-hidden rounded-xl bg-gray-50">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={product.image}
          alt={product.title}
          className="h-full w-full object-contain p-3 transition-transform group-hover:scale-105"
        />
      </div>

      <div className="mt-4 space-y-2">
        <div className="text-xs font-medium text-gray-500">{product.category}</div>

        <h3 className="line-clamp-2 text-sm font-semibold text-gray-900">
          {product.title}
        </h3>

        <div className="text-base font-bold text-gray-900">
          ${product.price.toFixed(2)}
        </div>
      </div>
    </Link>
  );
}
