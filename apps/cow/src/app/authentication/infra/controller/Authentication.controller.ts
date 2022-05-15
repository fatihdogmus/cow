import { Controller, Post, UseGuards } from "@nestjs/common";
import { MessageResponse } from "@cow/common";
import { SessionLoginGuard } from "../../application/service/SessionLogin.guard";
import { Public } from "../../application/service/Public.decorator";

@Controller("auth")
export class AuthenticationController {
  @UseGuards(SessionLoginGuard)
  @Public()
  @Post("login")
  async login() {
    return new MessageResponse("User has been logged in successfully", "INFO");
  }
}
