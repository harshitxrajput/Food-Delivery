import express from 'express';
import multer from 'multer';

import { addFood } from '../controllers/food.controller.js';

const router = express.Router();

const storage = multer.diskStorage({
    destination: "uploads",
    filename: (req, file, cb) => {
        return cb(null, `${Date.now()}${file.originalname}`)
    }
})

const upload = multer({ storage: storage })

router.post("/add", upload.single("image"), addFood);

export default router;