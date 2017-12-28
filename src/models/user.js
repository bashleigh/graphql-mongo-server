import mongoose from 'mongoose';
import db from './../db';

export default db.model('users', {
    id: mongoose.Schema.Types.ObjectId,
    firstname: String,
    lastname: String,
});