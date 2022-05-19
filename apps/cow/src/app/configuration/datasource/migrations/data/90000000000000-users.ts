import { MigrationInterface, QueryRunner } from "typeorm";
import { User } from "../../../../user/application/domain/User.entity";
import { ContactInformation } from "../../../../user/application/domain/ContactInformation.vo";
import { hash } from "bcrypt";
import { Role } from "@cow/common";

export class Users_9000000000000 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    const contactInformation = new ContactInformation("fdogmus06@gmail.com", undefined, undefined, undefined);
    await queryRunner.manager
      .getRepository(User)
      .save(new User("admin", await hash("admin", 10), "Fatih", "Doğmuş", Role.ADMIN, contactInformation));
  }

  public async down(): Promise<void> {
    return;
  }
}
