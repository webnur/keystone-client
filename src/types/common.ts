export interface IMeta {
  limit: number;
  page: number;
  total: number;
}

export type ResponseSuccessType = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any;
  meta?: IMeta;
};

export type IGenericErrorResponse = {
  statusCode: number;
  message: string;
  errorMessages: IGenericErrorMessage[];
};

export type IGenericErrorMessage = {
  path: string | number;
  message: string;
};

export interface ICourse {
  id: string;
  title: string;
  code: string;
  credits: number;
  createdAt: string;
  updatedAt: string;
}
