import { MigrationInterface, QueryRunner } from "typeorm";

export class MyMigration1704780608962 implements MigrationInterface {
    name = 'MyMigration1704780608962'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "mahasiswa" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "nim" integer NOT NULL, "alamat" character varying NOT NULL, "jurusan" character varying NOT NULL, "smester" character varying NOT NULL, CONSTRAINT "PK_2545c0aa4b454c7417d5c13bb2b" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "mahasiswa"`);
    }

}
