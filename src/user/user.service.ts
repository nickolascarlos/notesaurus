/* eslint-disable prettier/prettier */
import { ConflictException, Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import * as crypto from 'crypto';

import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import User from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    @Inject('USER_REPOSITORY')
    private readonly userRepository: Repository<User>,
  ) {}

  async create(payload: CreateUserDto) {
    if ((await this.userRepository.find({ email: payload.email })).length > 0)
      throw new ConflictException('Email is already in use');
    
    if ((await this.userRepository.find({ username: payload.username })).length > 0)
      throw new ConflictException('Username is already in use');

    const newUser: User = new User();

    Object.assign(newUser, {
      ...payload,
      password: crypto
        .createHash('sha256')
        .update(payload.password)
        .digest('hex'),
    });

    await newUser.save();

    delete newUser.password

    return newUser;
  }

  findAll() {
    return `This action returns all user`;
  }

  async findOne(id: string) {
    return await this.userRepository.findOne({
      where: {
        id
      }
    })
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
