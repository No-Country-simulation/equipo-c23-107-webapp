import { AppDataSource } from "../../config/dataSource";
import { Images } from "./Images.entity";

class ImageRepository {
    async getAllImages() {
      try {
        const imageRepository = AppDataSource.getRepository(Images);
        const images = await imageRepository.find();
        return { success: true, data: images };
      } catch (error: any) {      
        return { success: false, message: error.message };
      }
    }

    async getImageById(id: number) {
      try {
        const imageRepository = AppDataSource.getRepository(Images);
        const image = await imageRepository.findOne({ where: { id } });
        return { success: true, data: image };
      } catch (error: any) {
        return { success: false, message: error.message };
      }
    }

    async createImage(url: string, title: string) {
      try {
        const imageRepository = AppDataSource.getRepository(Images);
        
        // Crear una nueva instancia de Images
        const newImage = imageRepository.create({ URL: url, title });
        
        // Guardar en la base de datos
        await imageRepository.save(newImage);
  
        return { success: true, data: newImage };
      } catch (error: any) {
        return { success: false, message: error.message };
      }
    }

    async updateImage(id: number, url: string, title: string) {
      try {
        const imageRepository = AppDataSource.getRepository(Images);
        
        // Buscar la imagen
        const image = await imageRepository.findOne({ where: { id } });
  
        if (!image) {
          return { success: false, message: "Imagen no encontrada" };
        }
  
        // Actualizar la imagen
        image.URL = url;
        image.title = title;
  
        // Guardar en la base de datos
        await imageRepository.save(image);
  
        return { success: true, data: image };
      } catch (error: any) {
        return { success: false, message: error.message };
      }
    }
  }
  
  export default new ImageRepository();