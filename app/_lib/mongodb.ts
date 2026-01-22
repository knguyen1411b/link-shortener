import mongoose from 'mongoose'

/**
 * MongoDB connection URI loaded from environment variables.
 * This should be defined in `.env` or the deployment environment.
 */
const MONGODB_URI = process.env.MONGODB_URI!

// Fail fast if the MongoDB connection string is missing
if (!MONGODB_URI) {
  throw new Error('Missing MONGODB_URI')
}

/**
 * Cached MongoDB connection.
 *
 * In development mode, Next.js may reload modules multiple times.
 * This cache prevents creating multiple MongoDB connections.
 */
let cached = (global as any).mongoose || { conn: null, promise: null }

/**
 * Connect to MongoDB using Mongoose.
 *
 * - Reuses an existing connection if available
 * - Creates a new connection only once
 * - Safe to call multiple times across the app
 *
 * @returns The active Mongoose connection
 */
export async function connectDB() {
  if (cached.conn) return cached.conn

  if (!cached.promise) cached.promise = mongoose.connect(MONGODB_URI).then(mongoose => mongoose)

  cached.conn = await cached.promise
  return cached.conn
}
