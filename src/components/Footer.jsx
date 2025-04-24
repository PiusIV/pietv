function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="flex flex-col gap-6 text-center h-auto w-full text-white font-bold mb-8 mt-5">
      <p className="capitalize text-green-400 flex flex-col gap-3 cursor-pointer">
        <span className="text-white">PieTV+&trade; </span>
        <span className="opacity-60 hover:opacity-100">
          made with ❤ by Pius
        </span>
      </p>
      <p className="uppercase">
        All rights reserved <span className="lowercase font-mini">&copy; </span>
        {currentYear}
      </p>
    </footer>
  );
}

export default Footer;
