import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { CreateTagDto } from './dto/create-tag.dto';
import { UpdateTagDto } from './dto/update-tag.dto';
import Tag from './entities/tag.entity';

@Injectable()
export class TagService {
  constructor(
    @Inject('TAG_REPOSITORY')
    private readonly tagRepository: Repository<Tag>,
  ) {}

  create(createTagDto: CreateTagDto) {
    return 'This action adds a new tag';
  }

  findAll() {
    return `This action returns all tag`;
  }

  findOne(id: number) {
    return `This action returns a #${id} tag`;
  }

  update(id: number, updateTagDto: UpdateTagDto) {
    return `This action updates a #${id} tag`;
  }

  remove(id: number) {
    return `This action removes a #${id} tag`;
  }
}
