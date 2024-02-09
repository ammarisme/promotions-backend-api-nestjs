import { Injectable } from '@nestjs/common';
import { CreatePromotionDto } from './dto/create-promotion.dto';
import { UpdatePromotionDto } from './dto/update-promotion.dto';
import { Promotion } from './entities/promotion.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class PromotionsService {
  constructor(
    @InjectRepository(Promotion) private readonly repo: Repository<Promotion>,
  ) {}

  create(objectDto: CreatePromotionDto): Promise<Promotion> {
    const opject: Promotion = new Promotion();
    opject.promotion_id = objectDto.promotion_id;
    opject.banner_url = objectDto.banner_url;
    return this.repo.save(opject);
  }

  findAll() {
    return this.repo.find();  }

  findOne(id: number) {
    return this.repo.findOneBy({id: id})
  }

  async update(id: number, updateDeviceDto: UpdatePromotionDto) {
    console.log(id);
    const existingObj = await this.findOne(id);

    // Update the fields if they exist in the updateDeviceDto

    if (updateDeviceDto.banner_url) {
      existingObj.banner_url = updateDeviceDto.banner_url;
    }

    return this.repo.save(existingObj);
  }

  remove(id: number) {
    return `This action removes a #${id} promotion`;
  }
}
