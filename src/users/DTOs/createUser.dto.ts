import { IsEmail, IsNotEmpty, IsNumberString, IsString } from "class-validator";


export default class CreateUserDto{
    
    @IsNumberString()
    @IsNotEmpty()    
    id: number;

    @IsNotEmpty()
    @IsString()
    name: string;
    
    @IsNotEmpty()
    @IsEmail()
    @IsString()
    email: string;
}