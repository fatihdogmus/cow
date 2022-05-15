/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { ValidationPipe } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";

import { AppModule } from "./app/app.module";

import "reflect-metadata";
import * as session from "express-session";
import * as passport from "passport";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix("api");
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true
    })
  );
  app.use(
    session({
      saveUninitialized: false,
      secret: "sup3rs3cr3t",
      resave: false,
      cookie: {
        sameSite: true,
        httpOnly: true,
        maxAge: 60000
      }
    })
  );
  app.use(passport.initialize());
  app.use(passport.session());
  const port = process.env.PORT || 3333;
  await app.listen(port);
}

bootstrap();
