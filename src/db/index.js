import mongoose from "mongoose";
import { DB_NAME } from "../constansts.js";

const connectDB = async () => {
  try {
    const conntectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_NAME}`
    );
    console.log(
      `/n MongoDB connected !! DB HOST: ${conntectionInstance.connection.host}`
    );
  } catch (error) {
    console.log("MONGODB connection failed: ", error);
    process.exit(1);
  }
};

export default connectDB;
