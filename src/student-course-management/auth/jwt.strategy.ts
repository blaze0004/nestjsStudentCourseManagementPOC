import { User } from './../entities/user.entity';
import { PassportStrategy } from "@nestjs/passport";
import { Strategy, ExtractJwt } from 'passport-jwt'
import { Injectable, UnauthorizedException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from 'typeorm';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {

    constructor(
        @InjectRepository(User) private readonly userRepository: Repository<User>
    ) {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: 'veryHardSecret'
        });
    }

    async validate(payload ) : Promise<User> {
        const { username } = payload

        const user = await this.userRepository.findOneOrFail({ username})
        if (!user) throw new UnauthorizedException();

        return user;

    }

}