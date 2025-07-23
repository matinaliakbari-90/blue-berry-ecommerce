import { Product } from "../../sanity.types";
import ProductCart from "./ProductCart";

interface ProductsPropsType {
    products: Product[];
}

export default function ProductsGrid({ products }: ProductsPropsType) {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {products.map((product) => (
                <ProductCart key={product._id} product={product} />
            ))}
        </div>
    );
}