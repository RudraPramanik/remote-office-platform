import { Body, Controller, Post, HttpCode, HttpStatus, Get, UseGuards, Request } from '@nestjs/common';
import { AuthService } from './auth.service';
import { get } from 'http';
import { AuthGuard } from './auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  @Post('signup')
  signup(){
    return this.authService.signUp()
  }
  @Post('signin')
  signin(){
    return this.authService.signIn()
  }
  @Get('signup')
  signout(){
    return this.authService.signOut()
  }

  // @HttpCode(HttpStatus.OK)
  // @Post('signin')
  // signIn(@Body() signInDto: Record<string, any>) {
  //   return this.authService.signIn(signInDto.username, signInDto.password);
  // }

  // @UseGuards(AuthGuard)
  // @Get("profile")
  // getProfile(@Request() req ){
  //   return req.user;
  // }
}