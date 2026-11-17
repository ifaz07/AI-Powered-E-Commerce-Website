import dns from "dns";
dns.setServers(["8.8.8.8", "1.1.1.1"]);

import mongoose from "mongoose";

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URL)
        console.log("MongoDB connected successfully");
    } catch (error) {
        console.error("MongoDB connection failed");
    }
};

export default connectDB