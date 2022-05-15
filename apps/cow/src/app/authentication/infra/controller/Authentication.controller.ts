import { Controller, Post, UseGuards } from "@nestjs/common";
import { MessageResponse } from "@cow/common";
import { SessionLoginGuard } from "../../application/service/SessionLoginGuard";

@Controller("auth")
export class AuthenticationController {
  @UseGuards(SessionLoginGuard)
  @Post("login")
  async login() {
    return new MessageResponse("User has been logged in successfully", "INFO");
  }
}
