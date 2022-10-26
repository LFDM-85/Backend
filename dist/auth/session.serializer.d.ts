import { PassportSerializer } from '@nestjs/passport';
import { Users } from 'src/users/schema/users.schema';
export declare class SessionSerializer extends PassportSerializer {
    serializeUser(user: Users, done: (err: Error, user: Users) => void): void;
    deserializeUser(payload: any, done: (err: Error, payload: string) => void): void;
}
