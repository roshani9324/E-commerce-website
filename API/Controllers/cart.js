import { Cart } from "../Models/Cart";
export const addToCart =async (req,res)=>{
    const {productId,title,price,qty,imgSrc}=req.body

    const userId = "66e991c8f951339fbf8398b8";
    let cart =new Cart({userId,items:[]})
    cart.items.push({ productId, title, price, qty, imgSrc });

    await cart.save()
    res.json({message:'Items Added To Cart',cart})
}