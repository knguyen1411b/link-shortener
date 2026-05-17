import mongoose from 'mongoose'

/**
 * LinkSchema defines the structure of the Link document in MongoDB.
 *
 * It stores the relationship between:
 * - `originalUrl`: the full original URL provided by the user
 * - `shortCode`: the unique shortened code used in the short link
 *
 * The `timestamps` option automatically adds `createdAt` and `updatedAt`
 * fields to each document.
 */
const LinkSchema = new mongoose.Schema(
    {
        originalUrl: { type: String, required: true },
        shortCode: { type: String, required: true, unique: true }
    },
    { timestamps: true }
)

/**
 * Export the Link model.
 *
 * Reuses the existing model if it already exists to avoid
 * model overwrite errors during development with hot reload.
 */
export default mongoose.models.Link || mongoose.model('Link', LinkSchema)
