import Contact from "./components/Contact/Contact";
import Copyright from "./components/Copyright/Copyright";
import Crypto from "./components/Crypto/Crypto";
import Footer from "./components/Footer/Footer";
import Grid from "./components/Grid/Grid";
import Hero from "./components/Hero/Hero";
import NavBar from "./components/NavBar/NavBar";
import Table from "./components/Table/Table";
import Testimonials from "./components/Testimonials/Testimonials";
import Title from "./components/Title/Title";

const App = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <Grid />
      <Crypto />
      <Title subTitle="About Us" title="Know Us Better" />
      <Table />
      <Contact />
      <Title subTitle="Testimonials" title="What They Say" />
      <Testimonials/>
      <Footer/>
      <Copyright/>
    </>
  );
};

export default App;
