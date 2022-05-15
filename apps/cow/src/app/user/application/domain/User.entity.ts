import { Column, Entity } from "typeorm";
import { ContactInformation } from "./ContactInformation.vo";
import { BaseEntity } from "../../../common/entity/Base.entity";

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

  @Column(() => ContactInformation, { prefix: false })
  contactInformation: ContactInformation;

  constructor(
    username: string,
    password: string,
    name: string,
    surname: string,
    contactInformation: ContactInformation
  ) {
    super();
    this.username = username;
    this.password = password;
    this.name = name;
    this.surname = surname;
    this.contactInformation = contactInformation;
  }
}
