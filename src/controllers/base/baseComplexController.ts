import IRepository from "@/interfaces/IRepository";
import BaseController from "./baseController";

export default abstract class BaseComplexController<TEntity extends object, TDto, TDependency, TDependencyDto> extends BaseController<TEntity, TDto> {
  private dependencyRepo: IRepository<TDependency, TDependencyDto>;

  constructor(repo: IRepository<TEntity, TDto>, dependencyRepo: IRepository<TDependency, TDependencyDto>) {
    super(repo);
    this.dependencyRepo = dependencyRepo;
  }

  protected async validate(formData: FormData): Promise<boolean> {
    const dependencyExists = await this.validateDependencyExistence(formData);
    return dependencyExists;
  }

  private async validateDependencyExistence(formData: FormData): Promise<boolean> {
    const dependency = await this.getDependency(formData);

    if (!dependency)
      return false;

    return true;
  }

  protected async getDependency(formData: FormData): Promise<TDependency | null> {
    const key = this.getKey();
    const id = Number(formData.get(key));
    const dependency = await this.dependencyRepo.get(id);
    return dependency;
  }

  protected abstract getKey(): string;
}