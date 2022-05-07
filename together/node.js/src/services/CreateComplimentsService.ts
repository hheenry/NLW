import { getCustomRepository } from "typeorm";
import { ComplimentsRepositories } from "../repositories/ComplimentsRepositories";
import { UsersRepositories } from "../repositories/UsersRepositories";

interface IComplimentsRequest {
    tag_id: string;
    user_sender: string;
    user_receiver: string;
    message: string;
}

class CreateComplimentsService {
    static execute(arg0: { tag_id: any; user_sander: any; user_receiver: any; message: any; }) {
        throw new Error("Method not implemented.");
    }
    async execute({ tag_id, user_sender, user_receiver, message} : IComplimentsRequest) {
        const complimentsRepositories = getCustomRepository(ComplimentsRepositories);
        const usersRepositories = getCustomRepository(UsersRepositories);

        if(user_sender === user_receiver) {
            throw new Error("Incorrect User Reiceiver")
        }

        const userReceiverExists = await usersRepositories.findOne(user_receiver);

        if(!userReceiverExists) {
            throw new Error("User Reiceiver does not exists!")
        }

        const compliments = complimentsRepositories.create({
            tag_id,
            user_receiver,
            user_sender,
            message,
        });

        await complimentsRepositories.save(compliments);

        return compliments;
    }
}

export {CreateComplimentsService}