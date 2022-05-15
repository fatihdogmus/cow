import { Module } from "@nestjs/common";
import { UserModule } from "../user/user.module";
import { SessionLoginStrategy } from "./application/service/SessionLogin.strategy";
import { AuthenticationCommandService } from "./application/service/AuthenticationCommand.service";
import { AuthenticationController } from "./infra/controller/Authentication.controller";
import { PassportModule } from "@nestjs/passport";
import { SessionSerializer } from "./application/service/Session.serializer";

@Module({
  imports: [UserModule, PassportModule.register({ session: true })],
  providers: [SessionLoginStrategy, AuthenticationCommandService, SessionSerializer],
  controllers: [AuthenticationController]
})
export class AuthenticationModule {}
