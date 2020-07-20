import { Dispatch, Action } from 'redux';

export const addFavorite = (character: object) => {
  return (dispatch: Dispatch) => {
    dispatch({ type: 'ADD_FAVORITE', payload: { character } });
  };
};

export const delFavorite = (id: string) => {
  return (dispatch: Dispatch) => {
    dispatch({ type: 'DEL_FAVORITE', payload: { id } });
  };
};
