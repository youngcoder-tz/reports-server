import { Injectable, UnauthorizedException, BadRequestException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { RegisterDto, LoginDto } from './dto/auth.dto';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { AuthConfig } from '../config/auth.config';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel('User') private readonly userModel: Model<any>,
    private readonly jwtService: JwtService,
  ) {}

  // Register method with role assignment
  async register(registerDto: RegisterDto): Promise<any> {
    const { username, email, password, confirmPassword, role } = registerDto;

    // Ensure password and confirmPassword match
    if (password !== confirmPassword) {
      throw new BadRequestException('Passwords do not match');
    }

    // Check if email already exists
    const existingUser = await this.userModel.findOne({ email });
    if (existingUser) {
      throw new BadRequestException('Email already in use');
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, AuthConfig.saltRounds);

    // Create new user with role
    const newUser = new this.userModel({
      username,
      email,
      password: hashedPassword,
      role: role || 'user', // Default role is 'user'
    });

    await newUser.save();

    return { message: 'User registered successfully', user: { username, email, role } };
  }

  // Login method remains unchanged
  async login(loginDto: LoginDto): Promise<any> {
    const { email, password } = loginDto;

    // Find user by email
    const user = await this.userModel.findOne({ email });

    // Validate user and password
    if (!user || !(await bcrypt.compare(password, user.password))) {
      throw new UnauthorizedException('Invalid credentials');
    }

    // Generate JWT token
    const payload = { email: user.email, id: user._id, role: user.role };
    const accessToken = this.jwtService.sign(payload);

    return { accessToken, user: { username: user.username, email: user.email, role: user.role } };
  }
}
