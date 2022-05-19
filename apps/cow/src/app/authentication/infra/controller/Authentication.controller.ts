import { Controller, Get, Post, Req, UseGuards } from "@nestjs/common";
import { MessageResponse } from "@cow/common";
import { SessionLoginGuard } from "../../application/service/SessionLogin.guard";
import { Public } from "../../application/service/Public.decorator";
import { Request } from "express";
import { LoggedInUser } from "../../application/service/Session.serializer";
import { UserQueryService } from "../../../user/application/service/UserQuery.service";

@Controller("auth")
export class AuthenticationController {
  constructor(private readonly userQueryService: UserQueryService) {}

  @UseGuards(SessionLoginGuard)
  @Public()
  @Post("login")
  async login() {
    return new MessageResponse("User has been logged in successfully", "INFO");
  }

  @Get("loggedInUser")
  @Public()
  async getLoggedInUser(@Req() request: Request) {
    if (request.user) {
      const user = await this.userQueryService.findUser((request.user as LoggedInUser).username);
      return {
        id: user?.id,
        username: user?.username,
        name: user?.name,
        surname: user?.surname,
        role: user?.role
      };
    }
    return null;
  }
}
