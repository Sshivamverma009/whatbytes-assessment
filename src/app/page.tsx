import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ProductGrid from "@/components/ProductGrid";
import StoreProvider from "./StoreProvider";
import Sidebar from "@/components/Sidebar";

export default function Home() {
  return (
    <StoreProvider>
      <div className="min-h-screen flex flex-col">
        <Navbar />

        <div className="flex flex-col-reverse sm:flex-row sm:justify-center">
          <Sidebar />
          <div className="flex-1 p-6 ">
            <ProductGrid />
          </div>
        </div>
        <Footer />
      </div>
    </StoreProvider>
  );
}
