import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { CreateChoiceDto } from './dto/create-choice.dto';
import { UpdateChoiceDto } from './dto/update-choice.dto';
import { InjectModel } from '@nestjs/mongoose';
import { chiocesModel, Choices } from './Schema/choices.Schema';

@Injectable()
export class ChoicesService {
  constructor(@InjectModel(Choices.name) private readonly choicesModel:chiocesModel){}
  async create(choices: CreateChoiceDto) {
   const addChoice = await new  this.choicesModel(choices).save()
   if(!addChoice){
    return InternalServerErrorException
   }
   return {message:"the choices created"}
  }

 async  findAll() {
    const choices = await this.choicesModel.find()
    return choices
  }


 async  update(id: string,choices: CreateChoiceDto) {
    const choicesUpdate =await this.choicesModel.findByIdAndUpdate(id,choices)
    if(!choicesUpdate){
     return NotFoundException
    }
    return {message:"the choice is updated"}
  }

  async remove(id: number) {
   const deleteChoice =await this.choicesModel.findByIdAndDelete(id)
   if(!deleteChoice){
    return InternalServerErrorException
   }
   return {message:"choice deleted "}
  }
}
