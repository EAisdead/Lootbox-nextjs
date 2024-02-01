import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <section className="min-h-[70vh] my-8">
      <article className="text-center mx-8">
        <h1 className="text-4xl text-center my-8 text-green-700 underline font-bold">
          Smite
        </h1>
        <p className=" text-justify">
          I think it&lsquo;s hilarious u kids talk trash about EA. u
          wouldn&lsquo;t say that to them at LAN, they&lsquo;re jacked. not only
          that but they wears the freshest clothes, eats at the chillest
          restaurants and hangs out with the hottest dudes. y&lsquo;all are
          pathetic lol.
        </p>
      </article>
      <article className="text-center my-32">
        <button className="text-7xl border-2 border-green-700 rounded-[100%] py-12 px-6 bg-green-700 hover:scale-125 transition-all duration-300 ease-in-out">
          Play
        </button>
      </article>
    </section>
  );
}
