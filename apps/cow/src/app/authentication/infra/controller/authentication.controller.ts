import { Body, Controller, Post } from "@nestjs/common";
import { LoginRequest } from "./request/login.request";
import { RegisterRequest } from "./request/register.request";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "../repository/entity/User.entity";
import { Connection, Repository } from "typeorm";

@Controller("auth")
export class AuthenticationController {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
    private connection: Connection
  ) {}

  @Post("login")
  async login(@Body() request: LoginRequest) {
    const user = await this.usersRepository.findOneBy({ username: request.username });
    return "hebele";
  }

  @Post("register")
  async register(@Body() request: RegisterRequest) {
    // await this.usersRepository.save(new User(request.username, request.password));
    return "The user has been registered successfully!";
  }
}
