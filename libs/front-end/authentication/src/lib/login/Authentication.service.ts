import axios from "axios";
import { LoggedInUser } from "@cow/front-end/store";
import { MessageResponse } from "@common";

export class AuthenticationService {
  async login(username: string, password: string): Promise<MessageResponse> {
    return (await axios.post<MessageResponse>("/auth/login", { username, password })).data;
  }

  async getLoggedInUser(): Promise<LoggedInUser | null> {
    return (await axios.get<LoggedInUser | null>("/auth/loggedInUser")).data;
  }
}
