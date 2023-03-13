import { Seeder, SeederFactoryManager } from 'typeorm-extension';
import { DataSource } from 'typeorm';
import { Company } from 'src/app/auth/entities/company.entity';
import { Branch } from 'src/app/auth/entities/branch.entity';

export default class CreateCompaniesSeeder implements Seeder {
    public async run(
        dataSource: DataSource,
        factoryManager: SeederFactoryManager
    ): Promise<any> {
        const companyRepository = dataSource.getRepository(Company);
        await companyRepository.insert([
            {
                name: 'Pro SAT'
            },
            {
                name: 'Pro SYS'
            },
            {
                name: 'Pro NET'
            },
            {
                name: 'Pro POWER'
            },
            {
                name: 'Pro SOFT'
            }
        ]);

        const branchRepository = dataSource.getRepository(Branch);

        await branchRepository.insert([
            {
                name: 'Pro SAT - Branch (1)',
                company: { id: 1 }
            },
            {
                name: 'Pro SAT - Branch (2)',
                company: { id: 1 }
            },
            {
                name: 'Pro SYS - Branch (1)',
                company: { id: 2 }
            },
            {
                name: 'Pro SYS - Branch (2)',
                company: { id: 2 }
            },
            {
                name: 'Pro NET - Branch (1)',
                company: { id: 3 }
            },
            {
                name: 'Pro NET - Branch (2)',
                company: { id: 3 }
            },
            {
                name: 'Pro POWER - Branch (1)',
                company: { id: 4 }
            },
            {
                name: 'Pro POWER - Branch (2)',
                company: { id: 4 }
            },
            {
                name: 'Pro SOFT - Branch (1)',
                company: { id: 5 }
            },
            {
                name: 'Pro SOFT - Branch (2)',
                company: { id: 5 }
            },
        ])

    }
}
