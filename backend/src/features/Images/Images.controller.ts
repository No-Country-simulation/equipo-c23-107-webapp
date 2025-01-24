import { Request, Response } from "express";
import ImagesRepository from "./Images.repository";

class ImagesController {
  async getAllImages(req: Request, res: Response) {
    const result = await ImagesRepository.getAllImages();
    res.json(result);
  }

  async createImage(req: Request, res: Response) {        
    if (!req.body) {
      res.status(400).json({ success: false, message: "Petición inválida" });
      return
    }

    const { url, title } = req.body;

    if (!url || !title) {
      res.status(400).json({ success: false, message: "URL y título son obligatorios" });
      return
    }    

    const result = await ImagesRepository.createImage(url, title);
    
    if (result.success) {
      console.log("Imagen creada con éxito");
      res.status(201).json(result);
    } else {
      res.status(500).json(result);
    }
  }
}

export const imagesController = new ImagesController();
