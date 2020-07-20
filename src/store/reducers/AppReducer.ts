import produce from 'immer';

interface Character {
  id: string;
}

interface State {
  favorites: Character[];
}

const initialState: State = {
  favorites: [],
};

interface Actions {
  type: string;
  payload: {
    id: string;
    character: Character;
  };
}

const AppReducer = (state = initialState, action: Actions): State => {
  return produce(state, draft => {
    switch (action.type) {
      case 'ADD_FAVORITE': {
        draft.favorites.push(action.payload.character);
        break;
      }

      case 'DEL_FAVORITE': {
        draft.favorites = draft.favorites.filter(
          favorite => favorite.id !== action.payload.id,
        );
        break;
      }

      default:
    }
  });
};

export default AppReducer;
