import Image from "next/image";
import payment from "../../public/images/payment.png"


export default function Footer() {
    return (
        <footer className="bg-lightBg py-5">
            <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
                <p className="text-gray-500 text-[13px] md:text-[16px]">Copyright © 2025 <span className="text-darkBlue font-semibold">MatinAliakbari</span> all rights reserved.</p>
                <Image src={payment} className="w-72 object-cover" alt="payment" />
            </div>
        </footer>
    );
}