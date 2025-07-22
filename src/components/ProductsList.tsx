import { Category, Product } from "../../sanity.types";
import Categories from "./Categories";
import ProductCart from "./ProductCart";

interface PropsType {
    products: Product[];
    title?: boolean;
    categories: Category[];
}


export default function ProductsList({ products, title, categories }: PropsType) {
    return (
        <div className="mt-8">
            <Categories categories={categories} />

            {title && (
                <div className="pb-5">
                    <h2 className="text-2xl font-semibold text-gray-600">
                        Day of the <span className=" text-lightBlue">Deal</span>
                    </h2>
                    <p className="text-sm text-gray-500">
                        Don&rsquo;t wait. The time will never be just right.
                    </p>
                </div>
            )}

            <ProductCart products={products} />
        </div>
    );
}