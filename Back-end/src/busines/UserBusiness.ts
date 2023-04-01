import { EmailAlreadyRegistered, BodyNotIncompleted, EmailFormat, CpfFormat, NameFormat, UserNotFound, PasswordWrong } from './../customError/Errors';
import { newUser, newUserDTO, userLoginDTO } from './../model/Clients';
import { GenerateId } from '../services/IdGenerator';
import { UserDatabase } from './../database/UserDatabase';
import { CpfAlreadyRegistered } from '../customError/Errors';
export class UserBusiness{
    userDatabase = new UserDatabase()

    signup = async (user:newUserDTO)=>{
        try {
            const {nameClient, cpf, password, email} = user

            if(!nameClient || !cpf || !password || !email) throw new BodyNotIncompleted
            if(!email.includes('@') || !email.includes('.com')) throw new EmailFormat
            if(cpf.length != 11) throw new CpfFormat
            if(nameClient.length < 3) throw new NameFormat
            
            
            const verifyEmail = await this.userDatabase.userByEmail(email)
            if(verifyEmail.length != 0) throw new EmailAlreadyRegistered
            
            const verifyCPF = await this.userDatabase.userByCPF(cpf)
            if(verifyCPF.length != 0) throw new CpfAlreadyRegistered
            
            const id = GenerateId.newID()

            const newUser:newUser = {
                id,
                nameClient,
                cpf,
                password,
                email
            }

            await this.userDatabase.signup(newUser)

        } catch (error:any) {
            throw new Error(error.message);
        }
    }

    login = async(userLogin:userLoginDTO) =>{
        try {
            const {cpf, password } = userLogin

            if(!cpf || !password) throw new BodyNotIncompleted;
            if(cpf.length != 11) throw new CpfFormat
            
            const verifyCPF = await this.userDatabase.userByCPF(cpf)
            if(verifyCPF.length != 1) throw new UserNotFound
            if(verifyCPF[0].password != password) throw new PasswordWrong

         } catch (error:any) {
            throw new Error(error.message);
            
        }
    }
}