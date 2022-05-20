import { Injectable } from "@nestjs/common";
import { PassportSerializer } from "@nestjs/passport";
import { User } from "../../../user/application/domain/User.entity";

import { Role } from "@common";

export interface LoggedInUser {
  id: number;
  username: string;
  role: Role;
}

@Injectable()
export class SessionSerializer extends PassportSerializer {
  serializeUser(user: User, done: (err: Error | null, user: LoggedInUser) => void) {
    done(null, { id: user.id, username: user.username, role: user.role });
  }

  deserializeUser(payload: LoggedInUser, done: (err: Error | null, user: LoggedInUser) => void) {
    done(null, payload);
  }
}
