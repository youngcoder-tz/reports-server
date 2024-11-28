import { Controller, Get, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('protected')
export class ProtectedController {
  @UseGuards(JwtAuthGuard) 
  @Get('endpoint')
  getProtectedEndpoint() {
    return { message: 'This is a protected endpoint!' };
  }
}
