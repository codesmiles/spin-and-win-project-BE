import {
  ClassSerializerInterceptor,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param,
  ParseIntPipe,
  Post,
  Req,
  Res,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { UsersService } from 'src/users/services/users/users.service';
import { res, SerializedUser } from 'src/users/types/User';
import { Request, Response } from 'express';
import { Body } from '@nestjs/common/decorators/http/route-params.decorator';
import CreateUserDto from 'src/users/DTOs/createUser.dto';
import { Inject, UseInterceptors } from '@nestjs/common/decorators';

@Controller('users')
export class UsersController {
  // constructor(private UsersService: UsersService) {}
  constructor(@Inject("USERS_SERVICE") private readonly UsersService:UsersService) {}

  @Get('all')
  getAllUsers(): res {
    return this.UsersService.getAll();
  }


  /**
   *
   * @param req not used
   * @param res json response
   * @returns object
   */
  // express way of getting a user
  @Get(':id')
  findOneUser(
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
  /**
   *
   * @param id
   * @returns one user
   * @throws HttpException if user not found
   *
   * different from the express way of getting a user it doesn use the request and response object
   */
  @Get('search/:id')
  findSingleUser(
    @Param('id', ParseIntPipe) id: number, //nestjs will parse the id to an integer
  ) {
    const oneUser = this.UsersService.findUserById(id);
    if (oneUser) {
      return {
        successful: true,
        message: 'User found',
        data: oneUser,
      };
    } else throw new HttpException('User not found', HttpStatus.BAD_REQUEST);
  }

  
  /**
   * 
   * @param user 
   * @returns user created
   * @body decorator is used to get the body of the request
   * @UsePipes(ValidationPipe) is used to validate the body of the request
   */
  @Post('create')
  @UsePipes(ValidationPipe)
  createUser(@Body() user: CreateUserDto) {
    // DTO
    return this.UsersService.createUsers(user);
  }

  @Get("serialized/all")
  getSerializedUser(){
  return this.UsersService.getSerializedUser();
  }


  @UseInterceptors(ClassSerializerInterceptor) //part of the alternative

  @Get('serialized/search/:name')
  findSerializedUserByName(@Param('name') name: string) {
    const user = this.UsersService.getSeralizedUserByName(name.toLowerCase());
  //   if (user) {
  //     return {
  //       successful: true,
  //       message: 'Serialized User found',
  //       data: oneUser,
  //     };
  //   } else throw new HttpException('User not found', HttpStatus.BAD_REQUEST);
  
  // ALTERNATIVE
  if(user) return new SerializedUser(user);
  else return new HttpException({successful:false,message:"User not found"},HttpStatus.BAD_REQUEST)

  }
}
