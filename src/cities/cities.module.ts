import { Controller, Module } from "@nestjs/common";
import { citiesController } from "./cities.controller";
import { citiesServices } from "./cities.services";



@Module({
controllers:[citiesController],
providers:[citiesServices],
exports:[citiesServices]

})

export class citiesModule{}
