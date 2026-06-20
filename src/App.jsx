import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Studio from "./pages/Studio";
import Aree from "./pages/Aree";
import Metodo from "./pages/Metodo";
import Contatti from "./pages/Contatti";
import Privacy from "./pages/Privacy";
import NotFound from "./pages/NotFound";
import { useIsDesktop } from "./hooks/useIsDesktop";
import { initLenis, destroyLenis } from "./lib/lenis";

export default function App() {
  const isDesktop = useIsDesktop();

  useEffect(() => {
    if (isDesktop) initLenis();
    return () => destroyLenis();
  }, [isDesktop]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="studio" element={<Studio />} />
          <Route path="aree" element={<Aree />} />
          <Route path="metodo" element={<Metodo />} />
          <Route path="contatti" element={<Contatti />} />
          <Route path="privacy" element={<Privacy />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
