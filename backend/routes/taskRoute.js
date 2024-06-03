import express from 'express';
import { deleteTask, getTask, setTask, updateTask } from '../controllers/taskController.js';
import { protect } from '../middleware/authMiddleware.js';

const router=express.Router();

router.get("/",protect,getTask);
router.post('/',protect,setTask);
router.put('/:id',protect,updateTask);
router.delete('/:id',protect,deleteTask);

export default router;