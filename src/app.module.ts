import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EmployeeModule } from './employee/employee.module';
import { PositionModule } from './position/position.module';

@Module({
  imports: [
    GraphQLModule.forRoot({
      typePaths: ['./**/*.graphql'],
    }),
    TypeOrmModule.forRoot({
        type: 'postgres',
        host: process.env.TYPEORM_DB_HOST || 'localhost',
        port: parseInt(process.env.TYPEORM_DB_PORT, 10) || 5432,
        database: process.env.TYPEORM_DB_NAME,
        username: process.env.TYPEORM_DB_USER,
        password: process.env.TYPEORM_DB_PASS,
        entities: [ '**/*.entity.ts' ],
        synchronize: true,
    }),
    PositionModule,
    EmployeeModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
