import { Role } from "@common";
import axios from "axios";

export interface User {
  id: number;
  username: string;
  name: string;
  surname: string;
  role: Role;
}

export class ListUsersApi {
  async getAllUsers(): Promise<User[]> {
    return (await axios.get<User[]>("/users")).data;
  }
}
