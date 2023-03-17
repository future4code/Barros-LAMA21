import { BaseDatabase } from "./BaseDatabase";
import { User } from "./model/User";

export class UserDatabase extends BaseDatabase{
    
    private static TABLE_NAME = ""; 

    public async createUser(
        id: string, 
        email: string,
        name: string,
        password: string,
        role: string
        
    ): Promise<void>{

        try{
            await this.getConnection()
            .insert({
                id, 
                email, 
                name, 
                password, 
                role
            })
            .into(UserDatabase.TABLE_NAME)
        }catch(error: any){
            throw new Error(error.sqlMessage || error.message)
        }

    }
}