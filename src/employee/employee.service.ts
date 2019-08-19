import { Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, FindConditions, Repository } from 'typeorm';

import { EmployeeInput } from '../definitions';

import { EmployeeEntity } from './employee.entity';

@Injectable()
export class EmployeeService {
  constructor(
    @InjectRepository(EmployeeEntity)
    private readonly employeeRepository: Repository<EmployeeEntity>,
  ) { }

  async getById(id: string): Promise<EmployeeEntity> {
    return this.employeeRepository.findOne(id);
  }

  async getAll() {
    return this.employeeRepository.find();
  }

  async create(employeeData: EmployeeInput): Promise<EmployeeEntity> {
    const entity = this.employeeRepository.create(employeeData);
    return this.employeeRepository.save(entity);
  }

  async update(id: string, employeeData: EmployeeInput): Promise<EmployeeEntity> {
    const data = { ...employeeData };
    await this.employeeRepository.update(id, data);
    return this.employeeRepository.findOne(id);
  }

  async delete(id: string): Promise<boolean> {
    await this.employeeRepository.delete(id);
    return true;
  }
}
