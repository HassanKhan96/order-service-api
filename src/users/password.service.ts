import { Injectable } from "@nestjs/common";
import * as bcrypt from 'bcrypt'

@Injectable()
export class passwordService{
    async hashPassword(password:string){
        const hashPassword =await bcrypt.hash(password,10);
        if(!hashPassword){
            return {message:"password cannot be hashed"}
        }
    }

    async verify(password:string,hashPassword:string){
        const compare =await bcrypt.verify(password,hashPassword)
        if(!compare){
            return{message:"incorrect password"}
        }
        return hashPassword;
    }
}