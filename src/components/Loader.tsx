import Image from "next/image";
import loaderImage from '../../public/images/loaderImage.png';

export default function Loader() {
    return (
        <div className="fixed top-0 left-0 w-full min-h-screen z-50 bg-white p-10 flex items-center justify-center">
            <div className="relative w-24 h-24 flex items-center justify-center">
                <div className="absolute inset-0 rounded-full border-2 border-dotted border-gray-400 animate-[spin_5s_infinite]"></div>
                <Image src={loaderImage} className="w-14 h-14 object-cover" width={300} height={300} alt="loaderImage" />
            </div>
        </div>
    );
}