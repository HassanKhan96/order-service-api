import { PartialType } from "@nestjs/mapped-types";
import { citiesDto } from "./cities.dto";



export class updateCityDto extends PartialType(citiesDto){}