import { Body, Controller, Post } from "@nestjs/common";
import { Prisma } from "@prisma/client";
import { ShortenerService } from "@/shortener/shortener.service";

@Controller("shortener")
export class ShortenerController {
  constructor(private readonly shortenerService: ShortenerService) {}

  @Post()
  async create(@Body() data: Prisma.UrlCreateInput) {
    return await this.shortenerService.createShortener(data);
  }
}
