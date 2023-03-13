import { Module } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ENV } from "src/config";
import { AuthController } from "./auth.controller";
import { AuthService } from "./auth.service";
import { Role } from "./entities/role.entity";
import { User } from "./entities/user.entity";
import { JwtStrategy } from "./strategies/passport-jwt.strategy";

@Module({
    imports: [
        TypeOrmModule.forFeature([User, Role]),
        JwtModule.register({
            secret: ENV.Auth.JWT_SECRET,
            signOptions: { expiresIn: '60s' }
        })
    ],
    providers: [AuthService, JwtStrategy],
    controllers: [AuthController],
    exports: [AuthService]
})
export class AuthModule { }