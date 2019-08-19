import { Module } from '@nestjs/common';
import { PositionService } from './position.service';
import { PositionResolver } from './position.resolver';
import { PositionEntity } from './position.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forFeature([PositionEntity]),
  ],
  providers: [PositionService, PositionResolver]
})
export class PositionModule {}
