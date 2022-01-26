import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

import Note from '../../note/entities/note.entity';

@Entity()
export default class Tag extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @ManyToMany(() => Note, (note) => note.tags)
  @JoinTable({
    name: 'note_tag',
    joinColumn: {
      name: 'tag',
      referencedColumnName: 'id',
    },
    inverseJoinColumn: {
      name: 'note',
      referencedColumnName: 'id',
    },
  })
  notes: Note[];

  @CreateDateColumn()
  createdAt: Date;
}
