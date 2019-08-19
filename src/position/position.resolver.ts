import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import { PositionService } from './position.service';
import { PositionInput } from 'src/definitions';

@Resolver('Position')
export class PositionResolver {
  constructor(private positionService: PositionService) { }

  @Query()
  async position(@Args('id') id: string) {
    return this.positionService.getById(id);
  }

  @Query()
  async positions() {
    return this.positionService.getAll();
  }

  @Query('positionsTree')
  async getPositionTree() {
    return this.positionService.getPositionTree();
  }

  @Mutation('createPosition')
  async create(@Args('input') input: PositionInput) {
    return this.positionService.create(input);
  }

  @Mutation('updatePosition')
  async update(@Args('id') id: string, @Args('input') input: PositionInput) {
    return this.positionService.update(id, input);
  }

  @Mutation('deletePosition')
  async delete(@Args('id') id: string) {
    return this.positionService.delete(id);
  }
}