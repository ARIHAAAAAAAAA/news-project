import mongoose from 'mongoose';
import { ArticleModel, personalPreferencesModel, registerModel } from './model';


const connectToMongo = async () => {
    try {
        const connectionString = process.env.MONGO_URI!;
        // console.log(connectionString);

        await mongoose.connect(connectionString);

        // const user = new registerModel();
        // const article = new ArticleModel();
        // const preferences = new personalPreferencesModel();
        // console.log("user", user, "article", article,"preferences",preferences);

        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    }
};

export default connectToMongo;
