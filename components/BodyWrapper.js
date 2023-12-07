import Header from "./Header";
import Footer from "./Footer";

const BodyWrapper = ({ children }) => {
  return (
    <div className="min-h-screen bg-red-100 flex flex-col">
      <Header />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
};

export default BodyWrapper;
