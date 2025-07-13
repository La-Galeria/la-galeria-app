import { VentaServicio } from "@/generated/prisma";
import BaseController from "./baseController";
import IController from "@/interfaces/IController";
import ServiceSaleDTO from "@/dtos/serviceSaleDto";
import serviceSalesRepo from "@/repositories/serviceSalesRepository";

class ServiceSaleController extends BaseController<VentaServicio, ServiceSaleDTO> implements IController {
  constructor() { 
    super(serviceSalesRepo);
  }
}

const serviceSaleController = new ServiceSaleController();
export default serviceSaleController;