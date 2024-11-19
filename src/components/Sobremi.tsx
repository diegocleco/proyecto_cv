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
                Soy un programador con 2 años de experiencia en el desarrollo de software. 
                A lo largo de mi carrera, he tenido la oportunidad de participar en proyectos tanto a nivel nacional como europeo. 
                Mi objetivo es unirme a una empresa donde pueda aportar mis conocimientos y seguir desarrollándome profesionalmente.
                </Text>
              </Container>
          </GridItem>

          <GridItem colSpan={2}>
            <Box boxSize='sm'>
              <Image borderRadius='full' width={[ '50%', '60%', '75%', '100%']} height={['50%', '60%', '75%', '100%']} src={fotocv} alt='Diego Clemente' />
            </Box>
          </GridItem>
        </Grid>
        </Container>
    </>
  );
}