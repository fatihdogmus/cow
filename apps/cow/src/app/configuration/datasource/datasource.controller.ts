import { Controller, Get } from "@nestjs/common";
import { Connection } from "typeorm";
import { Public } from "@cow/common";

@Controller("dev")
export class DatasourceController {
  constructor(private connection: Connection) {}

  @Public()
  @Get("resetDatabase")
  async resetDatabase() {
    await this.connection.dropDatabase();
    await this.connection.runMigrations();

    return "The database has been reset successfully";
  }
}
