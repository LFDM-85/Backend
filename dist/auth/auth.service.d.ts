import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { Users } from 'src/users/schema/users.schema';
export declare class AuthService {
    private userService;
    private jwtService;
    constructor(userService: UsersService, jwtService: JwtService);
    validateUser(email: string, password: string): Promise<{
        id: any;
        name: string;
        email: string;
        roles: string[];
        isValidated: boolean;
    }>;
    signin(user: Users): Promise<{
        token: string;
        user: Users;
    }>;
}
