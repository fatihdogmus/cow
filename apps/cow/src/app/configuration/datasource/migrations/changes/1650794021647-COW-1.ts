import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class COW1_1650794021647 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "users",
        columns: [
          { name: "id", type: "bigserial", isNullable: false, isPrimary: true, generatedIdentity: "ALWAYS" },
          { name: "version", type: "int", default: "0" },
          { name: "creation_date", type: "timestamp", default: "now()" },
          { name: "last_update_date", type: "timestamp", isNullable: true },
          { name: "username", type: "varchar", length: "50" },
          { name: "password", type: "varchar", length: "500" },
          { name: "name", type: "varchar", length: "50" },
          { name: "surname", type: "varchar", length: "50" },
          { name: "primary_email", type: "varchar", length: "50" },
          { name: "secondary_email", type: "varchar", length: "50", isNullable: true },
          { name: "address", type: "varchar", length: "500", isNullable: true },
          { name: "phone_number", type: "varchar", length: "50", isNullable: true }
        ]
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
