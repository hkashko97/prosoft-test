import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'
import { Employee } from './employee.entity';


export enum AttendanceState {
    CHECK_IN,
    CHECK_OUT
}


@Entity()
export class Attendance {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    state: AttendanceState;

    @Column({ type: 'bigint'})
    createdAt: number;

    @ManyToOne(() => Employee, (employee) => employee.id)
    employee: Employee;
}