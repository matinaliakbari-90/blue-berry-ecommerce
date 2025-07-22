import DiscountBanner from "@/components/DiscountBanner";
import ProductsList from "@/components/ProductsList";
import { getAllCategories, getAllProducts, getSale } from "@/sanity/helpers";

export default async function Home() {

  const sales = await getSale();
  const products = await getAllProducts();
  const categories = await getAllCategories();

  return (
    <main className="max-w-7xl mx-auto px-4 py-10 mt-45 md:mt-18">
        <DiscountBanner sales={sales} />
        <ProductsList products={products} title={true} categories={categories} />
    </main>
  );
}