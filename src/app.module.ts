import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DevicesModule } from './devices/devices.module';
import { Device } from './devices/entities/device.entity';
import { PromotionsModule } from './promotions/promotions.module';
import { Promotion } from './promotions/entities/promotion.entity';
import { SettingsModule } from './settings/settings.module';
import { Setting } from './settings/entities/setting.entity';
import { CustomerModule } from './customer/customer.module';
import { Customer } from './customer/entities/customer.entity';
import { UserModule } from './user/user.module';
import { User } from './user/entities/user.entity';

@Module({
  imports: [PromotionsModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'ec2-13-234-20-8.ap-south-1.compute.amazonaws.com',
      port: 5432,
      password: 'pgpw',
      username: 'pguser',
      entities: [Device,Promotion, Setting, Customer, User],
      database: 'promo_db',
      synchronize: true,
      logging: true,
    }),
    DevicesModule,
    SettingsModule,
    CustomerModule,
    UserModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
