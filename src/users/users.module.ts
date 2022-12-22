import { Module } from '@nestjs/common';
import { Controller } from './controllers/.controller';


@Module({
  controllers: [Controller]
})
export class UsersModule {}
