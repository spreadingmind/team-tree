import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';

import { EmployeeInput } from '../definitions';

import { EmployeeService } from './employee.service';

@Resolver('Employee')
export class EmployeeResolver {
  constructor(private employeeService: EmployeeService) { }

  @Query()
  async employee(@Args('id') id: string) {
    return this.employeeService.getById(id);
  }

  @Query()
  async employees() {
      return this.employeeService.getAll();
  }

  @Mutation('createEmployee')
  async create(@Args('input') input: EmployeeInput) {
    return this.employeeService.create(input);
  }

  @Mutation('updateEmployee')
  async update(@Args('id') id: string, @Args('input') input: EmployeeInput) {
    return this.employeeService.update(id, input);
  }

  @Mutation('deleteEmployee')
  async delete(@Args('id') id: string) {
    return this.employeeService.delete(id);
  }

}
