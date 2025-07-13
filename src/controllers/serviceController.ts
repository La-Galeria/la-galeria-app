import { Servicio } from "@/generated/prisma";
import BaseController from "./baseController";
import { ServiceDTO } from "@/dtos/serviceDto";
import IController from "@/interfaces/IController";
import servicesRepo from "@/repositories/servicesRepository";

class ServiceController extends BaseController<Servicio, ServiceDTO> implements IController {
  constructor() { 
    super(servicesRepo);
  }
}

const serviceController = new ServiceController();
export default serviceController;