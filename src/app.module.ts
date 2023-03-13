import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './database/typeorm.config';
import { JwtModule } from '@nestjs/jwt';
import { ENV } from './config';
import { PassportModule } from '@nestjs/passport';
import { AuthModule } from './app/auth/auth.module';
import { EmployeeModule } from './app/employee/employee.module';

@Module({
  imports: [
    PassportModule,
    JwtModule.register({
      secret: ENV.Auth.JWT_SECRET,
      signOptions: { expiresIn: '400s' }
    }),
    TypeOrmModule.forRoot(typeOrmConfig),
    AuthModule,
    EmployeeModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
