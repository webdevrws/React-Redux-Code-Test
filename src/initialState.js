
export const initialState = {
  mapHeight: 0,
  mapWidth: 0,
  //1 dimensional array representing the map
  map: [],

  player: {
    //index in map array indicating where the player currently is
    position: 0,
    //player's current health
    hp: 100,
    //how much the player will damage enemies for.
    damage: 1,
  },
  enemies: [
    /*
    {
      hp: 5,
      damage: 1,
      position: index,
    }
    */
  ],
  log: [],
};
