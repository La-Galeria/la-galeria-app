import { Servicio } from "@/generated/prisma";
import BaseController from "./baseController";
import { ServiceDTO } from "@/dtos/serviceDto";
import IController from "@/interfaces/IController";
import servicesRepo from "@/repositories/servicesRepository";

class ServiceController extends BaseController<Servicio, ServiceDTO> implements IController {
  protected async fillData(formData: FormData): Promise<ServiceDTO> {
    return {
      nombre: String(formData.get("nombre")),
      descripcion: String(formData.get("descripcion")),
      precio: Number(formData.get("precio")),
    };
  }

  constructor() { 
    super(servicesRepo);
  }
}

const serviceController = new ServiceController();
export default serviceController;