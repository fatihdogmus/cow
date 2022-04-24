import { CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn, VersionColumn } from "typeorm";

@Entity()
export class BaseEntity {
  @PrimaryGeneratedColumn({ name: "id" }) private _id: number;

  @VersionColumn({ name: "version" })
  private readonly _version: number;

  @CreateDateColumn({ type: "timestamp", default: () => "now()", name: "creation_date" })
  private _creationDate: Date;

  @UpdateDateColumn({
    type: "timestamp",
    default: () => "now()",
    onUpdate: "now()",
    name: "last_update_date"
  })
  private _lastUpdateDate: Date;

  get id(): number {
    return this._id;
  }

  get version(): number {
    return this._version;
  }

  get creationDate(): Date {
    return this._creationDate;
  }

  get lastUpdateDate(): Date {
    return this._lastUpdateDate;
  }
}
