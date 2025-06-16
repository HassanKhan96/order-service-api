import { Controller, Get } from '@nestjs/common';
import { citiesServices } from './cities.services';

@Controller('cities')
export class citiesController{
    constructor(private readonly citiesServices:citiesServices){}
}