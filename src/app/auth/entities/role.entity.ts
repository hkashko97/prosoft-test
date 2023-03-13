import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'


export enum Roles {
    ADMIN = 'admin',
    EMPLOYEE = 'emp'
}

@Entity()
export class Role {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string;

    @Column({
        type: 'enum',
        enum: Roles
    })
    symbol: string;
}