import { Connection } from 'typeorm';
import { User } from './entities/user.entity';

export default {
  provide: 'USER_REPOSITORY',
  inject: ['DATABASE_CONNECTION'],
  useFactory: (database: Connection) => database.getRepository(User),
};
