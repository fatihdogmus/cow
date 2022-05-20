/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { ValidationPipe } from "@nestjs/common";
import { NestFactory, Reflector } from "@nestjs/core";

import { AppModule } from "./app/app.module";

import "reflect-metadata";
import { LoggedInGuard } from "./app/authentication/application/service/LoggedIn.guard";
import { RolesGuard } from "@cow/common";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix("api");
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true
    })
  );
  const reflector = app.get(Reflector);
  app.useGlobalGuards(new LoggedInGuard(reflector), new RolesGuard(reflector));
  const port = process.env.PORT || 3333;
  await app.listen(port);
}

bootstrap();
