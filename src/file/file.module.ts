import { Module } from '@nestjs/common';

import { FileService } from './file.service';
import { FileController } from './file.controller';
import fileProvider from './file.provider';
import { DatabaseModule } from '../database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [FileController],
  providers: [FileService, fileProvider],
})
export class FileModule {}
