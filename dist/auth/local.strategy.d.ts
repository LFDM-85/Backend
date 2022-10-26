import { Strategy } from 'passport-local';
import { AuthService } from './auth.service';
import { Types } from 'mongoose';
declare const LocalStrategy_base: new (...args: any[]) => Strategy;
export declare class LocalStrategy extends LocalStrategy_base {
    private authService;
    constructor(authService: AuthService);
    validate(email: string, password: string): Promise<{
        id: Types.ObjectId;
        name: string;
        email: string;
        roles: string[];
        isValidated: boolean;
    }>;
}
export {};
