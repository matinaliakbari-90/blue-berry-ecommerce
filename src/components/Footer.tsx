import Image from "next/image";
import payment from "../../public/images/payment.png"


export default function Footer() {
    return (
        <footer className="bg-lightBg text-sm">
            <div className="max-w-7xl mx-auto px-4 py-5 flex items-center justify-between">
                <p className="text-gray-500">Copyright © 2025 <span className="text-darkBlue font-semibold">MatinAliakbari</span> all rights reserved.</p>
                <Image src={payment} className="w-64 object-cover" alt="payment" />
            </div>
        </footer>
    );
}