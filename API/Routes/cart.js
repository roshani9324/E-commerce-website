import express from 'express'
import { addToCart } from '../Controllers/cart';

const router =express.Router();
//add To cart
router.post('/add',addToCart)

// export default router;






