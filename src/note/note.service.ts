import { Inject, Injectable, Module } from '@nestjs/common';
import { Repository } from 'typeorm';

import { CreateNoteDto } from './dto/create-note.dto';
import { UpdateNoteDto } from './dto/update-note.dto';
import Note from './entities/note.entity';

@Injectable()
export class NoteService {
  constructor(
    @Inject('NOTE_REPOSITORY')
    private readonly noteRepository: Repository<Note>,
  ) {}

  create(createNoteDto: CreateNoteDto) {
    return 'This action adds a new note';
  }

  findAll() {
    return `This action returns all note`;
  }

  findOne(id: number) {
    return `This action returns a #${id} note`;
  }

  update(id: number, updateNoteDto: UpdateNoteDto) {
    return `This action updates a #${id} note`;
  }

  remove(id: number) {
    return `This action removes a #${id} note`;
  }
}
