import { Module } from "@nestjs/common";
import { UserModule } from "../user/user.module";
import { SessionLoginStrategy } from "./application/service/SessionLogin.strategy";
import { AuthenticationCommandService } from "./application/service/AuthenticationCommand.service";
import { AuthenticationController } from "./infra/controller/Authentication.controller";

@Module({
  imports: [UserModule],
  providers: [SessionLoginStrategy, AuthenticationCommandService],
  controllers: [AuthenticationController]
})
export class AuthenticationModule {}
