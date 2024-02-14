import SidebarCont from "./sidebarCont";

const Sidebar = ({
  isOpen,
  toggle,
}: {
  isOpen: boolean;
  toggle: () => void;
}) => {
  return (
    <>
      <div
        className="flex flex-col bg-green-700 top-0 z-20 fixed h-full w-[80%] sm:w-[60%]
        transition-all .3s ease-in-out "
        style={{
          opacity: `${isOpen ? "1" : "0"}`,
          right: ` ${isOpen ? "0" : "-100%"}`,
        }}
      >
        <button
          className="absolute right-0 p-3 hover:text-black transition-colors duration-300"
          onClick={toggle}
        >
          {/* Close icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="36"
            height="36"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z"
            />
          </svg>
        </button>

        <ul className="text-center leading-relaxed text-xl mt-14">
          <SidebarCont />
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
