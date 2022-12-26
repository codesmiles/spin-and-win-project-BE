import { Injectable } from '@nestjs/common';
import { plainToClass } from 'class-transformer';
import CreateUserDto from 'src/users/DTOs/createUser.dto';
import { User,res,SerializedUser } from 'src/users/types/User';

@Injectable()
export class UsersService {
   private registeredUsers:User[] = [
    {
      id: 1,
      name: 'john',
      email: `nomail@mail.com`,
      password:"123"
      
    },
    {
      id: 2,
      name: 'Jane Doe',
      email: `onemail@mail.com`,
      password:"123"
    },

    {
      id: 3,
      name: 'Joseph Doe',
      email: `twomail@mail.com`,
      password:"123"
    },
    {
      id:4,
      name: 'John Doe',
      email: 'johndoe@mail.c0m',
      password:"123"
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
    user.name = user.name.toLowerCase();
    return this.registeredUsers.push(user);
  }
  
  // serialized users
  getSerializedUser(){
    let serializedUser = this.registeredUsers.map(user=>plainToClass(SerializedUser,user))
    return {
      successful: true,
      message: 'All serialized users',
      data: serializedUser
    };
    
  }
  getSeralizedUserByName(name:string){
    return this.registeredUsers.find((user) => user.name === name);
  }
}
