import mongoose from "mongoose";


export const connection = async (username, password) => {
    // We are using the standard mongodb:// connection string instead of mongodb+srv:// 
    // because some ISPs block the DNS SRV records required by the srv format.
    const URL = `mongodb://${username}:${password}@ac-ibq8ent-shard-00-00.lvxhzsc.mongodb.net:27017,ac-ibq8ent-shard-00-01.lvxhzsc.mongodb.net:27017,ac-ibq8ent-shard-00-02.lvxhzsc.mongodb.net:27017/ecommerce?ssl=true&replicaSet=atlas-13jwpz-shard-0&authSource=admin&retryWrites=true&w=majority`;
    try {
        await mongoose.connect(URL);
        console.log("Database connected successfully");
    } catch (error) {
        console.log('Error while connecting to database:', error.message);
    }
}

export default connection;