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
  HttpException,
  ParseIntPipe,
} from '@nestjs/common';
// import { Request } from 'express';
import { CreateCatDto } from './dto/create-cat.dto';
// import { Response } from 'express';
import { CatsService } from './cats.service';

@Controller('cats')
export class CatController {
  constructor(private catService: CatsService) {}
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

  //   @Get()
  //   findAll(@Res({ passthrough: true }) res: Response) {
  //     res.status(209);
  //     return 'yeah';
  //   }
  //   @Post()
  //   create(@Res() res: Response) {
  //     res.status(HttpStatus.CREATED).send();
  //   }

  @Get()
  findAll() {
    try {
      this.catService.findAll();
    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.FORBIDDEN,
          error: 'This is a custom error message',
        },
        HttpStatus.FORBIDDEN,
        {
          cause: error,
        },
      );
    }
  }

  @Post()
  createCat(@Body() createCatDto: CreateCatDto) {
    this.catService.create(createCatDto);
  }

  @Get(':id')
  find(@Param('id', ParseIntPipe) id: number) {
    try {
      return this.catService.findOne(id);
    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.NOT_FOUND,
          error: error.message,
        },
        HttpStatus.NOT_FOUND,
        {
          cause: error,
        },
      );
    }
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
