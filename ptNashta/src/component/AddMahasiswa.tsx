import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    FormControl,
    Input,
    FormLabel,
    useDisclosure,
} from '@chakra-ui/react'
import React, { useState } from 'react'
import { useAppDispatch } from '../redux/stroe'
import { addDataMahasiswa, getDataMahasiswa } from '../redux/mahasiswa/mahasiswaSlice'
import { useNavigate } from 'react-router-dom'

const AddMahasiswa = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const initialRef = React.useRef(null)
    const finalRef = React.useRef(null)
    const dispatch = useAppDispatch()
    const navihgate = useNavigate()
    const [addMahasiwa, setAddMahasiswa] = useState({
        id: 0,
        name: '',
        nim: 0,
        alamat: '',
        jurusan: '',
        smester: 0,
    })
    const handleChane = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setAddMahasiswa({ ...addMahasiwa, [name]: value })
    }
    const handlePostMahasiswa = async (e: React.FormEvent) => {
        e.preventDefault()
        try {
            const res = await dispatch(addDataMahasiswa(addMahasiwa))
            console.log("ini res", res)
            dispatch(getDataMahasiswa(""))
            navihgate('/')
        } catch (error) {
            console.log(error)
        }

    }
    return (
        <>
            <Button onClick={onOpen}>Add Mahasiswa</Button>


            <Modal
                initialFocusRef={initialRef}
                finalFocusRef={finalRef}
                isOpen={isOpen}
                onClose={onClose}
            >
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Tambah Data Mahasiswa</ModalHeader>
                    <form onSubmit={handlePostMahasiswa}>
                        <ModalCloseButton />
                        <ModalBody pb={6}>
                            <FormControl>
                                <FormLabel>Nama</FormLabel>
                                <Input placeholder='Nama' name='name' type='text' onChange={handleChane} />
                            </FormControl>

                            <FormControl mt={4}>
                                <FormLabel>Nim</FormLabel>
                                <Input placeholder='Nim' name='nim' type='number' onChange={handleChane} />
                            </FormControl>

                            <FormControl mt={4}>
                                <FormLabel>Alamat</FormLabel>
                                <Input placeholder='Alamat' name='alamat' type='text' onChange={handleChane} />
                            </FormControl>

                            <FormControl mt={4}>
                                <FormLabel>Jurusan</FormLabel>
                                <Input placeholder='Jurusan' name='jurusan' type='text' onChange={handleChane} />
                            </FormControl>

                            <FormControl mt={4}>
                                <FormLabel>Smester</FormLabel>
                                <Input placeholder='Smester' name='smester' type='number' onChange={handleChane} />
                            </FormControl>

                        </ModalBody>
                        <ModalFooter>
                            <Button  type='submit' colorScheme='blue' mr={3} onClick={onClose}>
                                Save
                            </Button>
                            <Button onClick={onClose}>Cancel</Button>
                        </ModalFooter>
                    </form>
                </ModalContent>
            </Modal>
        </>
    )
}

export default AddMahasiswa