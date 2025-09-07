import IController from "@/interfaces/IController";
import IRepository from "@/interfaces/IRepository";
import Params from "@/interfaces/routeParams";
import { redirect } from "next/navigation";
import { NextResponse } from "next/server";

export default abstract class BaseController<TEntity extends object, TDto> implements IController {
  private repo: IRepository<TEntity, TDto>;

  constructor(repo: IRepository<TEntity, TDto>) {
    this.repo = repo;
  }

  public async add(formData: FormData): Promise<ResponseDTO> {
    const isValid = await this.validate(formData);
    if (!isValid)
      return this.badRequestResponse();

    const data: TDto = await this.fillData(formData);
    const newEntity = await this.repo.add(data);
    return this.okResponse(newEntity);
  }
  
  public async get({ params }: Params): Promise<ResponseDTO> {
    const id = this.getIdFromParams({ params });
    const entity = await this.repo.get(id);
    if (!entity)
      return this.notFoundResponse();

    return this.okResponse(entity);
  }

  public async getAll(): Promise<ResponseDTO> {
    const entities = await this.repo.getAll();
    return this.okResponse(entities);
  }

  public async update({ params }: Params, request: Request): Promise<ResponseDTO> {
    const id = this.getIdFromParams({ params });
    const data = await request.json();
    const updatedEntity = await this.repo.update(id, data);
    if (!updatedEntity)
      return this.notFoundResponse();

    return this.okResponse(updatedEntity);
  }

  public async delete({ params }: Params): Promise<ResponseDTO> {
    const id = this.getIdFromParams({ params });
    const deletedEntity = await this.repo.remove(id);
    if (!deletedEntity)
      return this.notFoundResponse();

    return this.okResponse(deletedEntity);
  }

  private getIdFromParams({ params }: Params) {
    return Number(params.id);
  }

  private notFoundResponse(): ResponseDTO {
    return { status: 404 }
  }

  private okResponse(data: TEntity | TEntity[]): ResponseDTO {
    return {
      status: 200,
      data
    };
  }

  private badRequestResponse(): ResponseDTO {
    return {
      status: 400,
      data: {
        message: "Hay un error en la operación."
      }
    };
  }

  protected abstract fillData(formData: FormData): Promise<TDto>;
  protected async validate(formData: FormData): Promise<boolean> {
    return true;
  }
}