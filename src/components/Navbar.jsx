function Navbar({ children }) {
  return (
    <header className="flex h-20 w-full justify-between p-6 top-0 mb-8 fixed z-50 bg-inherit">
      {children}
      <div className="text-2xl hidden md:block">
        <button className="hover:cursor-pointer">
          <svg
            className={`h-6 w-6 `}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
        {/* <svg
          className={`h-6 w-6 `}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M6 18L18 6M6 6l12 12"
          />
        </svg> */}
      </div>
    </header>
  );
}

export default Navbar;
