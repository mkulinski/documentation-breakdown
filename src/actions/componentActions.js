import * as types from '../constants/componentActionTypes';


export function errorLoadingComponents() {
  return {
    type: types.ERROR_LOADING_COMPONENTS,
  };
}

export function requestComponents() {
  return {
    type: types.REQUEST_COMPONENTS,
  };
}

export function loadComponents(allComponents) {
  return {
    type: types.LOAD_COMPONENTS,
    payload: { allComponents },
  };
}

export function fetchComponents() {
  return (dispatch) => {
    dispatch(requestComponents);

    fetch('https://medcircle-coding-project.s3.amazonaws.com/api/Components.json')
      .then(response => {
        return !response.ok ? dispatch(errorLoadingComponents) : response;
      })
      .then(response => response.json())
      .then(Components => dispatch(loadComponents(Components)))
      .catch(() => dispatch(errorLoadingComponents));
  };
}
