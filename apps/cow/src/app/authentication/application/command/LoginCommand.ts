import { IsNotEmpty } from "class-validator";

export class LoginCommand {
  @IsNotEmpty()
  username: string;
  @IsNotEmpty()
  password: string;
}
