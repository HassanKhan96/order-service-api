import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
  UseGuards,
  Query,
  UseInterceptors,
  UploadedFile,
} from '@nestjs/common';
import { StoreService } from './store.service';
import { CreateStoreDto } from './dto/create-store.dto';
import { AuthGuard } from 'src/auth/AuthGuard';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('store')
@UseGuards(AuthGuard)
export class StoreController {
  constructor(private readonly storeService: StoreService) {}

  @Get('/GET')
  getall(@Query() city: string) {
    return this.storeService.restaurentList(city);
  }
  @Post('/add')
  @UseInterceptors(FileInterceptor('image'))
  newUser(@Body() body: any, @UploadedFile() image: Express.Multer.File) {
    console.log(image);
    return this.storeService.create(body);
  }
  @Put('/update/:id')
  update(@Body() body: CreateStoreDto, @Param('id') id: string) {
    return this.storeService.updateRestaurent(body, id);
  }
  @Delete('/delete/:id')
  delete(@Param('id') id: string) {
    return this.storeService.deleteRestaurent(id);
  }
}
