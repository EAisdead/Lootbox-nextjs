import Link from "next/link";
export default function EAFooter() {
  return (
    <footer className="w-full p-4 text-xs m-auto text-center bottom-0 relative mt-8 border-t-[3px] border-t-red-600">
      <p>
        Built by:
        <Link href="/" className=" text-red-600 hover:underline">
          EA
        </Link>
      </p>
      <h6 className=" font-mono opacity-20">Its all relative.</h6>
    </footer>
  );
}
