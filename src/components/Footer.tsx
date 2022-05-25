import {
    Box,
    chakra,
    Container,
    Image,
    Stack,
    Text,
    useColorModeValue,
    VisuallyHidden,
  } from '@chakra-ui/react';
  import { FaGithub, FaLinkedin } from 'react-icons/fa';
  import { ReactNode } from 'react';
  import { MdEmail } from 'react-icons/md';
  import logo from '../assets/logo.png'
  
  const SocialButton = ({
    children,
    label,
    href,
  }: {
    children: ReactNode;
    label: string;
    href: string;
  }) => {
    return (
      <chakra.button
        bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
        rounded={'full'}
        w={8}
        h={8}
        cursor={'pointer'}
        as={'a'}
        href={href}
        display={'inline-flex'}
        alignItems={'center'}
        justifyContent={'center'}
        transition={'background 0.3s ease'}
        _hover={{
          bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
        }}>
        <VisuallyHidden>{label}</VisuallyHidden>
        {children}
      </chakra.button>
    );
  };
  
  export default function SmallWithLogoLeft() {
    return (
      <Box
        bg={useColorModeValue('gray.50', 'gray.900')}
        color={useColorModeValue('gray.700', 'gray.200')}>
        <Container
          as={Stack}
          maxW={'6xl'}
          py={4}
          direction={{ base: 'column', md: 'row' }}
          spacing={4}
          justify={{ base: 'center', md: 'space-between' }}
          align={{ base: 'center', md: 'center' }}>
          <Image src={logo} />
          <Text>Web realizada con React y Chakra UI.</Text>
          <Stack direction={'row'} spacing={6}>
            <SocialButton label={'Email'} href={'mailto:diego.14.cle@gmail.com'}>
              <MdEmail />
            </SocialButton>
            <SocialButton label={'Github'} href={'https://github.com/diegocleco'}>
              <FaGithub />
            </SocialButton>
            <SocialButton label={'Linkedin'} href={'https://www.linkedin.com/in/diego-clemente-927b6214a/'}>
              <FaLinkedin />
            </SocialButton>
          </Stack>
        </Container>
      </Box>
    );
  }