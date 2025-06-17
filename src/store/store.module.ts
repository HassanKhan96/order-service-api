import { StoreService } from './store.service';
import { StoreController } from './store.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { StoreSchemaObject } from './schemas/store.schema';
import { MulterModule } from '@nestjs/platform-express';
import * as path from 'node:path';
import { diskStorage } from 'multer';
import { Module } from '@nestjs/common';

@Module({
  imports: [
    MongooseModule.forFeature([StoreSchemaObject]),
    MulterModule.register({
       
      storage: diskStorage({
        destination:path.join(__dirname, '..', '..', 'uploads'),
        filename: (req, file, callback) => {
          const UniqueSufix = Date.now() + '-' + file.originalname;
          callback(null, UniqueSufix);
        },
      }),
    }),
  ],
  controllers: [StoreController],
  providers: [StoreService],
})
export class StoreModule {}
