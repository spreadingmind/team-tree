
/** ------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
export enum DepartmentName {
    IQOption = "IQ Option",
    Option = "Option",
    ProductManagement = "ProductManagement",
    Technology = "Technology",
    Administration = "Administration",
    Product = "Product",
    Architecture = "Architecture",
    OfficeTeam = "OfficeTeam"
}

export enum PositionName {
    Chief = "Chief",
    CTO = "CTO",
    CEO = "CEO",
    ProductOwner = "ProductOwner",
    ChiefArchitect = "ChiefArchitect",
    Head = "Head"
}

export interface EmployeeInput {
    firstName: string;
    lastName: string;
}

export interface PositionInput {
    name: PositionName;
    employeeId?: number;
    departmentName: DepartmentName;
}

export interface Employee {
    id: number;
    firstName: string;
    lastName: string;
}

export interface IMutation {
    createPosition(input?: PositionInput): Position | Promise<Position>;
    updatePosition(id: number, input?: PositionInput): Position | Promise<Position>;
    deletePosition(id: number): boolean | Promise<boolean>;
    createEmployee(input?: EmployeeInput): Employee | Promise<Employee>;
    updateEmployee(id: number, input?: EmployeeInput): Employee | Promise<Employee>;
    deleteEmployee(id: number): boolean | Promise<boolean>;
}

export interface Position {
    id: number;
    name: PositionName;
    employeeId?: number;
    departmentName: DepartmentName;
}

export interface IQuery {
    employee(id: number): Employee | Promise<Employee>;
    employees(): Employee[] | Promise<Employee[]>;
    position(id: number): Position | Promise<Position>;
    positions(): Position[] | Promise<Position[]>;
}