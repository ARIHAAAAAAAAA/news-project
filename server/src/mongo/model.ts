import mongoose from "mongoose";

const registerSchema = new mongoose.Schema({
        first_name: String,
        last_name: String,
        email: String,
        password: String
});

const articleSchema = new mongoose.Schema({
    articles: {
        source: {
            id: String,
            name: String,
        },
        author: String,
        title: String,
        description: String,
        url: String,
        urlToImage: String,
        publishedAt: String,
        content: String,
    }
});

const personalPreferencesSchema = new mongoose.Schema({
    first_name: String,
    last_name: String,
    email: String,
    newsLocation: {
        type: String,
        enum: ["Israel", "China", "United States", "Italy"]
    },
    newsType: {
        type: String,
        // enum: ["business", "entertainment", "general", "health", "science", "sports", "technology"]
    }
});


const registerModel = mongoose.model('register', registerSchema);
const personalPreferencesModel = mongoose.model('personalPreferences', personalPreferencesSchema);
const ArticleModel = mongoose.model("Article", articleSchema);

export { ArticleModel, registerModel, personalPreferencesModel };
