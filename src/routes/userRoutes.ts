import express from 'express';
import controllerCode from '../controller/UserController';

const router = express.Router();

router.post('/', controllerCode.get);
router.get('/', controllerCode.create);
router.put('/:email', controllerCode.update);
router.delete('/:email', controllerCode.delete);

export default router;
