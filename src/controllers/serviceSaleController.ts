import { Servicio, VentaServicio } from "@/generated/prisma";
import IController from "@/interfaces/IController";
import ServiceSaleDTO from "@/dtos/serviceSaleDto";
import serviceSalesRepo from "@/repositories/serviceSalesRepository";
import servicesRepo from "@/repositories/servicesRepository";
import BaseComplexController from "./base/baseComplexController";
import { ServiceDTO } from "@/dtos/serviceDto";

class ServiceSaleController
  extends BaseComplexController<VentaServicio, ServiceSaleDTO, Servicio, ServiceDTO>
  implements IController
{
  protected getKey(): string {
    return "id_servicio";
  }

  protected async fillData(formData: FormData): Promise<ServiceSaleDTO> {
    const service = await this.getDependency(formData);
    const amount = Number(formData.get("cantidad"));

    const sale: ServiceSaleDTO = {
      fecha: new Date(String(formData.get("fecha"))),
      cantidad: amount,
      idServicio: service!.id,
      valor: service!.precio,
    };
    return sale;
  }
  constructor() {
    super(serviceSalesRepo, servicesRepo);
  }
}

const serviceSaleController = new ServiceSaleController();
export default serviceSaleController;
