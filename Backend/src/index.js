import express from 'express';
import mongoose from 'mongoose';

import cors from 'cors';
import blogRoutes from './routes/blogRoutes.js';
import cookieParser from 'cookie-parser';



const app = express();
app.use(cookieParser());

app.use(express.json());
app.use(cors());

app.use('/api/blogs', blogRoutes);

const PORT = process.env.PORT;

async function main() {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('MongoDB connected');
}

main();

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});