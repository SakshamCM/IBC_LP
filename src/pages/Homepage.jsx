import About from "../components/About";
import Banner from "../components/Banner";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Infrastructure from "../components/Infrastructure";
import InPunjab from "../components/InPunjab";
import Navbar from "../components/Navbar";
import PlotSizes from "../components/PlotSizes";
import PrimeLocation from "../components/PrimeLocation";
import Surroundings from "../components/Surroundings";
import WhyChooseUs from "../components/WhyChooseUs";

let Homepage = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <About />
      <PrimeLocation />
      <WhyChooseUs />
      <Surroundings />
      <PlotSizes />
      <Infrastructure />
      <InPunjab />
      <Contact />
      <Footer />
    </>
  );
};

export default Homepage;
