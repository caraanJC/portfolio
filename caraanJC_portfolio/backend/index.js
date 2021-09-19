import mongoose from 'mongoose';
import cors from 'cors';
import express from 'express';

import messagesRouter from './routes/messages.js';

const port = 8080;
const app = express();
const connection =
  'mongodb+srv://user:1234@cluster0.vklrd.mongodb.net/messagesdb?retryWrites=true&w=majority';

mongoose.connect(connection, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(express.json());
app.use(cors());

app.use('/api/messages', messagesRouter);
app.listen(port, () => console.log(`App is listening to port ${port}`));
