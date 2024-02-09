
import {
    IsNotEmpty,
  } from 'class-validator';
 
  export class CreateSettingDto {
    @IsNotEmpty()
    expired: boolean;
  
    @IsNotEmpty()
    otpenabled: boolean;
  }