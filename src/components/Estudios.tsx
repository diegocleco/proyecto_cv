import React from 'react';
import {
  Box,
  IconButton,
  useBreakpointValue,
  Stack,
  Text,
  Container,
  Image,
  Badge
} from '@chakra-ui/react';
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi';
import Slider from 'react-slick';
import juandegaray from '../assets/juandegaray.png'

const settings = {
  dots: true,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export default function Estudios() {
  // As we have used custom buttons, we need a reference variable to
  // change the state
  const [slider, setSlider] = React.useState<Slider | null>(null);

  // These are the breakpoints which changes the position of the
  // buttons as the screen size changes
  const top = useBreakpointValue({ base: '90%', md: '50%' });
  const side = useBreakpointValue({ base: '30%', md: '40px' });

  const estudio1 = {
    imageUrl: juandegaray,
    imageAlt: 'Centro de estudios donde se realizo la formación',
    title: 'CFGS Desarrollo de Aplicaciones Web',
    anos: '2018-2020',
  }

  const estudio2 = {
    imageUrl: juandegaray,
    imageAlt: 'Centro de estudios donde se realizo la formación',
    title: 'CFGS ASIR',
    anos: '2015-2017',
  }

  const estudio3 = {
    imageUrl: juandegaray,
    imageAlt: 'Centro de estudios donde se realizo la formación',
    title: 'CFGM Sistemas Microinformáticos y Redes',
    anos: '2013-2015',
  }

  return (

    <Container maxW='1000px'>
        <Stack spacing={3}>
            <Text as="u" fontSize='3xl' >Estudios</Text>
        </Stack>
        <Box
        position={'relative'}
        height={'600px'}
        width={'full'}
        overflow={'hidden'}>
        {/* CSS files for react-slick */}
        <link
            rel="stylesheet"
            type="text/css"
            charSet="UTF-8"
            href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
            rel="stylesheet"
            type="text/css"
            href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />

        {/* Left Icon */}
        <IconButton
            aria-label="left-arrow"
            variant="ghost"
            position="absolute"
            left={side}
            top={top}
            transform={'translate(0%, -50%)'}
            zIndex={2}
            onClick={() => slider?.slickPrev()}>
            <BiLeftArrowAlt size="40px" />
        </IconButton>

        {/* Right Icon */}
        <IconButton
            aria-label="right-arrow"
            variant="ghost"
            position="absolute"
            right={side}
            top={top}
            transform={'translate(0%, -50%)'}
            zIndex={2}
            onClick={() => slider?.slickNext()}>
            <BiRightArrowAlt size="40px" />
        </IconButton>

        {/* Slider */}
        <Slider {...settings} ref={(slider: any) => setSlider(slider)}>

        {/* DAW */}
        <Box maxW='lg' borderWidth='1px' borderRadius='lg' overflow='hidden'>
            <Image src={estudio1.imageUrl} alt={estudio1.imageAlt} />
    
            <Box p='6'>
            <Box display='flex' alignItems='baseline'>
                <Badge borderRadius='full' px='2' colorScheme='teal'>
                    Java
                </Badge>
                <Badge borderRadius='full' px='2' colorScheme='teal'>
                    HTML
                </Badge>
                <Badge borderRadius='full' px='2' colorScheme='teal'>
                    CSS
                </Badge>
                <Badge borderRadius='full' px='2' colorScheme='teal'>
                    PHP
                </Badge>
                <Badge borderRadius='full' px='2' colorScheme='teal'>
                    JavaScript
                </Badge>
                <Box
                color='gray.500'
                fontWeight='semibold'
                letterSpacing='wide'
                fontSize='xs'
                textTransform='uppercase'
                ml='2'
                >
                </Box>
            </Box>
    
            <Box
                mt='1'
                fontWeight='semibold'
                as='h4'
                lineHeight='tight'
                isTruncated
            >
                {estudio1.title}
            </Box>
    
            <Box>
                <Box as='span' color='gray.600' fontSize='sm'>
                    {/*DAW*/} {estudio1.anos}
                </Box>
            </Box>
    
            <Box display='flex' mt='2' alignItems='center'>
                Estudié el ciclo formativo de grado superior de desarrollo de aplicaciones web.
            </Box>
            </Box>
        </Box>

        {/** ASIR */}
        <Box maxW='lg' borderWidth='1px' borderRadius='lg' overflow='hidden'>
            <Image src={estudio2.imageUrl} alt={estudio2.imageAlt} />
    
            <Box p='6'>
            <Box display='flex' alignItems='baseline'>
                <Badge borderRadius='full' px='2' colorScheme='teal'>
                    HTML
                </Badge>
                <Badge borderRadius='full' px='2' colorScheme='teal'>
                    CSS
                </Badge>
                <Badge borderRadius='full' px='2' colorScheme='teal'>
                    PHP
                </Badge>
                <Box
                color='gray.500'
                fontWeight='semibold'
                letterSpacing='wide'
                fontSize='xs'
                textTransform='uppercase'
                ml='2'
                >
                </Box>
            </Box>
    
            <Box
                mt='1'
                fontWeight='semibold'
                as='h4'
                lineHeight='tight'
                isTruncated
            >
                {estudio2.title}
            </Box>
    
            <Box>
                <Box as='span' color='gray.600' fontSize='sm'>
                    {/*ASIR*/} {estudio2.anos}
                </Box>
            </Box>
    
            <Box display='flex' mt='2' alignItems='center'>
                Estudié el ciclo formativo de grado superior de administración de sistemas informáticos y redes.
            </Box>
            </Box>
        </Box>

        {/** SMR */}
        <Box maxW='lg' borderWidth='1px' borderRadius='lg' overflow='hidden'>
            <Image src={estudio3.imageUrl} alt={estudio3.imageAlt} />
    
            <Box p='6'>
            <Box display='flex' alignItems='baseline'>
                <Badge borderRadius='full' px='2' colorScheme='teal'>
                    HTML
                </Badge>
                <Badge borderRadius='full' px='2' colorScheme='teal'>
                    CSS
                </Badge>
                <Box
                color='gray.500'
                fontWeight='semibold'
                letterSpacing='wide'
                fontSize='xs'
                textTransform='uppercase'
                ml='2'
                >
                </Box>
            </Box>
    
            <Box
                mt='1'
                fontWeight='semibold'
                as='h4'
                lineHeight='tight'
                isTruncated
            >
                {estudio3.title}
            </Box>
    
            <Box>
                <Box as='span' color='gray.600' fontSize='sm'>
                    {/*SMR*/} {estudio3.anos}
                </Box>
            </Box>
    
            <Box display='flex' mt='2' alignItems='center'>
                Estudié el ciclo formativo de grado medio de sistemas microinformáticos y redes.
            </Box>
            </Box>
        </Box>
        </Slider>
        </Box>
    </Container>
  );
}