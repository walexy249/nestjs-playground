import { Controller, Get } from '@nestjs/common';

@Controller({ host: 'admin.example.com' })
export class AdminController {
  constructor() {}

  @Get()
  index(): string {
    return 'Admin page';
  }
}
