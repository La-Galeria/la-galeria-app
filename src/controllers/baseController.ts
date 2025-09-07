import IController from "@/interfaces/IController";
import IRepository from "@/interfaces/IRepository";
import Params from "@/interfaces/routeParams";
import { redirect } from "next/navigation";
import { NextResponse } from "next/server";

export default abstract class BaseController<TEntity, TDto> implements IController {
  private repo: IRepository<TEntity, TDto>;

  constructor(repo: IRepository<TEntity, TDto>) {
    this.repo = repo;
  }

  public async add(formData: FormData): Promise<NextResponse> {
    const data: TDto = await this.fillData(formData);
    const newEntity = await this.repo.add(data);
    return this.okResponse(newEntity);
  }
  
  public async get({ params }: Params): Promise<NextResponse> {
    const id = this.getIdFromParams({ params });
    const entity = await this.repo.get(id);
    if (!entity)
      return this.notFoundResponse();

    return this.okResponse(entity);
  }

  public async getAll(): Promise<NextResponse> {
    const entities = await this.repo.getAll();
    return this.okResponse(entities);
  }

  public async update({ params }: Params, request: Request): Promise<NextResponse> {
    const id = this.getIdFromParams({ params });
    const data = await request.json();
    const updatedEntity = await this.repo.update(id, data);
    if (!updatedEntity)
      return this.notFoundResponse();

    return this.okResponse(updatedEntity);
  }

  public async delete({ params }: Params): Promise<NextResponse> {
    const id = this.getIdFromParams({ params });
    const deletedEntity = await this.repo.remove(id);
    if (!deletedEntity)
      return this.notFoundResponse();

    return this.okResponse(deletedEntity);
  }

  private getIdFromParams({ params }: Params) {
    return Number(params.id);
  }

  private notFoundResponse() {
    return NextResponse.json({}, { status: 404 });
  }

  private okResponse(data: unknown) {
    return NextResponse.json(data);
  }

  protected abstract fillData(formData: FormData): Promise<TDto>;
}