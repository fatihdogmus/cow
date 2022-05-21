import { Controller, Get } from "@nestjs/common";
import { HasAnyAuthority } from "@cow/common";
import { Role } from "@common";
import { UserQueryService } from "../../../application/service/UserQuery.service";

class UserResponse {
  constructor(
    public id: number,
    public username: string,
    public name: string,
    public surname: string,
    public role: Role
  ) {}
}

@Controller("users")
export class UserController {
  constructor(private readonly userQueryService: UserQueryService) {}

  @Get()
  @HasAnyAuthority(Role.ADMIN)
  async getAllUsers() {
    const users = await this.userQueryService.findAllUsers();
    return users.map(user => new UserResponse(user.id, user.username, user.name, user.surname, user.role));
  }
}
