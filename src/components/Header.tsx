import {
  Box,
  Flex,
  Link,
  Button,
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
  IconButton,
  HStack,
  Container,
  Image,
  Text,
  StackDivider
} from '@chakra-ui/react';
import { CloseIcon, HamburgerIcon, MoonIcon, SunIcon } from '@chakra-ui/icons';
import logo from '../assets/logo.png'
import {
  Link as RouteLink
} from "react-router-dom";

type NavLinkProps = { text: string };
const NavLink = ({ text }: NavLinkProps) => (
  <Link>
    <Text fontSize="xl">{text}</Text>
  </Link>
);

const NavBar = () => (
  <HStack spacing={3} divider={<StackDivider />} as="nav">
    <RouteLink to="/">
      <NavLink text="Inicio" />
    </RouteLink>
    <RouteLink to="/contacto">
      <NavLink text="Contacto" />
    </RouteLink>
  </HStack>
);

export default function Nav() {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />

          <Box>
            <Image src={logo}></Image>
          </Box>
          <Container>
            <HStack spacing={8} alignItems={'center'}>
              <HStack
                as={'nav'}
                spacing={4}
                display={{ base: 'none', md: 'flex' }}>
                  <NavBar />
              </HStack>
            </HStack>
          </Container>
          
          <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
            <Flex alignItems={'center'}>
              <Stack direction={'row'} spacing={7}>
                <Button onClick={toggleColorMode}>
                  {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
                </Button>
              </Stack>
            </Flex>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}