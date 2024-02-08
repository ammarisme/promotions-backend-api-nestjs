import { Module } from '@nestjs/common';
import { PromotionsController } from './promotions/promotions.controller';
import { PromotionsService } from './promotions/promotions.service';

@Module({
  controllers: [PromotionsController],
  providers: [PromotionsService]
})
export class PromotionsModule {}
