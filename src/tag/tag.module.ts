import { Module } from '@nestjs/common';
import { TagService } from './tag.service';
import { TagController } from './tag.controller';

import tagProvider from './tag.provider';

@Module({
  controllers: [TagController],
  providers: [TagService, tagProvider],
})
export class TagModule {}
