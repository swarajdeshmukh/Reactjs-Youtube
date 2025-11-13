//Dynamic routing

import { Route, Router, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Product from "./pages/Product"
import Contact from "./pages/Contact"
import About from "./pages/About"
import Navbar from "./components/Navbar"
import Mens from "./pages/Mens"
import Kids from "./pages/Kids"
import Women from "./pages/Women"
import Notfound from "./pages/Notfound"
import Footer from "./pages/Footer"
import Cources from "./pages/Cources"
import CourceDetails from "./pages/CourceDetails"
import Navbar2 from "./components/Navbar2"


const App = () => {
  return (
    <div>
      <Navbar />
      <Navbar2 />
      <div className="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cources" element={<Cources />} />
          <Route path="/cources/:id" element={<CourceDetails />} />
          <Route path="/product" element={<Product />}>
            <Route path="mens" element={<Mens />} />
            <Route path="women" element={<Women />} />
            <Route path="kids" element={<Kids />} />
          </Route>



          <Route path="*" element={<Notfound />} />
        </Routes>
      </div>
      <Footer />
    </div>
  )
}

export default App
