import express from 'express';
import notesRoutes from './routes/notesRoutes.js';
import { connectDB }  from './config/db.js';
import dotenv from 'dotenv';
import rateLimiter from './middleware/rateLimiter.js';
import cors from 'cors';
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;


app.use(cors({origin:"http://localhost:5173"}));
app.use(express.json()); // Middleware to parse JSON bodies
app.use(rateLimiter);


app.use("/api/notes", notesRoutes); 

connectDB().then(()=>{
    app.listen(PORT, () => {
    console.log('Server is running on port ', PORT);
});
})

//mongodb+srv://23bec110:SEW5L95PTGtd9OF0@cluster0.knmwcat.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0