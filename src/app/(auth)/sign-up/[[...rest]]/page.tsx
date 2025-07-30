"use client";

import { useSearchParams } from "next/navigation";
import { SignUp } from "@clerk/nextjs";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import logo from "../../../../../public/images/logo.png";

export default function SignUpPage() {
    const searchParams = useSearchParams();
    const redirectUrl = searchParams.get("redirect_url") || "/";

    return (
        <div className="min-h-screen bg-linear-to-br flex flex-col items-center justify-center p-4">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="w-full max-w-md">
                <div className="rounded-2xl shadow-xl overflow-hidden">
                    <div className="relative">
                        <div className="absolute top-4 left-4 z-10">
                            <Link href="/">
                                <button className="p-2 shadow-md transition-all duration-300">
                                    <ArrowLeft className="h-5 w-5" />
                                </button>
                            </Link>
                        </div>
                        <div className="p-6 text-center">
                            <div className="flex justify-center mb-4">
                                <Link href={"/"}>
                                    <Image src={logo} className="w-24" width={100} height={100} alt="logo" />
                                </Link>
                            </div>
                            <h1 className="text-2xl font-bold">Create an Account</h1>
                            <p className="text-sm opacity-80 mt-1">
                                Join ShopTech for the best shopping experience
                            </p>
                        </div>
                    </div>

                    <div className="p-6">
                        <SignUp
                            appearance={{
                                elements: {
                                    formButtonPrimary: "text-white font-semibold py-2 px-4 rounded-md transition-all duration-200",  
                                    card: "shadow-none",
                                    headerTitle: "hidden",
                                    headerSubtitle: "hidden",
                                    socialButtonsBlockButton: "border border-gray-300 transition-all duration-200", 
                                    formFieldInput: "border border-gray-200 focus:ring-1 rounded-md", 
                                    footerActionLink: "font-medium", 
                                },
                            }}
                            fallbackRedirectUrl={redirectUrl}
                            signInUrl={`/sign-in?redirect_url=${redirectUrl}`}
                        />
                    </div>
                </div>

                <div className="text-center mt-6 text-sm text-gray-600">
                    <p>
                        Already have an account?{" "}
                        <Link className="font-semibold hover:underline" href={`/sign-in?redirect_url=${redirectUrl}`}>
                            Sign in
                        </Link>
                    </p>
                </div>
            </motion.div>
        </div>
    );
}