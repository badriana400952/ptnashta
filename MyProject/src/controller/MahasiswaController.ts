import { Request, Response } from "express"
import MahasiswaService from "../service/MahasiswaService"


class MahasiswaController{
    
    find(req:Request,res:Response) {
        MahasiswaService.find(req,res)
    }
    findOne(req:Request,res:Response) {
        MahasiswaService.findOne(req,res)
    }
    create(req:Request,res:Response) {
        MahasiswaService.create(req,res)
    }
    patch(req:Request,res:Response) {
        MahasiswaService.patch(req,res)
    }
    delete(req:Request,res:Response) {
        MahasiswaService.delete(req,res)
    }
   
}

export default new MahasiswaController