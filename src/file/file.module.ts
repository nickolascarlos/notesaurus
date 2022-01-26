import { Module } from '@nestjs/common';

import { FileService } from './file.service';
import { FileController } from './file.controller';
import fileProvider from './file.provider';

@Module({
  controllers: [FileController],
  providers: [FileService, fileProvider],
})
export class FileModule {}
