import { DepartmentName, PositionName } from 'src/definitions';
import { EmployeeEntity } from 'src/employee/employee.entity';
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity('position')
export class PositionEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'name' })
  name: PositionName;

  @Column({ name: 'employee_id', nullable: true })
  employeeId: number;

  @Column({ name: 'department_name', nullable: true  })
  departmentName: DepartmentName;

  @Column({ name: 'parent_id',  nullable: true  })
  parentId: number;

  @ManyToOne(type => EmployeeEntity)
  @JoinColumn({ name: 'employee_id' })
  employee: EmployeeEntity;
}
