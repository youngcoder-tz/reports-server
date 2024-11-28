// src/auth/dto/auth.dto.ts

import { IsString, IsEmail, MinLength, MaxLength, IsOptional } from 'class-validator';

// DTO for User Registration
export class RegisterDto {
  @IsString()
  @MinLength(3)
  @MaxLength(20)
  username: string;

  @IsEmail()
  email: string;

  @IsString()
  @MinLength(6)
  password: string;

  @IsString()
  @MinLength(6)
  confirmPassword: string;

  @IsString()
  @IsOptional() // Optional, will be handled in controller if not provided
  role?: string; // Role will be handled dynamically
}

// DTO for User Login
export class LoginDto {
  @IsEmail()
  email: string;

  @IsString()
  @MinLength(6)
  password: string;
}
