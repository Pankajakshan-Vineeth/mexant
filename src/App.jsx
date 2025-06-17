import Crypto from "./components/Crypto/Crypto"
import Grid from "./components/Grid/Grid"
import Hero from "./components/Hero/Hero"
import NavBar from "./components/NavBar/NavBar"

const App = () => {
  return (
    <>
      <NavBar/>
      <Hero/>
      <Grid/>
      <Crypto/>
    </>
  )
}

export default App
