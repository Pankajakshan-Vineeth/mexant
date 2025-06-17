import Contact from "./components/Contact/Contact";
import Crypto from "./components/Crypto/Crypto";
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
    </>
  );
};

export default App;
