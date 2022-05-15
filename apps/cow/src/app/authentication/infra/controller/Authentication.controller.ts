import { Controller, Get, Post, UseGuards } from "@nestjs/common";
import { MessageResponse } from "@cow/common";
import { SessionLoginGuard } from "../../application/service/SessionLogin.guard";
import { LoggedInGuard } from "../../application/service/LoggedIn.guard";

@Controller("auth")
export class AuthenticationController {
  @UseGuards(SessionLoginGuard)
  @Post("login")
  async login() {
    return new MessageResponse("User has been logged in successfully", "INFO");
  }

  @Get("hebele")
  @UseGuards(LoggedInGuard)
  hebele() {
    return "hebele";
  }
}
