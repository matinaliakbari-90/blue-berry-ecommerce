import Image from "next/image";
import logo from '../../public/images/logo.png';
import Form from "next/form";
import Link from "next/link";
import CartIcon from "./CartIcon";
import { ShoppingBasket, User } from "lucide-react";
import { ClerkLoaded, SignedIn, SignInButton, UserButton } from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs/server";

export default async function Header() {

    const user = await currentUser()

    return (
        <header className="w-full bg-white py-3 border-b border-b-gray-300">
            <div className="max-w-7xl mx-auto px-4 flex items-center justify-between gap-5">
                <Link href='/'>
                    <Image src={logo} alt="logo" className="w-24" priority />
                </Link>
                <Form action='search' className="flex-1">
                    <input type="text" name="query" className="w-full max-w-7xl rounded-md hoverEffect bg-gray-50 text-gray-800 px-4 py-2.5 focus:outline-0 focus:ring-2 focus:ring-darkBlue border border-gray-200" placeholder="Search for products ..." />
                </Form>
                <div className="flex items-center gap-5">
                    <CartIcon />

                    <ClerkLoaded>
                        <SignedIn>
                            <Link href="/orders" className="flex items-center text-sm gap-2 border border-gray-300 px-2 py-1 rounded-md shadow-md hover:shadow-none hoverEffect">
                                <ShoppingBasket className="text-darkBlue w-6 h-6" />
                                <div className="flex flex-col">
                                    <p className="text-xs">
                                        <span className="font-semibold">0</span> items
                                    </p>
                                    <p className="font-semibold">Orders</p>
                                </div>
                            </Link>
                        </SignedIn>

                        {user ?
                            <div className="flex items-center text-sm gap-2 border border-gray-300 px-2 py-1 rounded-md shadow-md hover:shadow-none hoverEffect">
                                <UserButton />
                                <div className="flex flex-col">
                                    <p className="text-xs text-gray-500">Welcome Back</p>
                                    <p className="font-semibold">{user?.fullName}</p>
                                </div>
                            </div> : (
                                <SignInButton mode="modal">
                                    <div className="flex items-center text-sm gap-2 border border-gray-300 px-2 py-1 rounded-md shadow-md hover:shadow-none hoverEffect">
                                        <User className="w-6 h-6 text-darkBlue" />
                                        <div>
                                            <div className="flex flex-col">
                                                <p className="text-xs">Account</p>
                                                <p className="font-semibold">Login</p>
                                            </div>
                                        </div>
                                    </div>
                                </SignInButton>
                            )}
                    </ClerkLoaded>
                </div>
            </div>
        </header>
    );
}