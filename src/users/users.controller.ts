import { Controller, Get } from '@nestjs/common';
import { UsersService } from './users.service';
import { res } from './interface';
/**
 * nest g co users
 * generate controller called users in the users module
 */

@Controller('users')
export class UsersController {
    constructor(private UsersService: UsersService) {}
        // this.usersService = usersService;

        @Get("/all")
        getAllUsers():res {
            return this.UsersService.getAll();
        }
    }
    

