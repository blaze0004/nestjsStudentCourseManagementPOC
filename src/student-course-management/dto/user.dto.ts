import { IsNotEmpty, IsAlphanumeric, IsEnum , MinLength } from 'class-validator';



export class CreateUserDTO  {

    @IsNotEmpty()
    @IsAlphanumeric()
    username: string;

    @IsNotEmpty()
    @MinLength(6)
    password: string;
}

export class LogInUserDTO {
    
    @IsNotEmpty()
    @IsAlphanumeric()
    username: string;

    @IsNotEmpty()
    @MinLength(6)
    password: string;

}

export class JwtTokenDTO {

    token: string;
}