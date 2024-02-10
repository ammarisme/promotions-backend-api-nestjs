import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private readonly repo: Repository<User>,
  ) {}

  create(objectDto: CreateUserDto): Promise<CreateUserDto> {
    const opject: User = new User();
    opject.username = objectDto.username;
    opject.password = objectDto.password;
    return this.repo.save(opject);
  }


  findAll() {
    return this.repo.find();
  }

  findOne(id: number) {
    return this.repo.findOneBy({id: id})
  }

  async update(id: number, updateDeviceDto: UpdateUserDto) {
    console.log(updateDeviceDto);
    const existingObj = await this.findOne(id);

    // Update the fields if they exist in the updateDeviceDto

    existingObj.password = updateDeviceDto.password;

    return this.repo.save(existingObj);
  }

  remove(id: number) {
    return `This action removes a #${id} promotion`;
  }

}
