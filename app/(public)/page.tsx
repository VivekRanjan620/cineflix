import { Loader } from "@/components/shared/Loader";
import { Navbar } from "@/components/shared/Navbar";
import { Hero } from "@/components/home/Hero";
import { Trending } from "@/components/home/Trending";
import { Trailers } from "@/components/home/Trailers";
import { Affiliate } from "@/components/home/Affiliate";
import { Categories } from "@/components/home/Categories";
import { Featured } from "@/components/home/Featured";
import { Newsletter } from "@/components/home/Newsletter";
import { Footer } from "@/components/shared/Footer";
import { BackToTop } from "@/components/shared/BackToTop";
import { DashboardFAB } from "@/app/dashboard/_components/DashboardFAB";
import { AffiliateEarning } from "@/components/home/AffiliateEarning";
import { YouTubeEarning } from "@/components/home/YouTubeEarning";
import { TrailerEarning } from "@/components/home/TrailerEarning";

export default function Page() {
  return (
    <>
      <Loader />
      <Navbar />
      <main>
        <Hero />
        <Trending />
        <Trailers />
        <Featured />
        <AffiliateEarning />
        <YouTubeEarning />
        <TrailerEarning />
        <Categories />
        <Affiliate />
        <Newsletter />
      </main>
      <Footer />
      <BackToTop />
      <DashboardFAB />
    </>
  );
}
