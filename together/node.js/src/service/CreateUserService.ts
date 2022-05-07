import { getCustomRepository } from "typeorm";
import { UserRepositories } from "../repositories/UserRepositories";

interface IUserRequest {
    name: string;
    email: string;
    adimin?: boolean;
}

class CreateUserService {
    async execute({name, email, adimin} : IUserRequest) {
        const userRepository = getCustomRepository(UserRepositories);

        if(!email) {
            throw new Error("Email incorrect");
        }

        const userAlreadyExists = await userRepository.findOne({
            email
        });

        if(userAlreadyExists) {
            throw new Error("User already exists");
        }

        const user = userRepository.create({
            name,
            email,
            adimin
        });

        await userRepository.save(user)
        return user;
    }
}

export {CreateUserService};