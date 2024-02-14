const Navbar = ({ toggle }: { toggle: () => void }) => {
  return (
    <>
      <button
        type="button"
        className="inline-flex items-center md:hidden hover:text-black transition-colors duration-300"
        onClick={toggle}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            fill="currentColor"
            d="M3 6h18v2H3V6m0 5h18v2H3v-2m0 5h18v2H3v-2Z"
          />
        </svg>
      </button>
      <button
        className="hidden md:inline-block text-lg my-auto hover:underline hover:scale-110 transition-all duration-300 ease-in md:hover:scale-125 md:text-xl lg:text-3xl"
        type="button"
        onClick={toggle}
      >
        Prizes
      </button>
    </>
  );
};
export default Navbar;
