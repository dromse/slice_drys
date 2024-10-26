import mongoose from 'mongoose'

interface Connection {
  isConnected?: any
}

const connection: Connection = {}

export const connectToDb = async () => {
  try {
    if (connection.isConnected) {
      console.log('Using existing connection')
      return
    }
    const db = await mongoose.connect(`${process.env.NEXT_MONGO_DB}`)
    connection.isConnected = db.connections[0].readyState
  } catch (error) {
    console.log('error2312', error)
  }
}