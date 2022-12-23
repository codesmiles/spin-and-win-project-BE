import { Injectable } from '@nestjs/common';
import { res } from 'src/users/interface';

@Injectable()
export class UsersService {
   registeredUsers = [
    {
      id: 1,
      email: `nomail@mail.com`,
      createdAt: new Date(),
    },
    {
      id: 2,
      email: `onemail@mail.com`,
      createdAt: new Date(),
    },

    {
      id: 3,
      email: `twomail@mail.com`,
      createdAt: new Date(),
    },
  ];

  getAll(): res {
    return {
      successful: true,
      message: 'All users',
      data: [
        {
          id: 1,
          name: 'John Doe',
          email: 'johndoe@mail.c0m',
        },
      ],
    };
  }

  findUserById(id:number|string){
    return this.registeredUsers.find((user) => user.id === id);
  }
}
