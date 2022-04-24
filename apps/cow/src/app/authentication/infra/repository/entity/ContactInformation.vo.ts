import { Column } from "typeorm";

export class ContactInformation {
  @Column({ name: "primary_email" })
  readonly primaryEmail: string;

  @Column({ name: "secondary_email" })
  readonly secondaryEmail?: string;

  @Column()
  readonly address?: string;

  @Column({ name: "phone_number" })
  readonly phoneNumber?: string;

  constructor(primaryEmail: string, secondaryEmail?: string, address?: string, phoneNumber?: string) {
    this.primaryEmail = primaryEmail;
    this.secondaryEmail = secondaryEmail;
    this.address = address;
    this.phoneNumber = phoneNumber;
  }
}
