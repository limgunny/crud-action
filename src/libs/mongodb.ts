import mongoose from 'mongoose'

export default async function connectMongoDB() {
  try {
    await mongoose.connect(process.env.MONGODB_URI as string)
  } catch (error) {
    console.log('Connected to MongoDB')
    console.error(error)
  }
}
