import { IGameData } from '../types/GameData.types';

export const saveToLocalStorage = async (gameData: Partial<IGameData>) => {
  Object.entries(gameData).forEach(([key, value]) => {
    localStorage.setItem(key, JSON.stringify(value));
  });
};
