import * as mongoose from 'mongoose';
import { model } from 'mongoose';

let userSchema = new mongoose.Schema({
    username: { type: String, required: true },
    email: { type: String, required: true },
})

export default model('users', userSchema);