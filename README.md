# Fake Store Catalog (Next.js + TypeScript + Tailwind)

Catálogo de productos construido con **Next.js 14+ (App Router)** consumiendo la **Fake Store API**.  
Incluye **listado en cards**, **filtro por categoría**, **búsqueda por nombre**, **pantalla de detalle** y **loading states con skeletons**.  
Diseño **100% responsivo (Mobile First)**.

---

## Demo (Deployment)
- Vercel: https://fake-store-catalog-six.vercel.app/

## Repositorio
- GitHub: https://github.com/AlexEscobar97/fake-store-catalog

---

## Funcionalidades
- **Home**: listado de productos en cards (imagen, título, precio y categoría).
- **Filtro por categoría** para refinar el listado de productos.
- **Búsqueda por nombre** que filtra dinámicamente los productos.
- **Detalle del producto** mediante ruta dinámica `/producto/[id]`.
- **Rating del producto** mostrado con estrellas.
- **Loading states** usando skeletons mientras se cargan los datos.
- **Diseño responsivo** con enfoque Mobile First.

---

## Tecnologías
- **Next.js 14+** (App Router y Server Components)
- **TypeScript** (tipado estricto mediante interfaces)
- **Tailwind CSS** (estilos y diseño responsivo)

---

## API utilizada
- Fake Store API  
  - Productos: https://fakestoreapi.com/products  
  - Categorías: https://fakestoreapi.com/products/categories  
  - Productos por categoría: https://fakestoreapi.com/products/category/{category}  
  - Detalle de producto: https://fakestoreapi.com/products/{id}

---

## Requisitos previos
Antes de ejecutar el proyecto, es necesario contar con:

- **Node.js 18+** (recomendado)
- **npm** (puede usarse yarn, pnpm o bun si se desea)

Verificar versiones instaladas:
```bash
node -v
npm -v
