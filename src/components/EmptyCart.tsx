import { ShoppingCart } from "lucide-react";
import Image from "next/image";
import emptyCart from "../../public/images/emptyCart.png";
import Link from "next/link";
import { motion } from "framer-motion";

export default function EmptyCart() {
    return (
        <div className="flex items-center justify-center py-11">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-center space-y-6">
                <motion.div animate={{ scale: [1, 1.1, 1] }} transition={{ repeat: Infinity, duration: 2 }} className="inline-block">
                    <ShoppingCart size={64} className="text-gray-400 mx-auto" />
                </motion.div>
                
                <Image src={emptyCart} className="mx-auto rounded-lg shadow-md" width={200} height={200} alt="Empty shopping bag" />

                <h2 className="text-3xl font-bold text-gray-800">
                    Your cart is empty!
                </h2>

                <p className="text-gray-600 max-w-md mx-auto">
                    Looks like you haven&rsquo;t added anything to your cart yet. Explore
                    our products and find something you love!
                </p>

                <Link href="/" className="inline-block bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg transition-colors duration-300 hover:bg-blue-700 focus:outline-hidden focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                    Start Shopping
                </Link>
            </motion.div>
        </div>
    );
}