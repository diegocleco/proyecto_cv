import {
  Box,
  Stack,
  Text,
  Container,
  Grid,
  Image,
  GridItem
} from '@chakra-ui/react';
import fotocv from '../assets/fotocv.png'

export default function Sobremi() {

  return (
    <>
        <Stack spacing={3}>
            <Text as="u" fontSize='3xl' >Sobre mí</Text>
        </Stack>

        <Container>
        <Grid templateColumns='repeat(4, 1fr)' gap={2}>
          <GridItem colSpan={2}>
              <Container maxW='md'>
                <Text align={'justify'}>
                  Tras unos años de experiencia, he 
                  tomado la decisión de reorientar mi 
                  carrera profesional con el ánimo de 
                  continuar aprendiendo y, también, 
                  aportar toda mi experiencia adquirida. 
                  Considero que el cambio es un signo de 
                  capacidad de superación y, por ello, 
                  creo que siempre sería capaz de aportar 
                  valor en la empresa en la que me 
                  encuentre.
                </Text>
              </Container>
          </GridItem>

          <GridItem colSpan={2}>
            <Box boxSize='sm'>
              <Image borderRadius='full' boxSize='350px' src={fotocv} alt='Diego Clemente' />
            </Box>
          </GridItem>
        </Grid>
        </Container>
    </>
  );
}