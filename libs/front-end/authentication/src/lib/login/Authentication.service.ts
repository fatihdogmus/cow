import { MessageResponse } from "@cow/common";
import axios from "axios";
import { User } from "@cow/front-end/store";

export class AuthenticationService {
  async login(username: string, password: string): Promise<MessageResponse> {
    return (await axios.post<MessageResponse>("/auth/login", { username, password })).data;
  }

  async getLoggedInUser(): Promise<User | null> {
    return (await axios.get<User | null>("/auth/loggedInUser")).data;
  }
}
