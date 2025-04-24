import { Module } from '@nestjs/common';
import { ChoicesService } from './choices.service';
import { ChoicesController } from './choices.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { choicesSchemaObject } from './Schema/choices.Schema';

@Module({
  imports:[MongooseModule.forFeature([choicesSchemaObject])],
  controllers: [ChoicesController],
  providers: [ChoicesService],
})
export class ChoicesModule {}
