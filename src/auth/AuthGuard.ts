import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";

@Injectable()
 export class AuthGuard implements CanActivate { 
    constructor(private readonly JwtService:JwtService){}
    canActivate(context:ExecutionContext):boolean{
        const request = context.switchToHttp().getRequest();
        const token = request.headers.authorization?.split(" ")[1]
        if(!token)return false
        try {
            const decoded = this.JwtService.verify(token,{secret:"JWT_SECRET"})
            request.user =decoded
            return true
        } catch (error) {
            throw new UnauthorizedException
        }
    }
}