import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="flex min-h-[90vh] w-full flex-row items-center justify-center gap-20">
      <div className="relative h-[400px] w-[400px]">
        <Image src="/hero-image.png.webp" alt="Hero Image" fill />
      </div>
      <div className="flex w-9/20 flex-col gap-8">
        {/* <h1 className="text-6xl font-semibold">
                    Unlock Your Future with <span className="text-red-600">Fun</span> & <span className="text-red-600">Fast</span> English Test!
                </h1> */}
        <h1 className="text-5xl font-semibold">
          Raih Peluang Sukses dengan Tes TOEFL yang{" "}
          <span className="text-red-600">Asik</span> &{" "}
          <span className="text-red-600">Sat-Set</span>!
        </h1>

        <div className="text-xl font-medium">
          <p>Tes TOEFL bersertifikat kini makin gampang</p>
          <p>Full online, interaktif, dan langsung upgrade skill kamu</p>
        </div>
        <Link
          href="/test"
          className="w-fit rounded-xl bg-amber-500 px-6 py-3 text-xl font-medium text-white transition-colors duration-300 hover:bg-red-600 hover:text-white"
        >
          Coba Tes Sekarang
        </Link>
      </div>
    </section>
  );
}
