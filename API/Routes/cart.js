import express from 'express'
import { addToCart, clearCart, decreaseProductQty, removeProductFromCart, userCart } from '../Controllers/cart.js';
import { Authenticated } from '../Middlewares/auth.js';

const router =express.Router();
//add To cart
router.post('/add',Authenticated,addToCart)

//get user cart
router.get("/user", Authenticated, userCart);

//get remove user cart 
router.delete("/remove/:productId", Authenticated, removeProductFromCart);

//clear cart
router.delete("/clear", Authenticated, clearCart);

//decrease items qty
router.post("/--qty", Authenticated, decreaseProductQty);

export default router;






