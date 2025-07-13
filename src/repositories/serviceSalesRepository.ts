import ServiceSaleDTO from "@/dtos/serviceSaleDto";
import { VentaServicio } from "@/generated/prisma";
import IRepository from "@/interfaces/IRepository";
import prisma from "@/lib/prisma";
import BaseRepository from "./baseRepository";

class ServiceSalesRepo extends BaseRepository<VentaServicio, ServiceSaleDTO> implements IRepository<VentaServicio, ServiceSaleDTO> {
  constructor() {
    super(prisma.ventaServicio);
  }
}

const serviceSalesRepo = new ServiceSalesRepo();
export default serviceSalesRepo;