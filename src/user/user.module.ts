import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';

import tagProvider from 'src/tag/tag.provider';

@Module({
  controllers: [UserController],
  providers: [UserService, tagProvider],
})
export class UserModule {}
