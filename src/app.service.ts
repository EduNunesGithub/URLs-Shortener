import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { Prisma, Url } from "@prisma/client";
import { PrismaService } from "@/prisma/prisma.service";

@Injectable()
export class AppService {
  constructor(private prisma: PrismaService) {}

  async requestURL(id: Prisma.UrlCreateInput["id"]): Promise<Url> {
    const url = await this.prisma.url.findUnique({ where: { id: id } });

    if (url === null)
      throw new HttpException("Not Found", HttpStatus.NOT_FOUND);

    return url;
  }
}
