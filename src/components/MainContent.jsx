function MainContent({ children }) {
  return (
    <div className="container mx-auto h-full bg-slate-800 mt-12 md:mt-4 m-0 rounded-tl-2xl rounded-tr-2xl grid grid-cols-1 gap-3 lg:grid-cols-2">
      {children}
    </div>
  );
}

export default MainContent;
