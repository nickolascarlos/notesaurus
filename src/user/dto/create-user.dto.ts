import {
  IsString,
  IsNotEmpty,
  IsEmail,
  MinLength,
  MaxLength,
  IsUUID,
  IsOptional,
  IsDateString,
} from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsEmail()
  @IsNotEmpty()
  email;

  @IsString()
  @MinLength(8)
  @MaxLength(40)
  @IsNotEmpty()
  password;

  @IsString()
  @MinLength(8)
  @MaxLength(20)
  @IsNotEmpty()
  username;

  @IsOptional()
  @IsUUID()
  avatarId;

  @IsString()
  @MinLength(2)
  @MaxLength(20)
  @IsNotEmpty()
  firstName;

  @IsOptional()
  @IsString()
  @MinLength(2)
  @MaxLength(30)
  middleName;

  @IsString()
  @MinLength(2)
  @MaxLength(30)
  @IsNotEmpty()
  lastName;

  @IsDateString()
  @IsNotEmpty()
  // TODO: Implement verification to assure the age is at least 12
  birthday: Date;
}
