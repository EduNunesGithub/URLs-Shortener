import { Injectable } from "@nestjs/common";
import { Prisma, Url } from "@prisma/client";
import { PrismaService } from "@/prisma/prisma.service";

@Injectable()
export class ShortenerService {
  constructor(private prisma: PrismaService) {}

  async createShortener(data: Prisma.UrlCreateInput): Promise<Url> {
    const { nanoid } = await import("nanoid");
    const id = nanoid(6);

    return this.prisma.url.create({
      data: {
        ...data,
        id: id,
      },
    });
  }
}
