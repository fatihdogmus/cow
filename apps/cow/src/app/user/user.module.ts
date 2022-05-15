import { Module } from "@nestjs/common";
import { UserQueryService } from "./application/service/UserQuery.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { User } from "./application/domain/User.entity";

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [],
  providers: [UserQueryService],
  exports: [UserQueryService]
})
export class UserModule {}
