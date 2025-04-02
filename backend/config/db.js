import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://fooddeli:fooddeli@fooddeli.iacfhcd.mongodb.net/?').then(() => console.log("DataBase Connected"));
}