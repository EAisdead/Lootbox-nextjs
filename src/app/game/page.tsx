import api from "@/api";
import Image from "next/image";
import Link from "next/link";

export default async function GamePage() {
  return (
    <section className="border-2 h-[75vh] m-8 ">
      <Link href={"/"} className="border-2  float-left m-4 p-2 hover:underline">
        / Back
      </Link>
      <article>
        <p className="text-center mt-6 text-xl">Your item:</p>
        <p className="text-center w-56 h-56 border-2 mt-6 mx-auto">
          Image Placeholder
        </p>
        <div className="grid justify-center">
          <button className="border-2 w-64 h-16 my-8 hover:scale-125">
            Smite
          </button>
        </div>
      </article>
    </section>
  );
}
