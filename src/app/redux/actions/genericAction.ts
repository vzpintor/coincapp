export type GenericActionRequest<T, P = any> = {
  type: T;
  payload: P;
};

export type GenericAction<T, P = any> = {
  type: keyof T;
  payload: P;
};
