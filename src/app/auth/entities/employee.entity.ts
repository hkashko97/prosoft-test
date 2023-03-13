import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'
import { Branch } from './branch.entity';
import { User } from './user.entity';


@Entity()
export class Employee {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @ManyToOne(() => User, (user) => user.id)
    user: User;

    @ManyToOne(() => Branch, (branch) => branch.id)
    branch: Branch;
}