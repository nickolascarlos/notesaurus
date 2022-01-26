import {
  BaseEntity,
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

import File from '../../file/entities/file.entity';
import Tag from '../../tag/entities/tag.entity';
import User from '../../user/entities/user.entity';

@Entity()
export default class Note extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: true })
  title: string;

  @Column()
  content: string;

  @ManyToOne(() => User, (user) => user.notes)
  owner: User;

  @ManyToMany(() => User, (user) => user.sharedNotes)
  @JoinTable({
    name: 'user_note',
    joinColumn: {
      name: 'note',
      referencedColumnName: 'id',
    },
    inverseJoinColumn: {
      name: 'user',
      referencedColumnName: 'id',
    },
  })
  sharees: User[];

  @Column({
    default: false,
  })
  isPublic: boolean;

  @OneToMany(() => File, (file) => file.note)
  attachments: File[];

  @ManyToMany(() => Tag, (tag) => tag.notes)
  tags: Tag[];

  @Column({
    default: false,
  })
  trashed: boolean;

  @Column({
    default: false,
  })
  pinned: boolean;

  @Column({
    default: false,
  })
  archived: boolean;

  @Column({
    default: '',
  })
  metadata: string;
}
