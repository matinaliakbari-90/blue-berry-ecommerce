import DiscountBanner from "@/components/DiscountBanner";
import { getAllProducts, getSale } from "@/sanity/helpers";

export default async function Home() {

  const sales = await getSale();
  const products = await getAllProducts();
  console.log(products);

  return (
    <main className="max-w-7xl mx-auto px-4 py-10 mt-50 md:mt-18">
        <DiscountBanner sales={sales} />
    </main>
  );
}