import { Character } from "../models/character";
import { Characters } from "../models/characters";


const API = import.meta.env.VITE_API;

// comics?ts=1&apikey=1234&hash=ffd275c5130566a2916217b101f26150


const publicKey = import.meta.env.VITE_PUBLIC_KEY;
const hash = import.meta.env.VITE_HASH;

console.log(publicKey);
console.log(hash);
export const getCharacters = async () => {
  const resp = await fetch(`${API}/characters?ts=1&apikey=${publicKey}&hash=${hash}`, {method: 'GET'});

  const data: Characters = await resp.json();

  return data.data
};


export const getCharacter = async (id: string) => {
  const resp = await fetch(`${API}/characters/${id}?ts=1&apikey=${publicKey}&hash=${hash}`, {method: 'GET'});

  const data: Character = await resp.json();

  console.log(data)
  return data.data
};
