import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { NoteModule } from './note/note.module';
import { FileModule } from './file/file.module';
import { TagModule } from './tag/tag.module';
import { UserModule } from './user/user.module';

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
