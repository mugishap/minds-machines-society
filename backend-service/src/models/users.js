import { Schema, model } from "mongoose"

const UsersSchema = new Schema(
    {
        username: { type: String, required: true, unique: true },
        password: { type: String, required: true },
        created_at: { type: Number, default: Date.now() }
    }
)

const Users = model('users', UsersSchema)

export default Users