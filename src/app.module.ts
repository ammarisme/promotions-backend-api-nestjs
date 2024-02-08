import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PromotionsModule } from './promotions/promotions.module';
import { SettingsModule } from './settings/settings.module';

@Module({
  imports: [PromotionsModule, SettingsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
