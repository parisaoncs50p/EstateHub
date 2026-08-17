
import Hero from "../components/home/Hero";
import FeaturedProperties from "../components/property/FeaturedProperties";
import WhyChooseUs from "../components/home/WhyChooseUs";
import PopularCities from "../components/city/PopularCities";
import Statistics from "../components/home/Statistics";
import Testimonials from "../components/home/Testimonials";

function Home() {
  return (
    <>
      <Hero />
      <FeaturedProperties />
      <WhyChooseUs />
      <PopularCities />
      <Statistics />
      <Testimonials />
    </>
  );
}

export default Home;