import { MigrationInterface, QueryRunner, TableColumn } from "typeorm";

export class COW7_1652889129455 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn("users", new TableColumn({ name: "role", type: "varchar(50)" }));
  }

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  public async down(): Promise<void> {}
}
