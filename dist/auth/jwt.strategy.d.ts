import { Strategy } from 'passport-jwt';
declare const JwtStrategy_base: new (...args: any[]) => Strategy;
export declare class JwtStrategy extends JwtStrategy_base {
    constructor();
    validate(payload: {
        email: string;
        name: string;
        role: string[];
    }): Promise<{
        email: string;
        name: string;
        role: string[];
    }>;
}
export {};
