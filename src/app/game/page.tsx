"use client";
import Link from "next/link";
import { asd } from "@/gameL";
import { useState } from "react";

export default function GamePage() {
  const [effect, setEffect] = useState(false);
  const handleRefresh = () => {
    window.location.reload();
  };
  return (
    <section className="border-2 h-[75vh] m-8 rounded-xl border-green-700 ">
      <Link
        href={"/"}
        className="border-2  float-left m-4 p-2 transition-all duration-500 ease-linear hover:bg-red-600 rounded-lg"
      >
        Go Back
      </Link>
      <article>
        <p className="text-center mt-20 text-xl mx-auto">Your item:</p>
        <div className="text-center w-56 h-56 border-2 mt-6 mx-auto rounded-lg">
          {asd()}
        </div>
        <div className="grid justify-center">
          <button
            className={`border-2 w-64 h-16 my-20 hover:scale-110 transition-all duration-500 ease-linear hover:bg-green-700 rounded-lg ${
              effect && "animate-spins"
            }`}
            onClick={() => {
              setEffect(true);
              handleRefresh();
            }}
            onAnimationEnd={() => setEffect(false)}
          >
            Roll
          </button>
        </div>
      </article>
    </section>
  );
}
