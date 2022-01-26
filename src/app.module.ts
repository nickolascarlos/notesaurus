import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { FileModule } from './file/file.module';
import { TagModule } from './tag/tag.module';
import { UserModule } from './user/user.module';
import { NoteModule } from './note/note.module';

@Module({
  imports: [
    NoteModule,
    FileModule,
    TagModule,
    UserModule,
    ConfigModule.forRoot(),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
