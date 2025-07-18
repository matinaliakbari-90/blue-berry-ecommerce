import Image from "next/image";
import logo from '../../public/images/logo.png';
import Form from "next/form";
import Link from "next/link";
import CartIcon from "./CartIcon";
import { ShoppingBasket } from "lucide-react";

export default function Header() {
    return (
        <header className="w-full bg-white py-4 border-b border-b-gray-400">
            <div className="max-w-7xl mx-auto px-4 flex items-center justify-between gap-5">
                <Link href='/'>
                    <Image src={logo} alt="logo" className="w-24" priority />
                </Link>
                <Form action='search' className="flex-1">
                    <input type="text" name="query" className="w-full border-2 border-gray-200 px-4 py-2.5 rounded-md focus-visible:border-darkBlue outline-0" placeholder="Search for products ..." />
                </Form>
                <div className="flex items-center gap-5">
                    <CartIcon />

                    <Link href="/orders" className="flex items-center text-sm gap-2 border border-gray-200 px-2 py-1 rounded-md shadow-md hover:shadow-none hoverEffect">
                        <ShoppingBasket className="text-darkBlue w-6 h-6" />
                        <div className="flex flex-col">
                            <p className="text-xs">
                                <span className="font-semibold">0</span> items
                            </p>
                            <p className="font-semibold">Orders</p>
                        </div>
                    </Link>

                    <p>Account</p>
                </div>
            </div>
        </header>
    );
}