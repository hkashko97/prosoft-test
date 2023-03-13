import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'
import { Company } from './company.entity';


@Entity()
export class Branch {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string;

    @ManyToOne(() => Company, (company) => company.id)
    company: Company;
}