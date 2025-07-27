"use client"

import useCartStore from "@/store";
import Link from "next/link";
import { useEffect, useState } from "react";
import { MdOutlineShoppingCart } from "react-icons/md";

export default function CartIcon() {

    const [isClient, setIsClient] = useState(false);

    const groupedItems = useCartStore((state) => state.getGroupedItems())

    useEffect(() => {
        setIsClient(true)
    }, [])
    if (!isClient) {
        return null
    }

    return (
        <Link href="/cart" className="flex items-center text-sm gap-2 border border-gray-300 px-2 py-1 rounded-md shadow-md hover:shadow-none hoverEffect">
            <MdOutlineShoppingCart className="text-darkBlue w-6 h-6" />
            <div className="flex flex-col">
                <p className="text-xs">
                    <span className="font-semibold">{groupedItems.length ? groupedItems.length : 0}</span> items
                </p>
                <p className="font-semibold">Cart</p>
            </div>
        </Link>
    );
}