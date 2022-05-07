import { Response, Request } from "express";
import {CreateComplimentsService} from "../services/CreateComplimentsService";

class CreateComplimentsController {
    async handle(request: Request, response: Response) {
        const {tag_id, user_receiver, user_sander, message} = request.body;
        const createComplimentsService = new CreateComplimentsService();
        const compliments = await CreateComplimentsService.execute({
            tag_id,
            user_sander,
            user_receiver,
            message,
        });

        return response.json(compliments);
    }
}

export {CreateComplimentsController};