
import { Grid } from "@mui/material"
import Banner from "./components/Banner/Banner"
import Navbar from "./components/Navbar/Navbar"
import WhyUs from "./components/WhyUs/WhyUs"
import About from "./components/About/About"

function App() {
  

  return (
    <>
    
     <Navbar></Navbar>

      <Grid sx={{pt:8}}>
      <Banner></Banner>
      <WhyUs></WhyUs>
      <About></About>
      </Grid>
    

     
    </>
  )
}

export default App
