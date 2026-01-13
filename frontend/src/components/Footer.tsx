import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="flex flex-col justify-center w-full border-t-1 border-neutral-300 bg-neutral-100 px-20 py-10 gap-10">
            <div className="flex flex-row justify-between">
                <div className="flex flex-col w-1/4 gap-5">
                    <Link href="/" className="flex flex-row items-center hover:cursor-pointer">
                        <Image src="/logo-internal.png.webp" alt="Company logo" width={120} height={60} />
                    </Link>
                    <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
                <div className="flex flex-col gap-2">
                    <Link href="/" className="hover:text-red-700 transition-colors duration-300">
                        Beranda
                    </Link>
                    <Link href="/test" className="hover:text-red-700 transition-colors duration-300">
                        Tes
                    </Link>
                </div>
                <div className="flex flex-col gap-2">
                    <p className="font-semibold text-2xl">Newsletter</p>
                    <p>Sign Up for Newsletter</p>
                    <div className="flex flex-row border-2 border-neutral-300 rounded-4xl">
                        <input
                            type="email"
                            placeholder="Your email address"
                            className="px-4 py-2"
                        />
                        <button className="bg-amber-500 font-semibold text-white text-sm px-4 py-2 mx-1 my-1 rounded-4xl hover:bg-red-700 transition-colors duration-300">
                            Sign Up
                        </button>
                    </div>
                </div>
            </div>
            <p className="text-sm font-light">Copyright © 2026 Kampung Inggris Language Center. All rights reserved.</p>
        </footer>
    );
}