
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

import Hero from "./components/home/Hero";
import WhyChooseUs from "./components/home/WhyChooseUs";
import Statistics from "./components/home/Statistics";
import Testimonials from "./components/home/Testimonials";

import FeaturedProperties from "./components/property/FeaturedProperties";

import PopularCities from "./components/city/PopularCities";

function App() {
  return (
    <>
      <Navbar />

      <Hero />

      <FeaturedProperties />

      <WhyChooseUs />

      <PopularCities />

      <Statistics />

      <Testimonials />

      <Footer />
    </>
  );
}

export default App;