"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const common_1 = require("@nestjs/common");
const helmet_1 = require("helmet");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const passport = require("passport");
const dotenv = require("dotenv");
dotenv.config();
const secret = process.env.SESSION_SECRET;
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const allowCors = (fn) => async (req, res) => {
        res.setHeader('Access-Control-Allow-Credentials', true);
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Origin', req.headers.origin);
        res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
        res.setHeader('HTTP/1.1 200 OK');
        res.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version');
        if (req.method === 'OPTIONS') {
            res.status(200).end();
            return;
        }
        return await fn(req, res);
    };
    const handler = (req, res) => {
        const d = new Date();
        res.end(d.toString());
    };
    module.exports = allowCors(handler);
    app.use(cookieParser());
    app.use((0, helmet_1.default)());
    app.useGlobalPipes(new common_1.ValidationPipe({
        whitelist: true,
    }));
    app.use(session({
        secret: secret,
        resave: false,
        saveUninitialized: false,
    }));
    app.use(passport.initialize());
    app.use(passport.session());
    await app.listen(5000);
}
bootstrap();
//# sourceMappingURL=main.js.map