import { Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { promises } from "dns";


@Injectable()
export class AuthService{
    constructor(private readonly jwtService:JwtService){}

    generateToken(payload:any): string{
        return this.jwtService.sign(payload);
    }


    async verifyToken(token:string):Promise<any>{
        try{
            return this.jwtService.verify(token);
        }catch(error){
            return new Error('Invalid Token')
        }
    }
    
}