import { Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";



@Injectable()
export class RefreshService{
    constructor(private readonly jwtService:JwtService){}

    generateRefreshToken(payload:any):string{
        return this.jwtService.sign(payload)
 }

 async verifyRefreshToken(token:string):Promise<any>{
    try{
        return this.jwtService.verify(token);
    }catch(error){
        return new Error('Invalid Token')
    }
}
}
