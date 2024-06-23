import { Injectable } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { PrismaService } from 'nestjs-prisma';

@Injectable()
export class PostService {
  constructor(private readonly prisma: PrismaService) {}
  create(createPostDto: CreatePostDto) {
    return this.prisma.post.create({
      data: createPostDto,
    });
  }

  findAll() {
    return `This action returns all post`;
  }

  findOne(id: string) {
    return `This action returns a #${id} post`;
  }

  update(id: string, updatePostDto: UpdatePostDto) {
    return `This action updates a #${id} post`;
  }

  remove(id: string) {
    return `This action removes a #${id} post`;
  }
}
