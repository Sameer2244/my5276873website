import './App.css';
import Navbar from './components/main components/Navbar';
import ImageSlider from './components/main components/ImageSlider';
import OfferingHeading from './components/main components/offering/OfferingHeading';
import K12products from './components/main components/products/K12products';
import HEEproducts from './components/main components/products/HEEproducts';
import Footer from './components/main components/Footer';
import Owlcarousel from './components/small components/Owlcarousel';
import Testimonials from './components/main components/Testimonials';
import Labsetup from './components/main components/products/Labsetup';
import Workshop from './components/main components/Workshop';
import Imageslidernew from './components/main components/Imageslidernew';
import Testimonialsnew from './components/main components/Testimonialsnew';
function App() {
  
  return (
    <div className="appContainer">
    <Navbar/>
    {/* <ImageSlider/> */}
    <Imageslidernew/>
    <OfferingHeading/>
    <K12products/>
    <HEEproducts/>
    {/* <Workshop/>
    <Labsetup/> */}
    <Owlcarousel/>
    <Testimonials/>
    {/* <Testimonialsnew/> */}
    <Footer/>
    </div>
  );
}

export default App;
