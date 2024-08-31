import { Controller, Get, Param } from "@nestjs/common";
import { Url } from "@prisma/client";
import { AppService } from "@/app.service";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get(":id")
  async get(@Param("id") id: Url["id"]) {
    return await this.appService.requestURL(id);
  }
}
