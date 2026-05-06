import { Footer } from "@/components/shared/Footer";
import { Navbar } from "@/components/shared/Navbar";


export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
    <Navbar />
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      {children}
    </div>
    <Footer />
    </>
  );
}