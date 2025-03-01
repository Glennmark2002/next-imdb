import mongoose from "mongoose";
let initialized = false; 

export const connect = async () => {
  mongoose.set('strictQuery', true);
  if(initialized) {
    console.log('MongoDb already connected');
    return
  }

  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      dbName: 'next-imdb',
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    initialized = true;
    console.log('MongoDB connected');
  } catch (error) {
    console.log('MongoDb connection error: ', error);
  }
}
