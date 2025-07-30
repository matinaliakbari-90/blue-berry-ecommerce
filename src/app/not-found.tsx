import Image from "next/image";
import Link from "next/link";
import logo from "../../public/images/logo.png";

export default function NotFound() {
    return (
        <div className="relative min-h-screen">
            <div className="h-full min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 ">
                <div className="max-w-md w-full space-y-8">
                    <div className="text-center">
                        <Link href="/">
                            <Image src={logo} className="w-28 mx-auto" width={100} height={100} alt="logo" />
                        </Link>

                        <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
                            Looking for something?
                        </h2>
                        <p className="mt-2 text-sm text-gray-600">
                            We&apos;re sorry. The Web address you entered is not a functioning
                            page on our site.
                        </p>
                    </div>
                    <div className="mt-8 space-y-6">
                        <div className="rounded-md shadow-2xs">
                            <Link href="/" className="w-full flex items-center justify-center px-4 py-2 border border-transparent text-sm font-semibold rounded-md text-white bg-gray-900 focus:outline-hidden focus:ring-2 focus:ring-offset-2 hoverEffect">
                                Go to Shoptech&apos;s home page
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}