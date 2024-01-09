import express = require('express')
import MahasiswaController from '../controller/MahasiswaController'



const router = express.Router()

router.get("/", (req, res) => {
    res.send("Hello World!")
})



router.get("/mahasiswa", MahasiswaController.find )
router.get("/mahasiswa/:id", MahasiswaController.findOne )
router.post("/mahasiswa", MahasiswaController.create )
router.patch("/mahasiswa/:id", MahasiswaController.patch )
router.delete("/mahasiswa/:id", MahasiswaController.delete )




















export default router