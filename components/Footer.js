const Footer = () => {
  return (
    <footer className=" bg-red-600 w-full h-8">
      <div className="container mx-auto flex h-full justify-center items-center text-sm text-white font-serif font-medium">
        © Copyright {new Date().getFullYear()} Custom Hooks. All Rights
        Reserved.
      </div>
    </footer>
  );
};

export default Footer;
