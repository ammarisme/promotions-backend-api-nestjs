import {
    IsNotEmpty,
    IsString,
    MinLength,
  } from 'class-validator';
 
  export class CreatePromotionDto {
    @IsNotEmpty()
    promotion_id: number;
  
    @IsNotEmpty()
    banner_url: string;
  }