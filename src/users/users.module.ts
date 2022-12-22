import { Module } from '@nestjs/common';
// import { ControllersController } from './controllers/controllers.controller';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';





// generate modules nest g module users
@Module({
  controllers: [UsersController],
  providers: [UsersService]
})
export class UsersModule {}
