import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const MessagesSchema = new Schema({
  name: String,
  email: String,
  message: String,
  isRead: Boolean,
});

const Messages = mongoose.model('Messages', MessagesSchema);

export default Messages;
