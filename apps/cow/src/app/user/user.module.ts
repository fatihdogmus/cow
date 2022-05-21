import { Module } from "@nestjs/common";
import { UserQueryService } from "./application/service/UserQuery.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { User } from "./application/domain/User.entity";
import { UserController } from "./infra/in/controller/UserController";

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [UserController],
  providers: [UserQueryService],
  exports: [UserQueryService]
})
export class UserModule {}
