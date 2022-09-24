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
  
  export default function Portfolio() {
  
    return (
      <>
  
          <Container>
          <Grid templateColumns='repeat(4, 1fr)' gap={2}>
            <GridItem colSpan={2}>
                <Container maxW='md'>
                  <Text align={'justify'}>
                    Aquí irá mi portfolio
                  </Text>
                </Container>
            </GridItem>
          </Grid>
          </Container>
      </>
    );
  }