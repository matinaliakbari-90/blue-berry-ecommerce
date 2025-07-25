"use client"

import { cn } from "@/lib/utils";
import { Product } from "../../sanity.types";
import { Button } from "./ui/button";
import toast from "react-hot-toast";
import QuantityButtons from "./QuantityButtons";
import PriceFormatter from "./PriceFormatter";
import { useEffect, useState } from "react";
import useCartStore from "@/store";

interface ProductProps {
    product: Product | null;
    className?: string;
}

export default function AddToCartBottom({ product, className }: ProductProps) {

    const [isClient, setIsClient] = useState(false);
    
    const { addItem, getItemCount } = useCartStore();

    const itemCount = getItemCount(product?._id as string);
    const isOutOfStock = product?.stock === 0;

    const handleAddToCart = () => {
        addItem(product as Product)
        toast.success(`${product?.name?.substring(0, 12)}... added successfully`)
    }

    useEffect(() => {
        setIsClient(true)
    }, [])
    if (!isClient) {
        return null
    }

    return (
        <div>
            {itemCount ? (
                <div className="text-sm">
                    <div className="flex items-center justify-between">
                        <span className="text-xs text-muted-foreground">Quantity</span>
                        <QuantityButtons product={product} />
                    </div>
                    <div className="flex items-center justify-between border-t pt-1">
                        <span className="text-xs font-semibold">Subtotal</span>
                        <PriceFormatter
                            amount={product?.price ? product.price * itemCount : 0}
                        />
                    </div>
                </div>
            ) : (
                <Button disabled={isOutOfStock} onClick={handleAddToCart} className={cn("bg-darkBlue/10 text-black border-darkBlue border py-2 mt-2 w-full rounded-md font-medium hover:bg-darkBlue hover:text-white hoverEffect disabled:hover:cursor-not-allowed disabled:bg-darkBlue/10 disabled:text-gray-400 disabled:hover:text-gray-400 disabled:border-darkBlue/10", className)}>
                    Add to cart
                </Button>
            )}
        </div>
    );
}