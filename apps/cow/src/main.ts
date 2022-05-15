/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { ValidationPipe } from "@nestjs/common";
import { NestFactory, Reflector } from "@nestjs/core";

import { AppModule } from "./app/app.module";

import "reflect-metadata";
import { LoggedInGuard } from "./app/authentication/application/service/LoggedIn.guard";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix("api");
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true
    })
  );
  app.useGlobalGuards(new LoggedInGuard(app.get(Reflector)));
  const port = process.env.PORT || 3333;
  await app.listen(port);
}

bootstrap();
