import { getSale } from "@/sanity/helpers";

export default async function Home() {

  const sales = await getSale();
  console.log(sales)

  return (
    <main className="max-w-7xl mx-auto px-4 py-20">
        <h1>Ecommerce Website</h1>
    </main>
  );
}