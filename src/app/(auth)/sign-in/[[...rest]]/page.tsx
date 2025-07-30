"use client";

import { useSearchParams } from "next/navigation";
import { SignIn } from "@clerk/nextjs";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import logo from "../../../../../public/images/logo.png";


export default function SignInPage() {
    const searchParams = useSearchParams();
    const redirectUrl = searchParams.get("redirect_url") || "/";

    return (
        <div className="min-h-screen flex flex-col items-center justify-center p-4">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="w-full max-w-md">
                <div className="rounded-2xl shadow-xl overflow-hidden">
                    <div className="relative">
                        <div className="absolute top-4 left-4 z-10">
                            <Link href="/">
                                <button className="p-2 rounded-full shadow-md transition-all duration-300 cursor-pointer">
                                    <ArrowLeft className="h-5 w-5" />
                                </button>
                            </Link>
                        </div>
                        <div className="p-6 text-center">
                            <div className="flex justify-center mb-4">
                                <div>
                                    <Image src={logo} className="w-24" width={100} height={100} alt="logo" />
                                </div>
                            </div>
                            <h1 className="text-2xl font-bold">Welcome Back</h1>
                            <p className="text-sm opacity-80 mt-1">
                                Sign in to access your account
                            </p>
                        </div>
                    </div>

                    <div className="p-6">
                        <SignIn
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
                            path="/sign-in"
                            fallbackRedirectUrl={redirectUrl}
                            signUpUrl={`/sign-up?redirect_url=${redirectUrl}`}
                        />
                    </div>
                </div>

                <div className="text-center mt-6 text-sm text-gray-600">
                    <p>
                        Don&apos;t have an account?{" "}
                        <Link className="font-semibold hover:underline" href={`/sign-up?redirect_url=${redirectUrl}`}>
                            Sign up
                        </Link>
                    </p>
                </div>
            </motion.div>
        </div>
    );
}