import { Body, Controller, Get, Req, Res } from "@nestjs/common";
import { RefreshService } from "./refresh.service";



@Controller('refresh')
export class RefreshController {
  constructor(private readonly refreshService: RefreshService) {}
   
  @Get()
  refresh(@Res() res:any, @Req() req:string){
   try {
    let refresh= req
   } catch (error) {
    
   }
  }





}