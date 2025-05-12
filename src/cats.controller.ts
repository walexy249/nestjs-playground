import {
  Controller,
  Get,
  Req,
  Post,
  Header,
  Redirect,
  Query,
  Param,
} from '@nestjs/common';
import { Request } from 'express';

@Controller('cats')
export class CatController {
  @Get('abcd/*')
  findAll(@Req() req: Request): string {
    return 'This action returns all cats';
  }

  @Post()
  @Header('cache-control', 'no-store')
  create(): string {
    return 'this action adds new cat';
  }

  @Get('docs')
  @Redirect('https://docs.nestjs.com', 302)
  getDocs(@Query('version') version) {
    if (version && version === '5') {
      return {
        url: 'https://docs.nestjs.com/v5/',
      };
    }
  }

  @Get(':id')
  findOne(@Param('id') id: string): string {
    console.log(id);
    return `This action returns a #${id} cat`;
  }
}
