import {
  IsString,
  IsNotEmpty,
  IsEmail,
  MinLength,
  MaxLength,
  IsUUID,
  IsOptional,
  Validate,
  IsISO8601,
  IsDateString,
} from 'class-validator';
import AtLeastXYearsAgo from 'src/validators/AtLeastXYearsAgo.validator';

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
  @Validate(AtLeastXYearsAgo, [12])
  birthday;
}
