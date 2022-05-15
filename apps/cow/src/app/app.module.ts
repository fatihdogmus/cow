import { Inject, MiddlewareConsumer, Module, NestModule } from "@nestjs/common";
import { DatasourceModule } from "./configuration/datasource/datasource.module";
import { AuthenticationModule } from "./authentication/authentication.module";
import * as session from "express-session";
import * as passport from "passport";
import { REDIS, RedisModule } from "./configuration/redis/redis.module";
import * as createRedisStore from "connect-redis";
import { Client } from "connect-redis";

@Module({
  imports: [DatasourceModule, AuthenticationModule, RedisModule]
})
export class AppModule implements NestModule {
  constructor(@Inject(REDIS) private readonly redis: Client) {}

  configure(consumer: MiddlewareConsumer) {
    const RedisStore = createRedisStore(session);
    consumer
      .apply(
        session({
          store: new RedisStore({ client: this.redis, logErrors: true }),
          saveUninitialized: false,
          secret: "sup3rs3cr3t",
          resave: false,
          cookie: {
            sameSite: false,
            httpOnly: false,
            maxAge: 1000 * 24 * 60 * 60
          }
        }),
        passport.initialize(),
        passport.session()
      )
      .forRoutes("*");
  }
}
