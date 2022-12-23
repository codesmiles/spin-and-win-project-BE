import { Module } from '@nestjs/common';
import { UsersController } from './controllers/users/users.controller';
import { UsersService } from './services/users/users.service';





// generate modules nest g module users
@Module({
  controllers: [UsersController],
  providers: [UsersService]
})
export class UsersModule {}
