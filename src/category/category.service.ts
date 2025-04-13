import { Injectable } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Category, categoryModel } from './Schema/category.schema';

@Injectable()
export class CategoryService {
  constructor(
    @InjectModel(Category.name) private readonly categorymodel: categoryModel,
  ) {}

  async create(category: CreateCategoryDto) {
    const createcategory = await new this.categorymodel(category).save();
    if (!createcategory) {
      return { message: 'category can not be created' };
    }
    return { message: 'category created' };
  }

  async findAll() {
    const categories = await this.categorymodel.find();
    if (!categories) {
      return { message: 'there is no categories' };
    }
    return categories;
  }

  async update(id: string, category: CreateCategoryDto) {
    const updatecategory = await this.categorymodel.findByIdAndUpdate(
      id,
      category,
    );
    if (!updatecategory) {
      return { message: 'this category can not be updated' };
    }
    return {
      message: 'category updated',
    };
  }

  async remove(id: string) {
    const deletectegory = await this.categorymodel.findByIdAndDelete(id);
    if (!deletectegory) {
      return { message: 'this is category can not be deleted' };
    }
    return { message: 'category deleted', deletectegory};
  }
}
