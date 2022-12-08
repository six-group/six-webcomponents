import { SortDirection, FilterMode } from '../six-table-header-cell/types';

export type Item = Record<string, unknown>;

export type BasedOnKeys<T extends keyof any, B> = {
  [K in T]?: B;
};

export type Columns<T> = BasedOnKeys<keyof T, string>;

export type SortModel<T> = BasedOnKeys<keyof T, SortDirection>;

export type Comparator<T> = (a: T, b: T) => number;

export type CompareModel<T> = BasedOnKeys<keyof T, Comparator<T>>;

export type FilterModel<T> = BasedOnKeys<keyof T, BasedOnKeys<FilterMode, string>>;

export type Renderer<T> = (value: T) => string;

export type RenderModel<T> = BasedOnKeys<keyof T, Renderer<T>>;

export type Data<T> = {
  columns: Columns<T>;
  sort?: SortModel<T>;
  compare?: CompareModel<T>;
  render?: RenderModel<T>;
  filter?: FilterModel<T>;
  quickFilter?: string;
  rows: T[];
};

const assertions = [
  (value) => typeof value === 'object',
  (value) => typeof value.columns === 'object',
  (value) => Array.isArray(value.rows),
  (value) => value.sort === undefined || typeof value.sort === 'object',
];

const apply =
  <T>(value: T) =>
  (f: (value: T) => boolean) =>
    f(value);

export const isData = <T>(value?: unknown): value is Data<T> => assertions.every(apply(value));

export interface TableReadyPayload {}

export interface TableRowClickedPayload<T extends Item> {
  event: MouseEvent;
  item: T;
}

export interface TableCellClickedPayload<T extends Item> {
  event: MouseEvent;
  item: T;
  key: string;
}
