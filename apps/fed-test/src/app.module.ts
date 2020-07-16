import { Module } from '@nestjs/common';
import { GraphQLGatewayModule } from '@nestjs/graphql';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    GraphQLGatewayModule.forRoot({
      gateway: {
        debug: false,
        // eslint-disable-next-line @typescript-eslint/camelcase
        experimental_pollInterval:5000,
        serviceList: [
          { name: 'posts', url: 'http://localhost:3010/graphql' },
          { name: 'users', url: 'http://localhost:3011/graphql' },
        ],
      },
    }),
  ],
})
export class AppModule {}
