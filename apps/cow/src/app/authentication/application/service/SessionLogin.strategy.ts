import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from "passport-local";
import { AuthenticationCommandService } from "./AuthenticationCommand.service";
import { Injectable } from "@nestjs/common";

@Injectable()
export class SessionLoginStrategy extends PassportStrategy(Strategy, "session") {
  constructor(private authService: AuthenticationCommandService) {
    super();
  }

  async validate(username: string, password: string) {
    return await this.authService.authenticate(username, password);
  }
}
