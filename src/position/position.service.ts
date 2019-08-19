import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PositionInput } from 'src/definitions';
import { Repository } from 'typeorm';

import { Position } from '../definitions';

import { PositionEntity } from './position.entity';
import { PositionTreeItem } from './position.interfaces';

@Injectable()
export class PositionService {
  constructor(
    @InjectRepository(PositionEntity)
    private readonly positionRepository: Repository<PositionEntity>,
  ) { }

  async getById(id: string): Promise<PositionEntity> {
    return this.positionRepository.findOne(id);
  }

  async getAll() {
    return this.positionRepository.find({ relations: ['employee']});
  }

  async create(positionData: PositionInput): Promise<PositionEntity> {
    const entity = this.positionRepository.create(positionData);
    return this.positionRepository.save(entity);
  }

  async update(id: string, positionData: PositionInput): Promise<PositionEntity> {
    const data = { ... positionData };
    await this.positionRepository.update(id, data);
    return this.positionRepository.findOne(id);
  }

  async delete(id: string): Promise<boolean> {
    await this.positionRepository.delete(id);
    return true;
  }

  async getPositionTree(): Promise<PositionTreeItem[]> {
    const positions = await this.getAll();
    return this.buildPositionsTree(positions);
  }

  buildPositionsTree(items: Position[]): PositionTreeItem[] {
    const rootItems: PositionTreeItem[] = [];
    const lookup: { [id: string]: PositionTreeItem } = {};
    const itemId = 'id';
    const parentId = 'parentId';
    for (const item of items) {
      if (!lookup[item[itemId]]) {
        lookup[item[itemId]] = { data: null, children: [], primaryCount: 0, totalCount: 0 };
      }
      lookup[item[itemId]].data = item;
      const positionItem: PositionTreeItem = lookup[item[itemId]];
      if (item[parentId] === null) {
        rootItems.push(positionItem);
      } else {
        if (!lookup[item[parentId]]) {
          lookup[item[parentId]] = { data: null, children: [], primaryCount: 0, totalCount: 0 };
        }
        lookup[item[parentId]].children.push(positionItem);
        lookup[item[parentId]].primaryCount++;
      }
    }
    rootItems.map(r => this.getCount(r));
    return rootItems;
  }

  getCount(item: PositionTreeItem): any {
    if (item.children.length) {
      item.children.forEach(c => {
        item.totalCount += this.getCount(c);
      });
      return item.primaryCount + item.totalCount;
    } else {
      return 1;
    }
  }
}
