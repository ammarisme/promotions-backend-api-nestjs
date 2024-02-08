import { Controller, Get, Header } from '@nestjs/common';

@Controller('promotions')
export class PromotionsController {
    @Get()
    get():string{
        return JSON.stringify([
            {
                "promotion_id" : 1,
                "banner_urls" : [
                    "https://catlitter.lk/wp-content/uploads/2024/02/Drools-Offer-PC.jpg"
                ]
            }
        ])
    }
}