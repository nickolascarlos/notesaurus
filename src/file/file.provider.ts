import { Connection } from 'typeorm';

import File from './entities/file.entity';

export default {
  provide: 'FILE_REPOSITORY',
  inject: ['DATABASE_CONNECTION'],
  useFactory: (database: Connection) => database.getRepository(File),
};
