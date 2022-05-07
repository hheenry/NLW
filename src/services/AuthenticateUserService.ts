import { getCustomRepository } from "typeorm";
import {UsersRepositories} from "../repositories/UsersRepositories";
import {compare} from "bcryptjs";
import {sign} from "jsonwebtoken";

interface IAuthenticateRequest {
    email: string;
    password: string;
}

class AuthenticateUserService {
    async execute({email, password}: IAuthenticateRequest) {
        const usersRepositories = getCustomRepository(UsersRepositories);

        //Verificar se email existe
        const user = await usersRepositories.findOne({
            email
        });

        if(!user) {
            throw new Error("Email/Password incorrect")
        }
        //Verificar se senha está correta
        // 12345 / 4485w4f8we8f4e7874-ef46e54
        const  passwordMatch = await compare(password, user.password)

        if(!passwordMatch) {
            throw new Error("Email/Password incorrect")
        }

        //Gerar token
        const token = sign({
            email: user.email,
        }, "7d93a66a709c7fcddbdbdaf61b56d48f", {
            subject: user.id,
            expiresIn: "1d"
        })

    }
}

export {AuthenticateUserService}