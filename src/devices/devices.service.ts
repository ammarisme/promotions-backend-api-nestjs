import { Injectable } from '@nestjs/common';
import { CreateDeviceDto } from './dto/create-device.dto';
import { UpdateDeviceDto } from './dto/update-device.dto';
import { Device } from './entities/device.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class DevicesService {
  constructor(
    @InjectRepository(Device) private readonly deviceRepo: Repository<Device>,
  ) {}

  create(createUserDto: CreateDeviceDto): Promise<Device> {
    const user: Device = new Device();
    user.description = createUserDto.description;
    user.status = createUserDto.status;
    return this.deviceRepo.save(user);
  }


  findAll() {
    return this.deviceRepo.find();
  }

  findOne(id: number) {
    return this.deviceRepo.findOneBy({id: id})
  }

  async update(id: number, updateDeviceDto: UpdateDeviceDto) {
    console.log(id);
    const existingDevice = await this.findOne(id);

    // Update the fields if they exist in the updateDeviceDto
    if (updateDeviceDto.description) {
      existingDevice.description = updateDeviceDto.description;
    }

    if (updateDeviceDto.status) {
      existingDevice.status = updateDeviceDto.status;
    }

    return this.deviceRepo.save(existingDevice);
  }

  async remove(id: number) {
    const existingDevice = await this.findOne(id);
    await this.deviceRepo.remove(existingDevice);
  }
}
