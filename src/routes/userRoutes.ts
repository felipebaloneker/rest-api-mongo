import express from "express";
import { create, erase, index, update } from "../controller/UserController";

const router = express.Router()

router.post('/', create)
router.get('/', index)
router.put('/:email', update)
router.delete('/:email', erase)

export default router