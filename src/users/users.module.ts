import { Module, NestModule, RequestMethod } from '@nestjs/common';
import { MiddlewareConsumer } from '@nestjs/common/interfaces/middleware/middleware-consumer.interface';
import { UsersController } from './controllers/users/users.controller';
import { ValidateUserMiddleware } from './middlewares/validateUser.mddleware';
import { UsersService } from './services/users/users.service';

// generate modules nest g module users
@Module({
  controllers: [UsersController],
  providers: [
    {
      provide: 'USERS_SERVICE',
      useClass: UsersService,
    },
  ],
})
export class UsersModule implements NestModule {
  configure(consumer: MiddlewareConsumer) { 
    consumer.apply(ValidateUserMiddleware).forRoutes({
      path: 'users/serialized/search/:name', //individual routes you can call for all user controller
      method: RequestMethod.GET,
    });

    // consumer.apply(UsersController).exclude({
    //   path:"api/users/create",
    //   method:RequestMethod.POST
    // })
  }
}
