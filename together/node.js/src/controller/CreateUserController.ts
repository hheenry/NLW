import {Request, Response} from "express";
import {CreateUserService} from "../service/CreateUserService";

class CreateUserController {
    async handle(request: Request, response: Response) {
        const {name, email, adimin} = request.body;
        
        const createUserService = new CreateUserService();

        const user = await createUserService.execute({name, email, adimin});
    
        return response.json(user);
    }
}

export {CreateUserController}