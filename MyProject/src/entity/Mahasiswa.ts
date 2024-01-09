import { Column, Entity,  PrimaryGeneratedColumn } from "typeorm"

@Entity({ name: "mahasiswa" })
export class Mahasiswa {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column()
    nim: number

    @Column()
    alamat: string

    @Column()
    jurusan: string

    @Column()
    smester: string



  
}

