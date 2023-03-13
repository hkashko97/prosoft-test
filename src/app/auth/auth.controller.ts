import { BadRequestException, Body, Controller, NotFoundException, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { LoginDto } from "./dtos/login.dto";
import { JwtService } from '@nestjs/jwt';


@Controller('auth')
export class AuthController {

    constructor(
        private readonly authService: AuthService,
        private readonly jwtService: JwtService,
    ) { }

    @Post('login')
    async login(@Body() loginDto: LoginDto) {
        const user = await this.authService.findUser(loginDto.email);

        if (!user) {
            throw new NotFoundException('user not found')
        }
        

        // in real application we should use bcrypt to hash the password
        if (user.password !== loginDto.password) {
            throw new BadRequestException('invalid credentials')
        }


        return {
            status: 200,
            message: 'Success',
            data: {
                accessToken: this.jwtService.sign({
                    email: user.email,
                    role: user.role.symbol
                })
            }
        }
    }
}