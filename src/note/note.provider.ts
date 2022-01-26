import { Connection } from 'typeorm';
import { Note } from './entities/note.entity';

export default {
  provide: 'NOTE_REPOSITORY',
  inject: ['DATABASE_CONNECTION'],
  useFactory: (database: Connection) => database.getRepository(Note),
};
