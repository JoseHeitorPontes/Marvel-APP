type Data<ResultType> = {
  count: number;
  total: number;
  limit: number;
  offset: number;
  results: ResultType[];
};

type ResponseData<ResultType> = {
  code: number;
  status: string;
  data: Data<ResultType>;
};
