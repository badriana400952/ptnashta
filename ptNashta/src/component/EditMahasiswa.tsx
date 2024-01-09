/* eslint-disable react-hooks/exhaustive-deps */
import { Container, FormControl, FormLabel, VStack, Input, Button } from "@chakra-ui/react"
import React, { useState } from "react"
import { useAppDispatch, useAppSelector,  } from "../redux/stroe"
import { IMahasiswa, getDataMahasiswa, updateDataMahasiswa } from "../redux/mahasiswa/mahasiswaSlice"
import { Link, useNavigate, useParams } from "react-router-dom"

const EditMahasiswa = () => {
    const dispatch = useAppDispatch()
    const { id } = useParams()
    const navigate = useNavigate()

    
    const { mahasiswa } = useAppSelector((state) => state.mahasiswa)
    React.useEffect(() => {
        setUpdateMahasiswa(mahasiswa?.find((item) => item.id === Number(id)) ||{
            id: Number(id),
            name: "",
            nim: 0,
            alamat: "",
            jurusan: "",
            smester: 0,
        } )
    }, [id])
    const [updateMahasiswa, setUpdateMahasiswa] = useState<IMahasiswa>({
        id: Number(id),
        name: "",
        nim: 0,
        alamat: "",
        jurusan: "",
        smester: 0,
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setUpdateMahasiswa({ ...updateMahasiswa, [name]: value })
    }
    
    const handleSubmitMahasiswa = async (e: React.FormEvent) => {
        e.preventDefault()
        try {
            await dispatch(updateDataMahasiswa({ id: Number(id), updateData: updateMahasiswa }));
            dispatch(getDataMahasiswa(""))
            navigate('/')
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <Container maxW='container.xl'>
                <form onSubmit={handleSubmitMahasiswa}>
                <Button my={5}><Link to='/'>Back</Link></Button>

                    <VStack width='40%' m={'auto'} boxShadow='lg'>
                        <FormControl px={5}>
                            <FormLabel>Nama</FormLabel>
                            <Input placeholder='Nama' name='name' value={updateMahasiswa?.name} type='text' onChange={handleChange} />
                        </FormControl>

                        <FormControl px={5} mt={4}>
                            <FormLabel>Nim</FormLabel>
                            <Input placeholder='Nim' name='nim' type='number' value={updateMahasiswa?.nim} onChange={handleChange} />
                        </FormControl>

                        <FormControl px={5} mt={4}>
                            <FormLabel>Alamat</FormLabel>
                            <Input placeholder='Alamat' name='alamat' type='text' onChange={handleChange}  value={updateMahasiswa?.alamat} />
                        </FormControl>

                        <FormControl px={5} mt={4}>
                            <FormLabel>Jurusan</FormLabel>
                            <Input placeholder='Jurusan' name='jurusan' type='text' onChange={handleChange}  value={updateMahasiswa?.jurusan} />
                        </FormControl>

                        <FormControl px={5}>
                            <FormLabel>Smester</FormLabel>
                            <Input placeholder='Smester' name='smester' type='number' onChange={handleChange}  value={updateMahasiswa?.smester} />
                        </FormControl>

                        <FormControl px={5} my={6}>
                            <Button type="submit">Edit</Button>
                        </FormControl>
                    </VStack>
                </form>
            </Container>
        </>
    )
}

export default EditMahasiswa
