import { Injectable } from '@nestjs/common';
import { Cat } from './interfaces/cats.interface';

@Injectable()
export class CatsService {
  private readonly cats: Cat[] = [];

  create(cat: Cat) {
    this.cats.push(cat);
  }

  findAll(): Cat[] {
    return this.cats;
  }
  findOne(id: number): Cat {
    const cat = this.cats.find((el) => el.id === id);
    if (!cat) {
      throw new Error(`Cat with id ${id} not found`);
    }
    return cat;
  }
}
