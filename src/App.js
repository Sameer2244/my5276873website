import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Navbar from "./components/main components/Navbar";
import ImageSlider from "./components/main components/ImageSlider";
import OfferingHeading from "./components/main components/offering/OfferingHeading";
import K12products from "./components/main components/products/K12products";
import HEEproducts from "./components/main components/products/HEEproducts";
import Footer from "./components/main components/Footer";
import Owlcarousel from "./components/small components/Owlcarousel";
import Testimonials from "./components/main components/Testimonials";
import Labsetup from "./components/main components/products/Labsetup";
import Workshop from "./components/main components/Workshop";
import Imageslidernew from "./components/main components/Imageslidernew";
import Testimonialsnew from "./components/main components/Testimonialsnew";
import Contact from "./components/main components/Contact";
import ContactonHome from "./components/ContactonHome";
import EnablAR from "./components/main components/productpages/EnablAR";
function App() {
  return (
    <div>
    <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/" element={<AllComponents />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/EnablAR" element={<EnablAR />} />
        </Routes>

      
      <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;

function AllComponents() {
  return (
    <div>
      <ImageSlider />
      <OfferingHeading />
      <K12products />
      <HEEproducts />
      <Owlcarousel />
      <ContactonHome />
      <Testimonials />
    </div>
  );
}
