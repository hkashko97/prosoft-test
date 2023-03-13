import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Role, Roles } from './entities/role.entity';
import { User } from './entities/user.entity';


@Injectable()
export class AuthService {
    constructor(
        @InjectRepository(User) private readonly usersRepository: Repository<User>,
        @InjectRepository(Role) private readonly rolesRepository: Repository<Role>,
    ) { }

    createUser(user: Partial<User>) {
        return this.usersRepository.save(user);
    }

    findUser(email: string) {
        return this.usersRepository.findOne({
            where: { email },
            relations: {
                role: true
            }
        });
    }

    getRole(symbol: any) {
        return this.rolesRepository.findOne({
            where: {
                symbol: symbol
            }
        })
    }


} 