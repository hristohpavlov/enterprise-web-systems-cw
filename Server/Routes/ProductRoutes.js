import express from 'express';
import asyncHandler from 'express-async-handler';
import protect from '../Middleware/AuthMiddleware.js';
import Product from '../Models/ProductModel.js';

const productRoute = express.Router()

// get all products
productRoute.get("/",
    asyncHandler(async( req, res) => {
        const products = await Product.find({})
        res.json(products);
    })
);

// get 1 product
productRoute.get("/:id",
    asyncHandler(async( req, res) => {
        const product = await Product.findById(req.params.id);
        if(product){
            res.json(product);
        } else {
            res.status(404);
            throw new Error("Product not found");
        }
    })
);

// get product review
productRoute.post("/:id/review",
protect,
    asyncHandler(async (req, res) => {
        const {rating,comment } = req.body;
        const product = await Product.findById(req.params.id);
        if(product){
            const alreadyReviewed = product.reviews.find(
                (r) => r.user.toString() === req.user._id.toString()
            );
            if(alreadyReviewed){
                res.status(400)
                throw new Error("Product already reviewed")
            }
            const review = {
                name:req.user.name,
                rating:Number(rating),
                comment,
                user: req.user._id,
            };
            product.reviews.push(review);
            product.numReviews = product.reviews.length;
            product.rating = product.reviews.reduce((acc,item) => item.rating + acc, 0) / product.reviews.length;

            await product.save()
            res.status(201).json({message:"Review added"});
        } else {
            res.status(404);
            throw new Error("Product not found");
        }
    })
);


export default productRoute;