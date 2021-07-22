/* eslint-disable no-unused-vars */
export interface BaseService<T> {
  create: (data: T) => Promise<T>;
  getAll: () => Promise<Array<T>>;
  getById: (id: string) => Promise<T | null>;
  update: (id: string, data: T) => Promise<T | null>;
  delete: (id: string) => Promise<string>;
}
