import { Like, Repository } from "typeorm"

import { AppDataSource } from "../data-source"
import { Request, Response } from "express"
import { Mahasiswa } from "../entity/Mahasiswa"

class MahasiswaService{
    private readonly MahasiswaRepository: Repository<Mahasiswa> = AppDataSource.getRepository(Mahasiswa)

    async find(req: Request, res: Response){
        const mahasiswa = await this.MahasiswaRepository.find(
            {
                where: [
                    {
                        name: Like(`%${req.query.q}%`)
                    }
                ]
            }
        )
        res.send(mahasiswa)
    }

    async findOne(req: Request, res: Response){
        const { id } = req.params
        const mahasiswa = await this.MahasiswaRepository.findOneBy({ id: Number(id) })
        res.send(mahasiswa)
    }

    async create(req: Request, res: Response){
        const { name, nim , alamat, jurusan, smester } = req.body
        
       try {
        const result =  this.MahasiswaRepository.create({
            name: name,
            nim: nim,
            alamat: alamat,
            jurusan: jurusan,
            smester: smester
        })
        console.log("result", result)
        const mahasiswa = await this.MahasiswaRepository.save(result)
        console.log("mahasiswa", mahasiswa)
        res.status(201).json(mahasiswa)
        
       } catch (error) {
        console.log(error)
       }
    }

    async patch(req: Request, res: Response){
       try {
        const{id} = req.params
        const { name, nim , alamat, jurusan, smester } = req.body

        const mahasiswaID = await this.MahasiswaRepository.findOne({
            where:{
                id: Number(id)
            }
        })
        
        mahasiswaID.name = name
        mahasiswaID.nim = nim
        mahasiswaID.alamat = alamat
        mahasiswaID.jurusan = jurusan
        mahasiswaID.smester = smester
        const mahasiswaSave = await this.MahasiswaRepository.save(mahasiswaID)
        res.status(200).json(mahasiswaSave)
        
        
       } catch (error) {
        console.log(error)
       }
    }
    async delete(req: Request, res: Response){
        try {
            const {id} = req.params
            const mahasiswaID = await this.MahasiswaRepository.findOne({
                where:{
                    id: Number(id)
                }
            })
            const deletes = await this.MahasiswaRepository.remove(mahasiswaID)
            res.status(200).json("berhasil di hapus")
        } catch (error) {
            console.log(error)
        }
    }
   
}

export default new MahasiswaService