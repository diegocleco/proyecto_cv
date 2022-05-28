import {
  Box,
  Container,
  Accordion,
  AccordionPanel,
  AccordionButton,
  AccordionItem,
  AccordionIcon,
  Stack,
  Text
} from '@chakra-ui/react';

const experiencia1 = {
    empresa: "Imagina Web & Mobile Technologies",
    anos: "Desde el 10/06/2020 hasta la actualidad",
    tarea1: "Creación de cursos online:  React, Angular, JavaScript, Java, HTML5 y CSS3, Spring Boot, MongoDB, PHP MySQL y Ajax, Spark con Scala, Android, Hacking Ético",
    tarea2: "Resolución de dudas online",
    tarea3: "Corrección de ejercicios de los cursos online",
    tarea4: "Evaluación de los alumnos",
    tarea5: "Comunicación con freelance",
    tarea6: "Mantenimiento de los equipos",
    tarea7: "Instalación y configuración de SO",
    tareas: [
        "Creación de cursos online",
        "Resolución de dudas online",
        "Corrección de ejercicios de los cursos online",
        "Evaluación de los alumnos",
        "Comunicación con freelance"
    ],
}

const experiencia2 = {
    empresa: "Generación Online SL",
    anos: "Del 01/12/2017 al 02/02/2018",
    tarea1: "Programación de la página web",
    tarea2: "Mantenimiento y realización de copias de seguridad de la base de datos",
    tareas: [ "Programación de la página web", "Mantenimiento y realización de copias de seguridad de la base de datos" ]
}


export default function Experiencia(){
    return (
        <>
        <Stack spacing={3}>
            <Text as="u" fontSize='3xl' >Experiencia profesional</Text>
        </Stack>
        <Container>
            <Accordion allowToggle>
                <AccordionItem>
                    <h2>
                    <AccordionButton>
                        <Box flex='1' textAlign='left'>
                            Profesor de e-learning
                        </Box>
                        <AccordionIcon />
                    </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                        <b>Empresa:</b> {experiencia1.empresa}
                    </AccordionPanel>
                    <AccordionPanel pb={4}>
                        <b>Años:</b> {experiencia1.anos}
                    </AccordionPanel>
                    <AccordionPanel pb={4}>
                        <b>Tareas realizadas:</b> <br />
                        {experiencia1.tarea1} <br />
                        {experiencia1.tarea2} <br />
                        {experiencia1.tarea3} <br />
                        {experiencia1.tarea4} <br />
                        {experiencia1.tarea5} <br />
                    </AccordionPanel>
                </AccordionItem>

                <AccordionItem>
                    <h2>
                    <AccordionButton>
                        <Box flex='1' textAlign='left'>
                            Programador PHP
                        </Box>
                        <AccordionIcon />
                    </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                        <b>Empresa:</b> {experiencia2.empresa}
                    </AccordionPanel>
                    <AccordionPanel pb={4}>
                        <b>Años:</b> {experiencia2.anos}
                    </AccordionPanel>
                    <AccordionPanel pb={4}>
                        <b>Tareas realizadas:</b> <br />
                        {experiencia2.tarea1} <br />
                        {experiencia2.tarea2} <br />
                    </AccordionPanel>
                </AccordionItem>
            </Accordion>
        </Container>
        </>
    );
}