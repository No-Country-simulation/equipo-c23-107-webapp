import { Router } from 'express';
import { imagesController } from './Images.controller';

const imagesRouter = Router();

imagesRouter.get("/images", imagesController.getAllImages);
imagesRouter.post("/images", imagesController.createImage);

export default imagesRouter;