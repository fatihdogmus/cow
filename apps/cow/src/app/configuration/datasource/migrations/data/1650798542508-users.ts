import { MigrationInterface, QueryRunner } from "typeorm";
import { User } from "../../../../user/application/domain/User.entity";
import { ContactInformation } from "../../../../user/application/domain/ContactInformation.vo";
import { hash } from "bcrypt";

export class Users_1650798542508 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    const contactInformation = new ContactInformation("fdogmus06@gmail.com", undefined, undefined, undefined);
    await queryRunner.manager
      .getRepository(User)
      .save(new User("admin", await hash("admin", 10), "Fatih", "Doğmuş", contactInformation));
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    return;
  }
}
