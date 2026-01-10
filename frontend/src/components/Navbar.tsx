"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
    const pathname = usePathname();

    const navItems = [
        { label: "Beranda", href: "/" },
        { label: "Tes", href: "/test" },
    ];

    const navClass = (active: boolean) =>
    `px-3 transition-colors duration-200 ${
      active ? "text-red-700" : "text-neutral-600 hover:text-black"
    }`;

    return (
        <nav className="flex flex-row items-center px-20 justify-between w-full bg-neutral-100 border-b-1 border-neutral-300 shadow-md h-16 text-base font-medium">
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
                    className="border border-red-600 py-1 px-3 rounded-xl hover:cursor-pointer hover:bg-neutral-300 transition-colors duration-300"
                >
                    Daftar
                </Link>
                <Link
                    href="/login"
                    className="bg-amber-300 py-1 px-3 rounded-xl hover:cursor-pointer hover:bg-amber-400 transition-colors duration-300"
                >
                    Masuk   
                </Link>
            </div>
        </nav>
    );
}