import Image from "next/image";
import logo from '../../public/images/logo.png';
import Form from "next/form";
import Link from "next/link";

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
                <div>
                    
                </div>
            </div>
        </header>
    );
}