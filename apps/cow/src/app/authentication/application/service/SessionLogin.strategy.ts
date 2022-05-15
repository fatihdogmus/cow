import { PassportStrategy } from "@nestjs/passport";
import { AuthenticationCommandService } from "./AuthenticationCommand.service";
import { Injectable } from "@nestjs/common";
import { Strategy } from "passport-local";

@Injectable()
export class SessionLoginStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthenticationCommandService) {
    super();
  }

  async validate(username: string, password: string) {
    return await this.authService.authenticate(username, password);
  }

  error(err: Error) {
    super.error(err);
    console.log(err);
  }

  fail(status: number) {
    super.fail(status);
  }
}
