export default interface IDataset<TEntity, TDto> {
  findFirst(args: { where: { id: number }}): Promise<TEntity>;
  findMany(): Promise<TEntity[]>;
  create(args: { data: TDto }): Promise<TEntity>;
  update(args: { where: { id: number }, data: TDto }): Promise<TEntity>;
  delete(args: { where: { id: number }}): Promise<TEntity>;
}