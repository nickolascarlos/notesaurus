import { Module } from '@nestjs/common';
import { NoteService } from './note.service';
import { NoteController } from './note.controller';

import noteProvider from './note.provider';

@Module({
  controllers: [NoteController],
  providers: [NoteService, noteProvider],
})
export class NoteModule {}
