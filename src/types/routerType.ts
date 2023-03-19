export interface IRoute {
  path: string;
  // eslint-disable-next-line @typescript-eslint/ban-types
  Page: Function;
  name?: string;
}
