import { Request, Response, NextFunction } from "express";
import {verify} from "jsonwebtoken";

interface IPlayload {
    sub: string;
}

export function ensureAuthenticate(
    request: Request,
    response: Response,
    next: NextFunction
) {
    //Receber o token
    const authtoken = request.headers.authorization;
    console.log(authtoken);

    //Validar se token está preenchido
    if(!authtoken) {
        return response.status(401).end();
    }

    /*
        Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.
        eyJlbWFpbCI6ImhoZW5yeXJvZHJpZ3VlczcyMUBpY2xvdWQuY29tIiwiaWF0IjoxNjI0NjM5NTM1LCJle
        HAiOjE2MjQ3MjU5MzUsInN1YiI6IjAyYmFkNTdjLTZlNmEtNGFkMC04NjQ2LWQwNjFjODFmMTIyZiJ9.fqjDhd5cG8Ju-RDeV4ftMJC6-naMxuMUDpMEoXw6i_s
    */

    const [, token] = authtoken.split (" ")

    //Validar se token é valido
    try {
        const {sub} = verify(token, "4f93ac9d10cb751b8c9c646bc9dbccb9") as IPlayload;
        
        //Recuperar informaçoes do usuarios
        request.user_id = sub;

        return next();
    } catch (err) {
        return response.status(401).end();
    }
}