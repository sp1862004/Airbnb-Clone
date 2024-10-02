
import Filters from "./components/Filters";
import Footer from "./components/Footer";
import ImageSlider from "./components/ImgSlider";
import Navbar from "./components/Navbar";
import Rentals from "./components/Rentals";


function App() {
  return (
    
    <div className="">
      {/* Navbar */}
      <Navbar />

    
      {/* Filters */}
      <div className="sm:mx-6 md:mx-10 lg:mx-12 px-3">
        <Filters />
        {/* Rentals */}
        <Rentals />
        <ImageSlider/>
      </div>
    
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
