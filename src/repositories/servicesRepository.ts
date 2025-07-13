import { ServiceDTO } from "@/dtos/serviceDto";
import { Servicio } from "@/generated/prisma";
import IRepository from "@/interfaces/IRepository";
import prisma from "@/lib/prisma";
import BaseRepository from "./baseRepository";

class ServicesRepo extends BaseRepository<Servicio, ServiceDTO> implements IRepository<Servicio, ServiceDTO> {
  constructor() {
    super(prisma.servicio);
  }
}

const servicesRepo = new ServicesRepo();
export default servicesRepo;