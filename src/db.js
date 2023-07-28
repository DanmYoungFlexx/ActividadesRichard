import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        await mongoose.connect(Urldb);
        console.log(">> DB Connect");
    } catch (error) {
        console.log(error)
    }
}