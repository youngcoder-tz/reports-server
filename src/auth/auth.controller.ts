import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterDto, LoginDto } from './dto/auth.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  // Register endpoint with role auto-assignment
  @Post('register')
  async register(@Body() registerDto: RegisterDto) {
    const { email, role: providedRole } = registerDto;

    // Default role assignment logic
    let role = providedRole || 'user'; // Default role is 'user'

    // Automatically assign 'admin' role if email matches specific condition
    if (email === 'admin@example.com') {
      role = 'admin'; // Assign 'admin' for specific email
    }

    // Call AuthService register method with role included
    return this.authService.register({ ...registerDto, role });
  }

  // Login endpoint remains unchanged
  @Post('login')
  async login(@Body() loginDto: LoginDto) {
    return this.authService.login(loginDto);
  }
}
