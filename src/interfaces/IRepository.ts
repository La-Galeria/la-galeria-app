export default interface IRepository<TEntity, TDto> {
  get(id: number): Promise<TEntity | null>;
  getAll(): Promise<TEntity[]>;
  add(data: TDto): Promise<TEntity>;
  update(id: number, data: TDto): Promise<TEntity | null>;
  remove(id: number): Promise<TEntity | null>
}