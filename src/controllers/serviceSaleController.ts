import { VentaServicio } from "@/generated/prisma";
import BaseController from "./baseController";
import IController from "@/interfaces/IController";
import ServiceSaleDTO from "@/dtos/serviceSaleDto";
import serviceSalesRepo from "@/repositories/serviceSalesRepository";
import servicesRepo from "@/repositories/servicesRepository";
import { notFound } from "next/navigation";

class ServiceSaleController
  extends BaseController<VentaServicio, ServiceSaleDTO>
  implements IController
{
  protected async fillData(formData: FormData): Promise<ServiceSaleDTO> {
    const serviceId = Number(formData.get("id_servicio"));
    const service = await servicesRepo.get(serviceId);
    if (!service) {
      return notFound();
    }

    const amount = Number(formData.get("cantidad"));

    const sale: ServiceSaleDTO = {
      fecha: new Date(String(formData.get("fecha"))),
      cantidad: amount,
      idServicio: serviceId,
      valor: service?.precio,
    };
    return sale;
  }
  constructor() {
    super(serviceSalesRepo);
  }
}

const serviceSaleController = new ServiceSaleController();
export default serviceSaleController;
