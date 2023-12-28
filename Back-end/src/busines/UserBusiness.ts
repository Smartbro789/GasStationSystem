import { EmailAlreadyRegistered, BodyNotIncompleted, EmailFormat, CpfFormat, NameFormat, UserNotFound, PasswordWrong } from './../customError/Errors';
import { newUser, newUserDTO, userLoginDTO } from '../model/User';
import { GenerateId } from '../services/IdGenerator';
import { UserDatabase } from './../database/UserDatabase';
import { CpfAlreadyRegistered } from '../customError/Errors';

export class UserBusiness{
    userDatabase = new UserDatabase()

    signup = async (user:newUserDTO)=>{
        try {
<<<<<<< Updated upstream
            const {email, password, name,surname ,position, dob, passport, salary} = user

            // if(!name || !passport || !password || !email) throw new BodyNotIncompleted
            // if(!email.includes('@') || !email.includes('.com')) throw new EmailFormat
            // if(passport.length != 11) throw new CpfFormat
            // if(name.length < 3) throw new NameFormat

            const verifyEmail = await this.userDatabase.userByEmail(email)
            if(verifyEmail.length != 0) throw new EmailAlreadyRegistered
            
            const verifyCPF = await this.userDatabase.userByPassport(passport)
=======
            const {name, bonus_card_number} = user

            if(!name || !bonus_card_number) throw new BodyNotIncompleted
            if(bonus_card_number.length != 11) throw new CpfFormat
            if(name.length < 3) throw new NameFormat
            
            const verifyCPF = await this.userDatabase.userByCPF(bonus_card_number)
>>>>>>> Stashed changes
            if(verifyCPF.length != 0) throw new CpfAlreadyRegistered
            
            const id = GenerateId.newID()

            const newUser:newUser = {
                id,
<<<<<<< Updated upstream
                email,
                password,
                name,
                surname,
                position,
                dob,
                passport,
                salary
=======
                name,
                bonus_card_number,
>>>>>>> Stashed changes
            }
            
            await this.userDatabase.signup(newUser)


        } catch (error:any) {
            throw new Error(error.message);
        }
    }

    login = async(userLogin:userLoginDTO) =>{
        try {
<<<<<<< Updated upstream
            const {passport, password } = userLogin

            if(!password || !password) throw new BodyNotIncompleted;
            if(passport.length != 11) throw new CpfFormat
            
            const verifyCPF = await this.userDatabase.userByPassport(passport)
=======
            const {bonus_card_number } = userLogin

            if(!bonus_card_number) throw new BodyNotIncompleted;
            if(bonus_card_number.length != 11) throw new CpfFormat
            
            const verifyCPF = await this.userDatabase.userByCPF(bonus_card_number)
>>>>>>> Stashed changes
            if(verifyCPF.length != 1) throw new UserNotFound

         } catch (error:any) {
            throw new Error(error.message);
            
        }
    }

    getProfile = async (id:bigint)=>{
        try {
            if(!id) throw new Error('Токен не вставлено.')

            const token = this.authenticator.getTokenData(authToken)

            if(!token) throw new Error('Не авторизовано')
            const result = await this.userDatabase.getProfile(token)
            return result
        } catch (error:any) {
            throw new Error(error.message);
        }
    }

    getUserById = async(idClient:string)=>{
        try {
            const result = this.userDatabase.userById(idClient)
            return result
        } catch (error:any) {
            throw new Error(error.message);
        }
    }

    removeClient = async(idClient:string)=>{
        try {
            const verifyClient = await this.userDatabase.userById(idClient)
            if(verifyClient.length === 0) throw new UserNotFound

            await this.userDatabase.removeClient(idClient)
        } catch (error:any) {
            throw new Error(error.message);
        }
    }  

    changePassword = async(user:any)=>{
        try {
            const {newPass, idClient} = user

            if(!newPass) throw new BodyNotIncompleted()
            if(newPass.length < 6) throw new Error('Пароль має містити 6 цифр')

            const newPassword = {
                newPass,
                idClient
            }
            await this.userDatabase.changePassword(newPassword)
        } catch (error:any) {
            throw new Error(error.message);
        }
    } 

    changeLimit = async(user:any)=>{
        try {
            const {newLimit, idClient} = user

            if(!newLimit) throw new BodyNotIncompleted()

            const limit = {
                newLimit,
                idClient
            }
            await this.userDatabase.changePassword(limit)
        } catch (error:any) {
            throw new Error(error.message);
        }
    } 
}