import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AuthModule } from "../auth/auth.module";
import { Employee } from "../auth/entities/employee.entity";
import { User } from "../auth/entities/user.entity";
import { EmployeeController } from "./employee.controller";
import { EmployeeService } from "./employee.service";


@Module({
    imports: [
        TypeOrmModule.forFeature([User, Employee]),
        AuthModule
    ],
    providers: [EmployeeService],
    controllers: [EmployeeController]
})
export class EmployeeModule { }