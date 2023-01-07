import { Router } from 'express';
import { getIndex, postIndex, patchIndex, deleteIndex } from '../controllers/index.controller.js';

const router = Router();

router.get('/', getIndex);

router.post('/', postIndex);

router.patch('/', patchIndex);

router.delete('/', deleteIndex);

export default router;
