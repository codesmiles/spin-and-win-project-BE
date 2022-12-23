import {
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Req,
  Res,
} from '@nestjs/common';
import { UsersService } from 'src/users/services/users/users.service';
import { res } from 'src/users/interface';
import { Request, Response } from 'express';

@Controller('users')
export class UsersController {
  constructor(private UsersService: UsersService) {}

  @Get('all')
  getAllUsers(): res {
    return this.UsersService.getAll();
  }

  // express way of getting a user
  @Get(':id')
  findOneUser(
    // @Param('id', ParseIntPipe) id: number, //nestjs will parse the id to an integer
    @Req() req: Request,
    @Res() res: Response,
  ) {
    //  this.UsersService.findUserById(req.params.id)//express way
    
    const oneUser = this.UsersService.findUserById(req.params.id);
    if (!oneUser) {
      return res.status(404).json({
        successful: false,
        message: 'User not found',
      });    
    } else {
      return res.status(200).json({
        successful: true,
        message: 'User found',
        data: oneUser,
      });
      
    }

  }

  // nestjs way of getting a user
  @Get('search/:id')
  findSingleUser(
    @Param('id', ParseIntPipe) id: number, //nestjs will parse the id to an integer
  ){
    const oneUser = this.UsersService.findUserById(id);
   if (oneUser) {
    return{
      successful: true,
      message: 'User found',
      data: oneUser,
    }
   } else {
    return{
      successful: false,
      message: 'User not found',
    }
   }
  }


}
