import {GenericActionRequest} from '@redux/actions/genericAction';
import {IStateType} from '@shared/state/IStateType';

export const generateAsyncActionCreator = <T>(action: T) => ({
  request: (
    isLoading: boolean,
  ): GenericActionRequest<T, IStateType<boolean>> => ({
    type: action,
    payload: {
      isLoading,
      data: null,
      error: null,
    },
  }),
  success: <D>(data: D): GenericActionRequest<T, IStateType<D>> => ({
    type: action,
    payload: {
      isLoading: false,
      data,
      error: null,
    },
  }),
  error: <D = any>(error: D): GenericActionRequest<T, IStateType<D>> => ({
    type: action,
    payload: {
      isLoading: false,
      data: null,
      error,
    },
  }),
});
