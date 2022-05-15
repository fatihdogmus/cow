import { Global, Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { environment } from "../../../environments/environment";
import { Logger, LoggerOptions } from "typeorm";
import { changes } from "./migrations/changes";
import { dataMigrations } from "./migrations/data";
import { DatasourceController } from "./datasource.controller";
// eslint-disable-next-line @typescript-eslint/ban-types
let migrations: Function[];

if (environment.production) {
  migrations = changes;
} else {
  migrations = [...changes, ...dataMigrations];
}

@Global()
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: "postgres",
      host: environment.database.host,
      username: environment.database.username,
      password: environment.database.password,
      database: environment.database.database,
      autoLoadEntities: true,
      logger: environment.database.logger as
        | "advanced-console"
        | "debug"
        | "simple-console"
        | "file"
        | Logger
        | undefined,
      logging: environment.database.logging as LoggerOptions,
      migrations: migrations,
      migrationsRun: true
    })
  ],
  exports: [TypeOrmModule],
  controllers: [DatasourceController]
})
export class DatasourceModule {}
