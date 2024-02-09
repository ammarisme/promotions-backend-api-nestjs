import { Injectable } from '@nestjs/common';
import { CreateSettingDto } from './dto/create-setting.dto';
import { UpdateSettingDto } from './dto/update-setting.dto';
import { Setting } from './entities/setting.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class SettingsService {

  constructor(
    @InjectRepository(Setting) private readonly repo: Repository<Setting>,
  ) {}

  create(objectDto: CreateSettingDto): Promise<CreateSettingDto> {
    const opject: Setting = new Setting();
    opject.expired = objectDto.expired;
    opject.otpenabled = objectDto.otpenabled;
    return this.repo.save(opject);
  }


  findAll() {
    return this.repo.find();  }

  findOne(id: number) {
    return this.repo.findOneBy({id: id})
  }

  async update(id: number, updateDeviceDto: UpdateSettingDto) {
    console.log(id);
    const existingObj = await this.findOne(id);

    // Update the fields if they exist in the updateDeviceDto

    if (updateDeviceDto.expired) {
      existingObj.expired = updateDeviceDto.expired;
    }

    if (updateDeviceDto.expired) {
      existingObj.otpenabled = updateDeviceDto.otpenabled;
    }

    return this.repo.save(existingObj);
  }

  remove(id: number) {
    return `This action removes a #${id} promotion`;
  }

}
