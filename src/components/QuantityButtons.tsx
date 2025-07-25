"use client"

import { twMerge } from "tailwind-merge";
import { Button } from "./ui/button";
import { HiMinus, HiPlus } from "react-icons/hi2";
import toast from "react-hot-toast";
import { Product } from "../../sanity.types";
import useCartStore from "@/store";

interface Props {
    product: Product | null;
    className?: string;
    borderStyle?: string;
}

export default function QuantityButtons({ product, className, borderStyle }: Props) {

    const { addItem, removeItem, getItemCount } = useCartStore()
    const itemCount = getItemCount(product?._id as string);

    const handleRemoveProduct = () => {
        removeItem(product?._id as string)
        if (itemCount === 1) {
            toast.success(`${product?.name?.substring(0, 12)}... remove successfully`)
        }
    }

    const handleAddProduct = () => {
        if (itemCount < (product?.stock as number)) {
            addItem(product as Product)
        }
    }

    return (
        <div className={twMerge("flex items-center gap-1 pb-2 text-base", borderStyle, className)}>
            <Button onClick={handleRemoveProduct} variant="outline" className="w-6 h-6">
                <HiMinus />
            </Button>
            <span className="font-semibold w-8 text-center text-darkBlue">
                {itemCount}
            </span>
            <Button onClick={handleAddProduct} variant="outline" className="w-6 h-6" >
                <HiPlus />
            </Button>
        </div>
    );
}