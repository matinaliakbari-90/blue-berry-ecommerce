import { Category } from "../../sanity.types";
import CategoriesSelector from "./CategoriesSelector";

interface CategoriesProps {
    categories: Category[];
}

export default function Categories({ categories }: CategoriesProps) {
    return (
        <div className="py-5">
            <CategoriesSelector categories={categories} />
        </div>
    );
}