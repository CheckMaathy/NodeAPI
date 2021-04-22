import {ConnectionIsNotSetError, MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateConnections1619108970366 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "Connections",
                columns: [
                    {
                        
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
