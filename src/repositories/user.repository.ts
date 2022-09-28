import db from "../db"
import User from "../models/user.model"

db

class UserRepository {

    findAllUsers(): User[] {
        const sql = `
            SELECT uuid, username 
            FROM application_user 
        `
        return [];
    }
    
}

export default new UserRepository()
