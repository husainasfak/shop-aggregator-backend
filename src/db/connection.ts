import mongoose from "mongoose";
if (!process.env.DB_URL) {
  throw new Error("DB credentials error");
}
const URI = process.env.DB_URL;

const connectDB = async (): Promise<void> => {
  try {
    await mongoose.connect(URI!);
    await mongoose.connection.db.admin().command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } catch (error: any) {
    console.error("MongoDB connection failed:", error.message);
    await mongoose.disconnect();
    process.exit(1);
  }
};

export default connectDB;
