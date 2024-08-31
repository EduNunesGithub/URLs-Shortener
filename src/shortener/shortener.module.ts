import { Module } from "@nestjs/common";
import { PrismaService } from "@/prisma/prisma.service";
import { ShortenerService } from "@/shortener/shortener.service";
import { ShortenerController } from "@/shortener/shortener.controller";

@Module({
  controllers: [ShortenerController],
  providers: [ShortenerService, PrismaService],
})
export class ShortenerModule {}
