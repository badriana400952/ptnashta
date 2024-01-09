import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { apiData } from "../../api/api";

export interface IMahasiswa {
    id: number
    name: string
    nim: number
    alamat: string
    jurusan: string
    smester: number
}

export interface MahasiswaState {
    mahasiswa: IMahasiswa[]
    loading: boolean
    error: string | null
}

const initialState: MahasiswaState = {
    mahasiswa: [],
    loading: false,
    error: null
}

export const getDataMahasiswa = createAsyncThunk('mahasiswa/getDataMahasiswa', async (q : string) => {
    try {
        const response = await apiData.get('/mahasiswa?q=' + q)
        return response.data
    } catch (error) {
        console.log(error)
        throw error
    }
})

export const DataMahasiswaID = createAsyncThunk('mahasiswa/DataMahasiswaID', async (id: number) => {
    try {
        const response = await apiData.get(`mahasiswa/${id}`)
        return response.data
    } catch (error) {
        console.log(error)
        throw error
    }
})

export const addDataMahasiswa = createAsyncThunk('mahasiswa/addDataMahasiswa', async (newData: IMahasiswa) => {
    try {
        const response = await apiData.post('/mahasiswa', newData)
        return response.data
    } catch (error) {
        console.log(error)
        throw error
    }
})

export const updateDataMahasiswa = createAsyncThunk('mahasiswa/updateDataMahasiswa', async ({ id, updateData }: { id: number, updateData: IMahasiswa }) => {
    try {
        const response = await apiData.patch(`/mahasiswa/${id}`, updateData)
        return response.data
    } catch (error) {
        console.log(error)
        throw error
    }
})

export const deleteDataMahasiswa = createAsyncThunk('mahasiswa/deleteDataMahasiswa', async (id: number) => {
    try {
        const response = await apiData.delete(`/mahasiswa/${id}`)
        return response.data
    } catch (error) {
        console.log(error)
        throw error
    }
})





const mahasiswaSlice = createSlice({
    name: 'mahasiswa',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            //get mahasiswa
            .addCase(getDataMahasiswa.pending, (state) => {
                state.loading = true
            })
            .addCase(getDataMahasiswa.fulfilled, (state, action) => {
                state.loading = false
                state.mahasiswa = action.payload
            })
            .addCase(getDataMahasiswa.rejected, (state) => {
                state.loading = false
                state.error = "error slice"
            })

            //get mahasiswa  id
            .addCase(DataMahasiswaID.pending, (state) => {
                state.loading = true
            })
            .addCase(DataMahasiswaID.fulfilled, (state, action) => {
                state.loading = false
                state.mahasiswa = action.payload
            })
            .addCase(DataMahasiswaID.rejected, (state) => {
                state.loading = false
                state.error = "error slice"
            })

            //add mahasiswa
            .addCase(addDataMahasiswa.pending, (state) => {
                state.loading = true
            })
            .addCase(addDataMahasiswa.fulfilled, (state, action) => {
                state.loading = false
                state.mahasiswa = action.payload
            })
            .addCase(addDataMahasiswa.rejected, (state) => {
                state.loading = false
                state.error = "error slice"
            })
            //edit mahasiswa
            .addCase(updateDataMahasiswa.pending, (state) => {
                state.loading = true
            })
            .addCase(updateDataMahasiswa.fulfilled, (state, action) => {
                state.loading = false
                state.mahasiswa = action.payload
            })
            .addCase(updateDataMahasiswa.rejected, (state) => {
                state.loading = false
                state.error = "error slice"
            })

            //delete mahasiswa
            .addCase(deleteDataMahasiswa.pending, (state) => {
                state.loading = true
            })
            .addCase(deleteDataMahasiswa.fulfilled, (state) => {
                state.loading = false
                state.error = "error slice"
            })
            .addCase(deleteDataMahasiswa.rejected, (state) => {
                state.loading = false
                state.error = "error slice"
            })
    }
})

export default mahasiswaSlice.reducer