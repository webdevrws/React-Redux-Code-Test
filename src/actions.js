export const STEP = 'STEP';
export const SET_MAP_SIZE = 'SET_MAP_SIZE';
export const ADD_ENEMY = 'ADD_ENEMY';

export const step = (keyCode) => {
  return {
    type: STEP,
    keyCode,
  }
}

export const setMapSize = (width, height) => {
  return {
    type: SET_MAP_SIZE,
    width,
    height,
  }
};

export const addEnemy = (index) => {
  return {
    type: ADD_ENEMY,
    index
  }
}