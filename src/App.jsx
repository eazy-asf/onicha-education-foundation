import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Programs from "./pages/Programs";
import Stories from "./pages/Stories";
import Events from "./pages/Events";
import GetInvolved from "./pages/GetInvolved";
import Board from "./pages/Board";
import StoryDetail from "./pages/StoryDetail";
import Totem from "./pages/Totem";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [pathname]);

  return null;
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen bg-cream text-ink">
        <Navbar />

        <Routes>
          {/* Main pages */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/stories" element={<Stories />} />
          <Route path="/stories/:storySlug" element={<StoryDetail />} />
          <Route path="/events" element={<Events />} />
          <Route path="/totem" element={<Totem />} />
          {/* Action page */}
          <Route path="/get-involved" element={<GetInvolved />} />

          {/* Organization page */}
          <Route path="/board" element={<Board />} />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
