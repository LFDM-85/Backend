import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import helmet from 'helmet';
import * as cookieParser from 'cookie-parser';
import * as session from 'express-session';
import * as passport from 'passport';
import * as dotenv from 'dotenv';
import cors from 'cors'

dotenv.config();

const secret = process.env.SESSION_SECRET;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const whitelist = ['http://frontendtest-livid.vercel.app'];
  app.use(cors());
  app.use(function (req, res, next) {
    let i = 0,
      notfound = 1,
      const referer = req.get('Referer');
    if (referer) {
      while (i < global.whitelist.length && notfound) {
        notfound = referer.indexOf(whitelist[i]) === -1;
        i++;
      }
    }
    if (notfound) res.send('Denied!');
    else next();
  });
  // app.enableCors({
  //   origin: 'http://frontendtest-livid.vercel.app',
  //   methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
  //   credentials: true,
  //   allowedHeaders: [
  //     'origin',
  //     'x-requested-with',
  //     'content-type',
  //     'accept',
  //     'authorization',
  //   ],
  // });

  app.use(cookieParser());
  app.use(helmet());
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
    }),
  );
  app.use(
    session({
      secret: secret,
      resave: false,
      saveUninitialized: false,
    }),
  );
  app.use(passport.initialize());
  app.use(passport.session());
  await app.listen(5000);
}
bootstrap();


