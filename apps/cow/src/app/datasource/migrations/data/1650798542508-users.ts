import { MigrationInterface, QueryRunner } from "typeorm";
import { User } from "../../../authentication/infra/repository/entity/User.entity";
import { ContactInformation } from "../../../authentication/infra/repository/entity/ContactInformation.vo";

export class Users_1650798542508 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    const contactInformation = new ContactInformation("fdogmus06@gmail.com", undefined, undefined, undefined);
    await queryRunner.manager
      .getRepository(User)
      .save(new User("admin", "admin", "Fatih", "Doğmuş", contactInformation));
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
