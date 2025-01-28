import { Router } from 'express';
import { imagesController } from './Images.controller';

const imagesRouter = Router();

imagesRouter.get("/images", imagesController.getAllImages);
imagesRouter.get("/images/:id", imagesController.getImageById);
imagesRouter.post("/images", imagesController.createImage);

export default imagesRouter;