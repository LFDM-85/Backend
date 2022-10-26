import { Injectable } from '@nestjs/common';
import { PassportSerializer } from '@nestjs/passport';
import { Users } from 'src/users/schema/users.schema';

@Injectable()
export class SessionSerializer extends PassportSerializer {
  serializeUser(user: Users, done: (err: Error, user: Users) => void) {
    done(null, user);
  }
  deserializeUser(
    payload: any,
    done: (err: Error, payload: string) => void,
  ) {
    done(null, payload);
  }
}
