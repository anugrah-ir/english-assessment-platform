import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="flex w-full flex-col justify-center gap-10 border-t-1 border-neutral-300 bg-neutral-100 px-20 py-10">
      <div className="flex flex-row justify-between">
        <div className="flex w-1/4 flex-col gap-5">
          <Link
            href="/"
            className="flex flex-row items-center hover:cursor-pointer"
          >
            <Image
              src="/logo-internal.png.webp"
              alt="Company logo"
              width={120}
              height={60}
            />
          </Link>
          <p className="text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <Link
            href="/"
            className="transition-colors duration-300 hover:text-red-600"
          >
            Beranda
          </Link>
          <Link
            href="/test"
            className="transition-colors duration-300 hover:text-red-600"
          >
            Tes
          </Link>
          <Link
            href="/feature"
            className="transition-colors duration-300 hover:text-red-600"
          >
            Fitur
          </Link>
          <Link
            href="/faq"
            className="transition-colors duration-300 hover:text-red-600"
          >
            FAQ
          </Link>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-2xl font-semibold">Newsletter</p>
          <p>Sign Up for Newsletter</p>
          <div className="flex flex-row rounded-4xl border-2 border-neutral-300">
            <input
              type="email"
              placeholder="Your email address"
              className="px-4 py-2"
            />
            <button className="mx-1 my-1 rounded-4xl bg-amber-500 px-4 py-2 text-sm font-semibold text-white transition-colors duration-300 hover:bg-red-600">
              Sign Up
            </button>
          </div>
        </div>
      </div>
      <p className="text-sm font-light">
        Copyright © 2026 Kampung Inggris Language Center. All rights reserved.
      </p>
    </footer>
  );
}
