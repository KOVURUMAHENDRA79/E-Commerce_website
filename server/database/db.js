import mongoose from "mongoose";


export const connection = async (USERNAME, PASSWORD) => {
    // We are using the standard mongodb:// connection string instead of mongodb+srv:// 
    // because some ISPs block the DNS SRV records required by the srv format.
    const URL = `mongodb://${USERNAME}:${PASSWORD}@ac-igeskat-shard-00-00.yvyhivt.mongodb.net:27017,ac-igeskat-shard-00-01.yvyhivt.mongodb.net:27017,ac-igeskat-shard-00-02.yvyhivt.mongodb.net:27017/?ssl=true&replicaSet=atlas-7vga8c-shard-0&authSource=admin&appName=Cluster0`;
    try {
        await mongoose.connect(URL);
        console.log("Database connected successfully");
    } catch (error) {
        console.log('Error while connecting to database:', error.message);
    }
}

export default connection;