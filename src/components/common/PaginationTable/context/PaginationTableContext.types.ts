export interface IPaginationTableContext {
  state: {
    contentStore: {
      res: any;
      status: string;
      error: any;
    };
  };
  actions: { getContent: (url: string, filterParams: any) => void };
}
