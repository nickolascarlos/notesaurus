import { Connection } from 'typeorm';

import Tag from './entities/tag.entity';

export default {
  provide: 'TAG_REPOSITORY',
  inject: ['DATABASE_CONNECTION'],
  useFactory: (database: Connection) => database.getRepository(Tag),
};
