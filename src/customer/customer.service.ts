import { Injectable } from '@nestjs/common';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';
import { Customer } from './entities/customer.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class CustomerService {

  constructor(
    @InjectRepository(Customer) private readonly repo: Repository<Customer>,
  ) {}

  create(objectDto: CreateCustomerDto): Promise<CreateCustomerDto> {
    const opject: Customer = new Customer();
    opject.name = objectDto.name;
    opject.email = objectDto.email;
    opject.phone_number = objectDto.phone_number;
    return this.repo.save(opject);
  }


  findAll() {
    return this.repo.find();
  }

  findOne(id: number) {
    return this.repo.findOneBy({id: id})
  }

  async update(id: number, updateDeviceDto: UpdateCustomerDto) {
    console.log(updateDeviceDto);
    const existingObj = await this.findOne(id);

    // Update the fields if they exist in the updateDeviceDto

    existingObj.name = updateDeviceDto.name;
    existingObj.email = updateDeviceDto.email;
    existingObj.phone_number = updateDeviceDto.phone_number;

    return this.repo.save(existingObj);
  }

  remove(id: number) {
    return `This action removes a #${id} promotion`;
  }

}
