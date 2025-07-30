import Image from "next/image";
import logo from '../../public/images/logo.png';
import Form from "next/form";
import Link from "next/link";
import CartIcon from "./CartIcon";
import { User } from "lucide-react";
import { BsBasket } from "react-icons/bs";
import { ClerkLoaded, SignedIn, UserButton } from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs/server";
import { getMyOrders } from "@/sanity/helpers";

export default async function Header() {

    const user = await currentUser();

    let orders = null;
    if (user?.id) {
        orders = await getMyOrders(user.id);
    }

    return (
        <header className="w-full bg-white py-3 border-b border-b-gray-300 fixed z-50 left-0 top-0 right-0 shadow-md">
            <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row md:items-center md:justify-between gap-3 md:gap-5">
                <div className="flex flex-1 items-center gap-8 md:gap-5 md:flex-row">
                    <Link href='/'>
                        <Image src={logo} alt="logo" className="w-28 mx-auto md:mx-0 mb-1 md:mb-0" priority />
                    </Link>
                    <Form action='search' className="flex-1">
                        <input type="text" name="query" className="w-full max-w-7xl rounded-md hoverEffect bg-gray-50 text-gray-800 px-4 py-2.5 focus:outline-0 focus:ring-2 focus:ring-darkBlue border border-gray-200" placeholder="Search for products ..." />
                    </Form>
                </div>
                <div className="flex items-center gap-5">
                    <CartIcon />

                    <ClerkLoaded>
                        <SignedIn>
                            <Link href="/orders" className="flex items-center text-sm gap-2 border border-gray-300 px-2 py-1 rounded-md shadow-md hover:shadow-none hoverEffect">
                                <BsBasket className="text-darkBlue w-6 h-6" />
                                <div className="flex flex-col">
                                    <p className="text-xs">
                                        <span className="font-semibold">{orders?.length}</span> items
                                    </p>
                                    <p className="font-semibold">Orders</p>
                                </div>
                            </Link>
                        </SignedIn>

                        {user ?
                            <div className="flex items-center text-sm gap-2 border border-gray-300 px-2 py-1 rounded-md shadow-md hover:shadow-none hoverEffect">
                                <UserButton />
                                <div className="sm:flex flex-col hidden">
                                    <p className="text-xs text-gray-500">Welcome Back</p>
                                    <p className="font-semibold">{user?.firstName}</p>
                                </div>
                            </div> : (
                                <Link href="/sign-in">
                                    <div className="flex items-center text-sm gap-2 border border-gray-300 px-2 py-1 rounded-md shadow-md hover:shadow-none hoverEffect">
                                        <User className="w-6 h-6 text-darkBlue" />
                                        <div>
                                            <div className="flex flex-col">
                                                <p className="text-xs">Account</p>
                                                <p className="font-semibold">Login</p>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            )}
                    </ClerkLoaded>
                </div>
            </div>
        </header>
    );
}