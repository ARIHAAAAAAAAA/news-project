import { registerModel } from "../mongo/model.js";
import { User } from "../types/user.js";


const registerDal = async (user: User) => {
    try {
        const newUser = await registerModel.create(user);
        // await newUser.save();
        // console.log('dal. User registered successfully!');
        // console.log("+++", newUser);
        return newUser;
    } catch (error) {
        console.error('dal. Error registering user:', error);
        throw error;
    }
};

const getUser = async (email: string) => {
    try {
        const user = registerModel.find({ email: email });
        console.log('dal. User getting successfully!');
        return user
    } catch (error) {
        console.error('dal. Error getting user:', error);
        throw error;
    }
}


export const userDalFnc = {
    registerDal,
    getUser
}