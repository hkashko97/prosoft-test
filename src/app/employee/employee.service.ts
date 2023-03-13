import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AuthService } from '../auth/auth.service';
import { Employee } from '../auth/entities/employee.entity';
import { Roles } from '../auth/entities/role.entity';
import { CreateEmployeeDto } from './dtos/create-employee.dto';


@Injectable()
export class EmployeeService {
    constructor(
        @InjectRepository(Employee) private readonly employeesRepository: Repository<Employee>,
        private readonly authService: AuthService,

    ) { }


    findAll() {
        return this.employeesRepository.find();
    }

    async create(employee: CreateEmployeeDto) {

        const user = await this.authService.findUser(employee.email);

        if (user) {
            throw new BadRequestException('use already exists');
        }

        const newUser = await this.authService.createUser({
            email: employee.email,
            password: 'test-12345', // should make it more secure in real app
            role: await this.authService.getRole(Roles.EMPLOYEE)
        });

        return this.employeesRepository.save({
            firstName: employee.firstName,
            lastName: employee.lastName,
            user: newUser
        });
    }

    findOne(id: number) {
        return this.employeesRepository.findOneBy({ id });
    }

    update(id: number, employee: Partial<Employee>) {
        return this.employeesRepository.update(id, employee);
    }

    delete(id: number) {
        return this.employeesRepository.delete(id);
    }


} 