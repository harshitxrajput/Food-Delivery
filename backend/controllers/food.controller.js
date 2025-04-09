import foodModel from "../models/foodModel.js";

export const addFood = async (req, res) => {
    try{
        let image_filename = `${req.file.filename}`;
        const { name, description, price, category } = req.body;

        const food = await foodModel.create({
            name: name,
            description: description,
            price: price,
            image: image_filename || null,
            category: category
        });

        await food.save();

        res.status(201).json({ message: "Food added successfully" });
    }
    catch(error){
        console.log(error.message);
        res.status(500).json({ error: "Internal Server Error" });
    }
}