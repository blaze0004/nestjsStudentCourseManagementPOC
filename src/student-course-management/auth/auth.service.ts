import { JwtTokenDTO } from './../dto/user.dto';
import { Injectable, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../entities/user.entity';
import { CreateUserDTO, LogInUserDTO } from '../dto/user.dto';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt'

@Injectable()
export class AuthService {

    constructor(
        @InjectRepository(User) private readonly userRepository: Repository<User>, private readonly jwtService : JwtService
      ) {}
    
      async signUp(createUserDto: CreateUserDTO) {
        const { username, password } = createUserDto;
        
        const salt = await bcrypt.genSaltSync(10);

        const hash = await bcrypt.hashSync(password, salt);

        let user = await this.userRepository.create({ username, password : hash, salt});
    
        user = await this.userRepository.save(user);
    
        if (user) return { message: 'User Created' }
        throw new BadRequestException("Unable to create account.");
    
      }
    
      async logIn(logInUserDto: LogInUserDTO) : Promise<JwtTokenDTO> {
    
        const { username, password } = logInUserDto;

        const user = await this.userRepository.findOneOrFail({username})

        if (user) {
            
            const hash = await bcrypt.hashSync(password, user.salt);
            if (hash === user.password) {
                
                const payload = { username: user.username }
                
                const jwtToken = await this.jwtService.signAsync(payload)
                return { token : jwtToken }
          }
        }
        throw new BadRequestException('Wrong credential details.')

      }
}
