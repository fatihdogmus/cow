import { Controller, Get } from "@nestjs/common";
import { Connection } from "typeorm";

@Controller("dev")
export class DatasourceController {
  constructor(private connection: Connection) {}

  @Get("resetDatabase")
  async resetDatabase() {
    await this.connection.dropDatabase();
    await this.connection.runMigrations();

    return "The database has been reset successfully";
  }
}
