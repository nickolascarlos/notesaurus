import {
  BaseEntity,
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

import Note from '../../note/entities/note.entity';
import User from '../../user/entities/user.entity';

@Entity()
export default class File extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  filename: string;

  @Column()
  mime: string;

  @Column({
    type: 'bytea',
  })
  content: Buffer;

  @Column({
    default: false,
  })
  isPublic: boolean;

  @ManyToOne(() => User, (user) => user.files)
  owner: User;

  @ManyToOne(() => Note, (note) => note.attachments)
  note: Note;
}
