export interface IStateType<T> {
  isLoading: boolean;
  data: T | null;
  error: any;
}
