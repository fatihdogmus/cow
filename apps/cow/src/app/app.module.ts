import { Module } from "@nestjs/common";
import { AuthenticationModule } from "./authentication/authentication.module";
import { DatasourceModule } from "./datasource/datasource.module";

@Module({
  imports: [AuthenticationModule, DatasourceModule]
})
export class AppModule {}
