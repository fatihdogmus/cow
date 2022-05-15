import { MiddlewareConsumer, Module, NestModule } from "@nestjs/common";
import { DatasourceModule } from "./configuration/datasource/datasource.module";
import { AuthenticationModule } from "./authentication/authentication.module";
import * as session from "express-session";
import * as passport from "passport";

@Module({
  imports: [DatasourceModule, AuthenticationModule]
})
export class AppModule implements NestModule {
  // constructor(@Inject(REDIS) private readonly redis: Client) {}

  configure(consumer: MiddlewareConsumer) {
    // const RedisStore = createRedisStore(session);
    consumer
      .apply(
        session({
          // store: new RedisStore({ client: this.redis, logErrors: true }),
          saveUninitialized: false,
          secret: "sup3rs3cr3t",
          resave: false,
          cookie: {
            sameSite: false,
            httpOnly: false,
            maxAge: 60000
          }
        }),
        passport.initialize(),
        passport.session()
      )
      .forRoutes("*");
  }
}
