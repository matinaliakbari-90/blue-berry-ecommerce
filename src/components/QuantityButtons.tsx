"use client"

import { twMerge } from "tailwind-merge";
import { Button } from "./ui/button";
import { HiMinus, HiPlus } from "react-icons/hi2";
import toast from "react-hot-toast";
import { Product } from "../../sanity.types";

interface Props {
    product: Product;
    className?: string;
    borderStyle?: string;
}

export default function QuantityButtons({ product, className, borderStyle }: Props) {

    const handleRemoveProduct = () => {
        toast.success("Removed clicked")
    }

    const handleAddProduct = () => {
        toast.success("Added clicked")
    }

    const itemCount = 0

    return (
        <div className={twMerge("flex items-center gap-1 pb-2 text-base", borderStyle, className)}>
            <Button variant="outline" size="icon" className="w-6 h-6" onClick={handleRemoveProduct}>
                <HiMinus />
            </Button>
            <span className="font-semibold w-8 text-center text-darkBlue">
                {itemCount}
            </span>
            <Button onClick={handleAddProduct} variant="outline" size="icon" className="w-6 h-6" >
                <HiPlus />
            </Button>
        </div>
    );
}