import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableContainer,
    Container,
    Button,
    Text,
    VStack,
    FormControl,
    Box,
    Input,
    Flex,
} from '@chakra-ui/react'
import { useAppDispatch, useAppSelector } from '../redux/stroe'
import {  FormEvent, useEffect, useState } from 'react'
import {  deleteDataMahasiswa, getDataMahasiswa } from '../redux/mahasiswa/mahasiswaSlice'
import AddMahasiswa from './AddMahasiswa'
import { FaPencilAlt } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
import { Link } from 'react-router-dom'
const Home = () => {
    const dispatch = useAppDispatch()
    const { mahasiswa, loading } = useAppSelector((state) => state.mahasiswa)
    const [search, setSearch] = useState("")


    console.log("search",search)

    const handleDelete = async (id: number) => {
        await dispatch(deleteDataMahasiswa(id))
        dispatch(getDataMahasiswa(search))
    }
    const handleSearch = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        await dispatch(getDataMahasiswa(search))

    }

    useEffect(() => {
        dispatch(getDataMahasiswa(search))
    }, [dispatch,search])
    return (
        <>
            <Container maxW='container.lg' mt={10}>
                <Flex justifyContent={'start'} gap={5} alignItems={'center'}>
                <Button my={7}><AddMahasiswa /></Button>
                <form onSubmit={handleSearch} >
                    <Box display={'flex'} gap={5}>
                        <FormControl >
                           <Input type='text' padding={5} borderRadius={'10px'} width={'400px'} name='search' onChange={(e) => setSearch( e.target.value )} placeholder='search' />
                        </FormControl>

                        <FormControl >
                            <Button type='submit' marginLeft={'5px'}> cari</Button>
                        </FormControl>
                    </Box>
                </form>
                </Flex>

                <TableContainer rounded={'lg'} mt={10}>
                    <Table size='sm' variant='striped' colorScheme='gray' borderRadius='10px' >
                        <Thead p={3}>
                            <Tr>
                                <Th>Nama</Th>
                                <Th>Nim</Th>
                                <Th>Alamat</Th>
                                <Th>Jurusan</Th>
                                <Th>Smester</Th>
                                <Th>Action</Th>
                            </Tr>
                        </Thead>
                        <Tbody p={3}>
                            {loading ?
                                <VStack position={'absolute'} top={'200px'} left={'45%'} mt={10} >
                                    <Text >Loading . . </Text>
                                </VStack>
                                : Array.isArray(mahasiswa) && mahasiswa.map((mhs) => (
                                    <Tr key={mhs.id}>
                                        <Td>{mhs.name}</Td>
                                        <Td>{mhs.nim}</Td>
                                        <Td>{mhs.alamat}</Td>
                                        <Td>{mhs.jurusan}</Td>
                                        <Td>{mhs.smester}</Td>
                                        <Td display={'flex'} gap={3}>
                                            <Button><Link to={`/${mhs.id}`}><FaPencilAlt /></Link></Button>
                                            <Button onClick={() => handleDelete(mhs.id)}><AiFillDelete /></Button>
                                        </Td>

                                    </Tr>
                                ))}


                        </Tbody>
                    </Table>
                </TableContainer>
            </Container>

        </>
    )
}

export default Home
