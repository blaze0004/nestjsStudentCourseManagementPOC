import { AuthService } from "./auth.service";
import { LogInUserDTO, JwtTokenDTO } from "./../dto/user.dto";
import {
  Controller,
  Post,
  Body,
  ValidationPipe,
  UsePipes
} from "@nestjs/common";
import { CreateUserDTO } from "../dto/User.dto";

@Controller("auth")
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post("/signup")
  @UsePipes(ValidationPipe)
  async signUp(@Body() createUserDto: CreateUserDTO) {
    return await this.authService.signUp(createUserDto);
  }

  @Post("/login")
  @UsePipes(ValidationPipe)
  async logIn(@Body() logInUserDto: LogInUserDTO) : Promise< JwtTokenDTO > {
    return await this.authService.logIn(logInUserDto);
  }
}
