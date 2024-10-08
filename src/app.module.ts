import { Module } from "@nestjs/common";
import { PrismaService } from "@/prisma/prisma.service";
import { AppController } from "@/app.controller";
import { AppService } from "@/app.service";
import { ShortenerModule } from "@/shortener/shortener.module";

@Module({
  imports: [ShortenerModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
