import { Column, Entity } from "typeorm";
import { ContactInformation } from "./ContactInformation.vo";
import { BaseEntity } from "../../../common/entity/Base.entity";
import { Role } from "@cow/common";

@Entity("users")
export class User extends BaseEntity {
  @Column()
  username: string;

  @Column()
  password: string;

  @Column()
  name: string;

  @Column()
  surname: string;

  @Column({
    type: "enum",
    enum: Role,
    default: "ANONYMOUS"
  })
  role: Role;

  @Column(() => ContactInformation, { prefix: false })
  contactInformation: ContactInformation;

  constructor(
    username: string,
    password: string,
    name: string,
    surname: string,
    role: Role,
    contactInformation: ContactInformation
  ) {
    super();
    this.username = username;
    this.password = password;
    this.name = name;
    this.surname = surname;
    this.role = role;
    this.contactInformation = contactInformation;
  }
}
