import { Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
import { User } from "../domain/User.entity";
import { InjectRepository } from "@nestjs/typeorm";

@Injectable()
export class UserQueryService {
  constructor(@InjectRepository(User) private readonly userRepository: Repository<User>) {}

  async findUser(username: string): Promise<User | null> {
    return this.userRepository.findOneBy({ username });
  }
}
