import { Module } from "@nestjs/common";
import * as Redis from "redis";

export const REDIS = Symbol("AUTH:REDIS");

const client = Redis.createClient({ legacyMode: true, socket: { host: "localhost", port: 6379 } });

@Module({
  providers: [
    {
      provide: REDIS,
      useFactory: async () => {
        await client.connect();
        return client;
      }
    }
  ],
  exports: [REDIS]
})
export class RedisModule {}
