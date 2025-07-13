import IDataset from "@/interfaces/IDataset";
import IRepository from "@/interfaces/IRepository";

export default abstract class BaseRepository<TEntity, TDto> implements IRepository<TEntity, TDto> {
  private dataset: IDataset<TEntity, TDto>;

  constructor(dataset: IDataset<TEntity, TDto> | any) {
    this.dataset = dataset;
  }

  async get(id: number): Promise<TEntity | null> {
    return await this.dataset.findFirst({
      where: { id }
    });
  }
  
  async getAll(): Promise<TEntity[]> {
    return await this.dataset.findMany();
  }

  async add(data: TDto): Promise<TEntity> {
    return await this.dataset.create({ data })
  }

  async update(id: number, data: TDto): Promise<TEntity | null> {
    const entity = await this.get(id);
    if (!entity)
      return null;

    return await this.dataset.update({
      where: { id },
      data
    });
  }

  async remove(id: number): Promise<TEntity | null> {
    const entity = await this.get(id);
    if (!entity)
      return null;

    return await this.dataset.delete({
      where: { id }
    });
  }
}