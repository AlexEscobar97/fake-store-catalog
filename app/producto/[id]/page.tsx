import ProductDetailClient from "./ProductDetailClient";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return <ProductDetailClient id={id} />;
}
