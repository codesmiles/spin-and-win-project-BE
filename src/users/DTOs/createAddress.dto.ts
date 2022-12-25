import { IsNotEmpty } from "class-validator";

export default class CreateAddressDto {
@IsNotEmpty()
line1: string;

line2?: string;

@IsNotEmpty()
city: string;

@IsNotEmpty()
state: string;
}