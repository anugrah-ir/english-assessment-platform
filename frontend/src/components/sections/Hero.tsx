import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="flex flex-row justify-center items-center w-full min-h-[90vh] gap-20">
      <div className="h-[400px] w-[400px] relative">
        <Image src="/hero-image.png.webp" alt="Hero Image" fill />
      </div>
      <div className="flex flex-col w-9/20 gap-8">
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
          className="bg-amber-500 text-xl text-white font-medium px-6 py-3 rounded-xl w-fit hover:bg-red-600 hover:text-white transition-colors duration-300"
        >
          Coba Tes Sekarang
        </Link>
      </div>
    </section>
  );
}
