import ProductsList from "@/components/ProductsList";
import { getAllCategories, getProductsByCategory } from "@/sanity/helpers";

export default async function CategoriesPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const categories = await getAllCategories();
    const products = await getProductsByCategory(slug);

    return (
        <div className="flex flex-col items-center justify-top bg-gray-100">
            <div className="max-w-7xl mx-auto p-8 bg-white rounded-lg shadow-md mt-60 md:mt-34 mb-12">
                <h1 className="text-2xl md:text-3xl font-bold">
                    Search results for{" "}
                    <span className="text-darkBlue">
                        {slug.split("-").map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(" ")}{" "}
                    </span>
                    Collection
                </h1>
                <ProductsList products={products} categories={categories} title={false} />
            </div>
        </div>
    );
}