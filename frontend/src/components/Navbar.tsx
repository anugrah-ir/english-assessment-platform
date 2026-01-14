"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
    const pathname = usePathname();

    const navItems = [
        { label: "Beranda", href: "/" },
        { label: "Tes", href: "/test" },
        { label: "Fitur", href: "/feature" },
        { label: "FAQ", href: "/faq" },
    ];

    const navClass = (active: boolean) =>
    `px-3 transition-colors duration-200 text-lg ${
      active ? "text-red-600" : "text-neutral-600 hover:text-black"
    }`;

    return (
        <nav className="flex flex-row items-center px-20 justify-between w-full bg-neutral-100 border-b-1 border-neutral-300 shadow-md h-16 text-base font-medium fixed z-10">
            <div className="flex flex-row items-center justify-center gap-8"> 
                <Link href="/" className="flex items-center justify-center hover:cursor-pointer">
                    <Image src="/logo-internal.png.webp" alt="Company logo" width={80} height={40} />
                </Link>
                <div className="flex items-center">
                    {navItems.map((item) => (
                        <Link
                            key={item.label}
                            href={item.href}
                            className={navClass(pathname === item.href)}
                        >
                            {item.label}
                        </Link>
                    ))}
                </div>
            </div>
            <div className="flex flex-row items-center justify-center gap-3">
                <Link
                    href="/register"
                    className="border-2 text-red-600 hover:text-white border-red-600 py-1 px-3 rounded-xl hover:cursor-pointer hover:bg-red-600 transition-colors duration-300"
                >
                    Daftar
                </Link>
                <Link
                    href="/login"
                    className="bg-amber-500 text-white py-1 px-3 rounded-xl hover:cursor-pointer hover:bg-red-600 transition-colors duration-300"
                >
                    Masuk   
                </Link>
            </div>
        </nav>
    );
}