import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy, ExtractJwt } from 'passport-jwt';
import { ENV } from 'src/config';

export type Payload = {
    sub: string,
    email: string,
    role: string
}


@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy){
    
    constructor() {
        super({
          jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
          ignoreExpiration: true,
          secretOrKey: ENV.Auth.JWT_SECRET,
        });
      }
    
      public validate(payload: Payload): any {
        return payload;
      }
}