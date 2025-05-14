import {
  Controller,
  Get,
  Req,
  Post,
  Header,
  Redirect,
  Query,
  Param,
  Body,
  HttpStatus,
  Res,
} from '@nestjs/common';
import { Request } from 'express';
import { CreateCatDto } from './create-cat.dto';
import { Response } from 'express';

@Controller('cats')
export class CatController {
  //   @Get('abcd/*')
  //   findAll(@Req() req: Request): string {
  //     return 'This action returns all cats';
  //   }

  //   @Post()
  //   @Header('cache-control', 'no-store')
  //   create(): string {
  //     return 'this action adds new cat';
  //   }

  //   @Get()
  //   findAll(@Query('age') age: number, @Query('breed') breed: string) {
  //     console.log(age, breed);
  //     return `This returns cat with age: ${age} and breed: ${breed}`;
  //   }

  //   @Post()
  //   createCat(@Body() createCatDto: CreateCatDto) {
  //     console.log('body', createCatDto);
  //     return createCatDto;
  //   }

  @Get()
  findAll(@Res({ passthrough: true }) res: Response) {
    res.status(209);
    return 'yeah';
  }

  @Post()
  create(@Res() res: Response) {
    res.status(HttpStatus.CREATED).send();
  }

  //   @Get('docs')
  //   @Redirect('https://docs.nestjs.com', 302)
  //   getDocs(@Query('version') version) {
  //     if (version && version === '5') {
  //       return {
  //         url: 'https://docs.nestjs.com/v5/',
  //       };
  //     }
  //   }

  //   @Get(':id')
  //   findOne(@Param('id') id: string): string {
  //     console.log(id);
  //     return `This action returns a #${id} cat`;
  //   }
}
