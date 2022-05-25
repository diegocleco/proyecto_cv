import {
    Box
  } from "@chakra-ui/react"
  import Sobremi from "./Sobremi"
  import Estudios from "./Estudios"
  import Experiencia from "./Experiencia"
  import Conocimientos from "./Conocimientos"
  
  export default function Inicio() {
      return(
        <>
            <Box textAlign="center" fontSize="xl">
            <br></br>
            <br></br>
            <Sobremi />
            <br></br>
            <br></br>
            <Estudios />
            <Experiencia />
            <br></br>
            <br></br>
            <Conocimientos />
            </Box>
        </>
      )
  }