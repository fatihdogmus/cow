import { Module } from "@nestjs/common";
import { AuthenticationController } from "./infra/controller/authentication.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { User } from "./infra/repository/entity/User.entity";

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [AuthenticationController]
})
export class AuthenticationModule {}
