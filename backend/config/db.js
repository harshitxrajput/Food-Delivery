import mongoose from 'mongoose';

const connectDB = async () => {
    await mongoose.connect("mongodb+srv://harshitxrajput:eldWccHthc5U9QdL@cluster0.wkyutn4.mongodb.net/food-delivery?retryWrites=true&w=majority&appName=Cluster0")
    .then(() => {
        console.log("MongoDB connected");
    })
}

export default connectDB;