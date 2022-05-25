import {
  ChakraProvider,
  Box,
  theme,
} from "@chakra-ui/react"
import  Nav  from "./components/Header"
import Footer from "./components/Footer"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Contacto from "./components/Contacto"
import Inicio from "./components/Inicio"

export const App = () => (
  <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
        </BrowserRouter>
        <Footer />
      </Box>
  </ChakraProvider>
)
