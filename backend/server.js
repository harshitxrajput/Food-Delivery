import express from 'express';
import cors from 'cors';
import connectDB from './config/db.js';

import foodRoutes from './routes/food.route.js'

const app = express();
const port = 4000;

app.use(cors());
app.use(express.json());

app.use("/api/food", foodRoutes);
app.use("/images", express.static('uploads'))

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
    connectDB();
})

// 

// mongodb+srv://harshitxrajput:eldWccHthc5U9QdL@cluster0.wkyutn4.mongodb.net/food-delivery?retryWrites=true&w=majority&appName=Cluster0