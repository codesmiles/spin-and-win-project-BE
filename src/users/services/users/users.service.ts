import { Injectable } from '@nestjs/common';
import CreateUserDto from 'src/users/DTOs/createUser.dto';
import { User,res } from 'src/users/types/User';

@Injectable()
export class UsersService {
   private registeredUsers:User[] = [
    {
      id: 1,
      name: 'John Doe',
      email: `nomail@mail.com`,
      
    },
    {
      id: 2,
      name: 'Jane Doe',
      email: `onemail@mail.com`,
      
    },

    {
      id: 3,
      name: 'Joseph Doe',
      email: `twomail@mail.com`,
      
    },
    {
      id:4,
      name: 'John Doe',
      email: 'johndoe@mail.c0m',
    },
  ];

  getAll(): res {
    return {
      successful: true,
      message: 'All users',
      data: this.registeredUsers,
    };
  }

  findUserById(id:number|string){
    return this.registeredUsers.find((user) => user.id === id);
  }
  createUsers(user:CreateUserDto){
    return this.registeredUsers.push(user);
  }
}
