import { CharacterEntityApi } from './character-collection.api-model';
import { mockCharacterCollection } from './character-collection.mock-data';
import axios from 'axios';

let characterCollection = [...mockCharacterCollection];

export const getCharacterCollection = async (): Promise<
  CharacterEntityApi[]
> => {
  //return characterCollection;
  return axios
    .get('https://rickandmortyapi.com/api/character/')
    .then((res) => res.data)
    .then((res) => res.results);
};

export const deleteCharacter = async (id: number): Promise<boolean> => {
  //characterCollection = characterCollection.filter((h) => h.id !== id);
  //return true;

  axios.delete(`http://localhost:3000/characters/${id}`);

  return true;
};
