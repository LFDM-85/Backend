import { Request } from 'express';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { AuthService } from './auth.service';
import { AuthDto } from './dto/auth.dto';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    signup(createUserDto: CreateUserDto): Promise<any>;
    signin(data: AuthDto): Promise<{
        tokens: {
            accessToken: string;
            refreshToken: string;
        };
        user: import("../users/schema/users.schema").UserDocument;
    }>;
    logout(req: Request): void;
    refreshTokens(req: Request): Promise<{
        accessToken: string;
        refreshToken: string;
    }>;
}
