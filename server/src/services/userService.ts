import { User } from "../types/user.js";
import { userDalFnc } from "../dal/userDal.js";


const addUser = async (user: User) => {
    try {
        const newUser = await userDalFnc.registerDal(user);
        console.log('User added successfully:', newUser);
    } catch (error) {
        console.error('service. Error adding user:', error);
    }
};





export const userService = {
    addUser
}