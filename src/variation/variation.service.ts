import {
  Injectable,
  InternalServerErrorException,
  Query,
} from '@nestjs/common';
import { CreateVariationDto } from './dto/create-variation.dto';

import { InjectModel } from '@nestjs/mongoose';
import { Variation, VariationModel } from './Schema/variation.Schema';
import { NotFoundError } from 'rxjs';

@Injectable()
export class VariationService {
  constructor(
    @InjectModel(Variation.name)
    private readonly VariationModel: VariationModel,
  ) {}
  async create(Variation: CreateVariationDto) {
    const variation = await new this.VariationModel(Variation).save();
    if (!variation) {
      return InternalServerErrorException;
    }
    return { message: 'variation added' };
  }

  async findall(@Query('itemId') itemId: string) {
    const variations = await this.VariationModel.find({ itemId })
    
    if (!variations) {
      return NotFoundError;
    }
    return variations;
  }

  async findOne(id: string) {
    const oneVariation = await this.VariationModel.findById(id);
    if (!oneVariation) {
      return NotFoundError;
    }
    return oneVariation;
  }

  async update(id: string, Variation: CreateVariationDto) {
    const update = await this.VariationModel.findByIdAndUpdate(id, Variation);
    if (!update) {
      return InternalServerErrorException;
    }
    return { message: 'variation updated' };
  }

  async remove(id: string) {
    const removevariation = await this.VariationModel.findByIdAndDelete(id);
    if (!removevariation) {
      return InternalServerErrorException;
    }
    return { message: 'variation deleted' };
  }
}
