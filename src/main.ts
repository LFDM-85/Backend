import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import helmet from 'helmet';
import * as cookieParser from 'cookie-parser';
import * as session from 'express-session';
import * as passport from 'passport';
import * as dotenv from 'dotenv';

dotenv.config();

const secret = process.env.SESSION_SECRET;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  // {
  // origin: true,
  // methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
  // credentials: true,
  // allowedHeaders: [
  //   'origin',
  //   'x-requested-with',
  //   'content-type',
  //   'accept',
  //   'authorization',
  // ],
  // }

  app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
  });
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
