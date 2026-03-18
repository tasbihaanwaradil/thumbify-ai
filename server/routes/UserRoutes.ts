import express from 'express';
import { getThumbnailbyId, getUsersThumbnails } from '../controllers/UserControllers.js';

const UserRouter = express.Router();

UserRouter.get('/thumbnails', getUsersThumbnails)
UserRouter.get('/thumbnail/:id', getThumbnailbyId)

export default UserRouter;
