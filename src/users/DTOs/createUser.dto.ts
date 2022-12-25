import { Type } from "class-transformer";
import { IsEmail, IsNotEmpty, IsNumberString, IsString, ValidateNested } from "class-validator";
import CreateAddressDto from "./createAddress.dto";


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

    @IsNotEmpty()
    @ValidateNested()
    @Type(() => CreateAddressDto)
    address:CreateAddressDto;
}