import {
    IsNotEmpty,
    IsString,
    MinLength,
  } from 'class-validator';
 
  export class CreateDeviceDto {
    @IsString()
    @MinLength(2, { message: 'Name must have atleast 2 characters.' })
    @IsNotEmpty()
    description: string;
  
    @IsNotEmpty()
    status: boolean;
  }


  