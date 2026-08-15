import { Routes, Route } from "react-router-dom"

import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import ScrollToTop from "./components/ScrollToTop"

import Home from "./pages/Home"
import About from "./pages/About"
import Services from "./pages/Services"
import Contact from "./pages/Contact"
import NotFound from "./pages/NotFound"

function App() {
  return (
    <div className="min-h-screen bg-white">

      <ScrollToTop />

      <Navbar />

      <main>
        <Routes>

          <Route
            path="/"
            element={
              <div className="page-transition">
                <Home />
              </div>
            }
          />

          <Route
            path="/about"
            element={
              <div className="page-transition">
                <About />
              </div>
            }
          />

          <Route
            path="/services"
            element={
              <div className="page-transition">
                <Services />
              </div>
            }
          />

          <Route
            path="/contact"
            element={
              <div className="page-transition">
                <Contact />
              </div>
            }
          />

          <Route
            path="*"
            element={
              <div className="page-transition">
                <NotFound />
              </div>
            }
          />

        </Routes>
      </main>

      <Footer />

    </div>
  )
}

export default App