import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  OneToMany,
  OneToOne,
  CreateDateColumn,
  UpdateDateColumn,
  JoinColumn,
  ManyToMany,
} from 'typeorm';
import { IsDate, IsEmail } from 'class-validator';

import Note from '../../note/entities/note.entity';
import File from '../../file/entities/file.entity';

@Entity()
export default class User extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column({ unique: true })
  @IsEmail()
  email: string;

  @Column({ select: false })
  password: string;

  @Column({ unique: true })
  username: string;

  @OneToOne(() => File)
  @JoinColumn()
  avatar: File;

  @Column()
  firstName: string;

  @Column({ nullable: true })
  middleName: string;

  @Column()
  lastName: string;

  @Column({
    type: 'date',
  })
  @IsDate()
  birthday: Date;

  @OneToMany(() => Note, (notes) => notes.owner)
  notes: Note[];

  @OneToMany(() => File, (files) => files.owner)
  files: File[];

  @ManyToMany(() => Note, (notes) => notes.sharees)
  sharedNotes: Note[];

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
