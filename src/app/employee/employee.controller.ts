import { Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";
import { CreateEmployeeDto } from "./dtos/create-employee.dto";
import { EmployeeService } from "./employee.service";


@Controller('employee')
export class EmployeeController {

    constructor(
        private readonly employeeService: EmployeeService
    ) {

    }

    @Get(':id')
    getEmployee(@Param('id') id) {
        return this.employeeService.findOne(+id);
    }

    @Get('')
    getEmployees() {
        return this.employeeService.findAll();
    }


    @Post('create')
    createEmployee(@Body() createEmployeeDto: CreateEmployeeDto) {
        return this.employeeService.create(createEmployeeDto);
    }


    @Patch(':id')
    updateEmployee(
        @Param('id') id,
        @Body() createEmployeeDto: CreateEmployeeDto
    ) {
        return this.employeeService.update(+id, createEmployeeDto);
    }


    @Delete(':id')
    deleteEmployee(@Param('id') id) {
        return this.employeeService.delete(+id);
    }







}