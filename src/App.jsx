import Crypto from "./components/Crypto/Crypto"
import Grid from "./components/Grid/Grid"
import Hero from "./components/Hero/Hero"
import NavBar from "./components/NavBar/NavBar"
import Table from "./components/Table/Table"
import Title from "./components/Title/Title"

const App = () => {
  return (
    <>
      <NavBar/>
      <Hero/>
      <Grid/>
      <Crypto/>
      <Title subTitle="About Us" title="Know Us Better"/>
      <Table/>
    </>
  )
}

export default App
