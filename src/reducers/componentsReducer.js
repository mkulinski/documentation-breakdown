import * as types from '../constants/componentActionTypes';
import initialState from './initialState';


export default function componentsReducer(state = initialState.components, action) {
  switch (action.type) {
    case types.REQUEST_COMPONENTS: {
      return {
        ...state,
        error: false,
        isFetching: true,
      };
    }

    case types.LOAD_COMPONENTS: {
      const allComponents = action.payload.allComponents.data;
      return {
        ...state,
        isFetching: false,
        error: false,
        allComponents,
      };
    }

    case types.ERROR_LOADING_COMPONENTS: {
      return {
        ...state,
        isFetching: false,
        error: true,
      };
    }

    default:
      return state;
  }
}
