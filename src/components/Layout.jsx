import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import CookieBanner from "./CookieBanner";
import { getLenis } from "../lib/lenis";

export default function Layout() {
  const { pathname } = useLocation();

  useEffect(() => {
    const lenis = getLenis();
    if (lenis) {
      lenis.scrollTo(0, { immediate: true });
    } else {
      window.scrollTo({ top: 0, behavior: "instant" });
    }
  }, [pathname]);

  return (
    <div className="flex flex-col min-h-screen bg-bg text-ink">
      <Navbar />
      {/* pt-[72px] compensa la navbar fixed */}
      <main id="main-content" className="flex-1 pt-[72px]" tabIndex={-1}>
        <Outlet />
      </main>
      <Footer />
      <CookieBanner />
    </div>
  );
}
