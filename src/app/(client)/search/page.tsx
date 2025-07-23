import ProductsGrid from "@/components/ProductsGrid";
import { searchProductsByName } from "@/sanity/helpers";

export default async function SearchPage({
    searchParams,
}: {
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
    const { query } = await searchParams;
    const products = await searchProductsByName(query)

    if (!products?.length) {
        return (
            <div className="flex flex-col items-center justify-normal min-h-screen bg-gray-100 p-4">
                <div className="bg-white p-8 h-40 rounded-lg mt-60 shadow-md w-full md:max-w-4xl text-center">
                    <h1 className="text-3xl font-bold mb-3">
                        No products found for:{" "}
                        <span className="text-darkBlue">{query}</span>
                    </h1>
                    <p className="text-gray-600">Try searching with different keywords</p>
                </div>
            </div>
        );
    }

    return (
        <div className="flex flex-col items-center justify-top min-h-screen bg-gray-100">
            <div className="max-w-7xl mx-auto p-8 bg-white rounded-lg shadow-md mt-56 md:mt-30">
                <h1 className="text-3xl font-bold mb-6 text-center">
                    Search results for <span className="text-darkBlue">{query}</span>
                </h1>
                <ProductsGrid products={products} />
            </div>
        </div>
    );
}
