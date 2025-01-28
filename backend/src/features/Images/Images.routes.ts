import { Router } from 'express';
import { imagesController } from './Images.controller';

const imagesRouter = Router();

imagesRouter.get("/images", imagesController.getAllImages);
imagesRouter.get("/images/:id", imagesController.getImageById);
imagesRouter.post("/images", imagesController.createImage);
imagesRouter.put("/images/:id", imagesController.updateImage);
imagesRouter.delete("/images/:id", imagesController.deleteImage);

export default imagesRouter;