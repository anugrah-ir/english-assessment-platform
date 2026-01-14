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
    <nav className="fixed z-10 flex h-16 w-full flex-row items-center justify-between border-b-1 border-neutral-300 bg-neutral-100 px-20 text-base font-medium shadow-md">
      <div className="flex flex-row items-center justify-center gap-8">
        <Link
          href="/"
          className="flex items-center justify-center hover:cursor-pointer"
        >
          <Image
            src="/logo-internal.png.webp"
            alt="Company logo"
            width={80}
            height={40}
          />
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
          className="rounded-xl border-2 border-red-600 px-3 py-1 text-red-600 transition-colors duration-300 hover:cursor-pointer hover:bg-red-600 hover:text-white"
        >
          Daftar
        </Link>
        <Link
          href="/login"
          className="rounded-xl bg-amber-500 px-3 py-1 text-white transition-colors duration-300 hover:cursor-pointer hover:bg-red-600"
        >
          Masuk
        </Link>
      </div>
    </nav>
  );
}
