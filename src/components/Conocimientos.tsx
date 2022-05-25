import {
    Stack,
    Text,
    Container,
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
    Badge
  } from '@chakra-ui/react'

export default function Conocimientos() {
    return(
        <>
        <Stack spacing={3}>
            <Text as="u" fontSize='3xl' >Conocimientos</Text>
        </Stack>
        <Container>
            <TableContainer>
                <Table variant='striped' colorScheme={'cyan'}>
                    <TableCaption>Tabla de conocimientos de lenguajes de programación</TableCaption>
                    <Thead>
                    <Tr>
                        <Th>Lenguaje de programación</Th>
                        <Th>Conocimiento</Th>
                    </Tr>
                    </Thead>
                    <Tbody>
                    <Tr>
                        <Td>JavaScript</Td>
                        <Td><Badge colorScheme='green'>Alto</Badge></Td>
                    </Tr>
                    <Tr>
                        <Td>Java</Td>
                        <Td><Badge colorScheme='green'>Alto</Badge></Td>
                    </Tr>
                    <Tr>
                        <Td>PHP</Td>
                        <Td><Badge colorScheme='green'>Alto</Badge></Td>
                    </Tr>
                    <Tr>
                        <Td>TypeScript</Td>
                        <Td><Badge colorScheme='green'>Alto</Badge></Td>
                    </Tr>
                    <Tr>
                        <Td>HTML5</Td>
                        <Td><Badge colorScheme='green'>Alto</Badge></Td>
                    </Tr>
                    <Tr>
                        <Td>CSS3</Td>
                        <Td><Badge colorScheme='green'>Alto</Badge></Td>
                    </Tr>
                    <Tr>
                        <Td>SQL</Td>
                        <Td><Badge colorScheme='yellow'>Medio</Badge></Td>
                    </Tr>
                    </Tbody>
                </Table>
            </TableContainer>

            <TableContainer>
                <Table variant='striped' colorScheme={'orange'}>
                    <TableCaption>Tabla de conocimientos de Frameworks y Librerías</TableCaption>
                    <Thead>
                    <Tr>
                        <Th>Nombre Framework</Th>
                        <Th>Conocimiento</Th>
                    </Tr>
                    </Thead>
                    <Tbody>
                    <Tr>
                        <Td>Angular</Td>
                        <Td><Badge colorScheme='yellow'>Medio</Badge></Td>
                    </Tr>
                    <Tr>
                        <Td>ReactJS</Td>
                        <Td><Badge colorScheme='yellow'>Medio</Badge></Td>
                    </Tr>
                    <Tr>
                        <Td>Bootstrap</Td>
                        <Td><Badge colorScheme='green'>Alto</Badge></Td>
                    </Tr>
                    <Tr>
                        <Td>VueJS</Td>
                        <Td><Badge colorScheme='yellow'>Medio</Badge></Td>
                    </Tr>
                    <Tr>
                        <Td>NodeJS</Td>
                        <Td><Badge colorScheme='yellow'>Medio</Badge></Td>
                    </Tr>
                    <Tr>
                        <Td>Laravel</Td>
                        <Td><Badge colorScheme='yellow'>Medio</Badge></Td>
                    </Tr>
                    </Tbody>
                </Table>
            </TableContainer>

            <TableContainer>
                <Table variant='striped'>
                    <TableCaption>Tabla de conocimientos de Programas de Microsoft</TableCaption>
                    <Thead>
                    <Tr>
                        <Th>Programa Microsoft</Th>
                        <Th>Conocimiento</Th>
                    </Tr>
                    </Thead>
                    <Tbody>
                    <Tr>
                        <Td>Microsoft Office 365</Td>
                        <Td><Badge colorScheme='green'>Alto</Badge></Td>
                    </Tr>
                    <Tr>
                        <Td>Dynamics 365</Td>
                        <Td><Badge colorScheme='yellow'>Medio</Badge></Td>
                    </Tr>
                    <Tr>
                        <Td>Power BI</Td>
                        <Td><Badge colorScheme='green'>Alto</Badge></Td>
                    </Tr>
                    <Tr>
                        <Td>SharePoint</Td>
                        <Td><Badge colorScheme='yellow'>Medio</Badge></Td>
                    </Tr>
                    <Tr>
                        <Td>OneDrive</Td>
                        <Td><Badge colorScheme='green'>Alto</Badge></Td>
                    </Tr>
                    </Tbody>
                </Table>
            </TableContainer>

            <TableContainer>
                <Table variant='striped' colorScheme={'purple'}>
                    <TableCaption>Tabla de conocimientos de Sistemas Operativos</TableCaption>
                    <Thead>
                    <Tr>
                        <Th>Nombre Sistema Operativo</Th>
                        <Th>Conocimiento</Th>
                    </Tr>
                    </Thead>
                    <Tbody>
                    <Tr>
                        <Td>Windows</Td>
                        <Td><Badge colorScheme='green'>Alto</Badge></Td>
                    </Tr>
                    <Tr>
                        <Td>Linux</Td>
                        <Td><Badge colorScheme='yellow'>Medio</Badge></Td>
                    </Tr>
                    <Tr>
                        <Td>MacOS</Td>
                        <Td><Badge colorScheme='yellow'>Medio</Badge></Td>
                    </Tr>
                    <Tr>
                        <Td>Android</Td>
                        <Td><Badge colorScheme='yellow'>Medio</Badge></Td>
                    </Tr>
                    </Tbody>
                </Table>
            </TableContainer>
        </Container>
        </>
    );
}