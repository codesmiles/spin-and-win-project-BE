import { Injectable } from '@nestjs/common';
/**
 * nest g s users
 * interesting thing is that it generates a service in the users module
 * and we can use the dependency injection to inject the service into the controller
 */
interface response {
  successful: boolean;
  message: string;
  data?: any;
}
@Injectable()
export class UsersService {
  getAll(): response {
    return {
      successful: true,
      message: 'All users',
      data: [
        {
          id: 1,
          name: 'John Doe',
          email: 'jhndo@mail.com',
        },
      ],
    };
  }
}
