import { Category } from "../../sanity.types";

interface CategoriesProps {
    categories: Category[];
}

export default function Categories({ categories }: CategoriesProps) {
    return (
        <div className="py-5">
            <div>Categories</div>
        </div>
    );
}