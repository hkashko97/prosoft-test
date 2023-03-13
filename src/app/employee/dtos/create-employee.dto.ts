import { IsEmail, IsNotEmpty, IsString } from "class-validator";

export class CreateEmployeeDto {

    @IsString()
    firstName: string;

    @IsString()
    lastName: string;

    @IsEmail()
    @IsNotEmpty()
    email: string;
}