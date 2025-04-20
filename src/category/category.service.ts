import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
  Query,
} from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Category, CategoryModel } from './Schema/category.schema';

@Injectable()
export class CategoryService {
  constructor(
    @InjectModel(Category.name) private readonly categoryModel: CategoryModel,
  ) {}

  async create(category: CreateCategoryDto) {
    const createCategory = await new this.categoryModel(category).save();

    if (!createCategory) {
      return new InternalServerErrorException(
        'this category cannot be created',
      );
    }
    return { message: 'category created' };
  }

  async findAll(@Query('storeId') storeId?: string) {
    const categories = await this.categoryModel.find({ storeId });
    return categories
  }
  async findById(id: string) {
    const category = await this.categoryModel.findById(id);
    if (!category) {
      return new NotFoundException('this id can not be find');
    }
    return category;
  }

  async update(id: string, category: CreateCategoryDto) {
    const updatecategory = await this.categoryModel.findByIdAndUpdate(
      id,
      category,
    );
    if (!updatecategory) {
      return new InternalServerErrorException(
        'this category can not be updated',
      );
    }
    return {
      message: 'category updated',
    };
  }

  async remove(id: string) {
    const deleteCategory = await this.categoryModel.findByIdAndDelete(id);
    if (!deleteCategory) {
      return new InternalServerErrorException(
        'this category can not be deleted',
      );
    }
    return { message: 'category deleted' };
  }
}
