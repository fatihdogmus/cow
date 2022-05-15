import { Injectable, UnauthorizedException } from "@nestjs/common";
import { compare } from "bcrypt";
import { UserQueryService } from "../../../user/application/service/UserQuery.service";

@Injectable()
export class AuthenticationCommandService {
  constructor(private readonly userQueryService: UserQueryService) {}

  async authenticate(username: string, password: string) {
    const user = await this.userQueryService.findUser(username);
    if (user && (await compare(password, user.password))) {
      return user;
    }
    throw new UnauthorizedException();
  }
}
