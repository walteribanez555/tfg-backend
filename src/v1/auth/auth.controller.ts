import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthGuard } from '@nestjs/passport';
import { Auth } from './decorators/auth-decorator';
import { GetUser } from './decorators/get-user.decorator';
import { Rawheaders } from './decorators/raw-headers';
import { RoleProtected } from './decorators/role-protected/role-protected.decorator';
import { CreateUserDto } from './dto/create-user.dto';
import { LoginAuthDto } from './dto/login-auth.dto';
import { UserRoleGuard } from './guards/user-role/user-role.guard';
import { ValidRoles } from './interfaces/valid-roles.interface';
import { User } from './entities/user.entity';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  create(@Body() createUserDto: CreateUserDto) {
    return this.authService.create(createUserDto);
  }

  @Post('login')
  login(@Body() loginAuthDto: LoginAuthDto) {
    return this.authService.login(loginAuthDto);
  }

  @Get('private')
  @UseGuards(AuthGuard())
  testingPrivateRoute(
    @Req() request: Express.Request,
    @GetUser('email') user: User,
    @Rawheaders() rawHeaders: string[],
  ) {
    return { user, rawHeaders };
  }

  @Get('private2')
  @RoleProtected(ValidRoles.admin)
  @UseGuards(AuthGuard(), UserRoleGuard)
  privateRoute2(@GetUser() user: User) {
    return user;
  }

  @Get('private3')
  @Auth(ValidRoles.admin, ValidRoles.admin)
  privateRoute3(@GetUser() user: User) {
    return user;
  }
}
