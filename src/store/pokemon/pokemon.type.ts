export type Pokemon = {
  id: number;
  name: string;
  image?: string;
  height?: number;
  weight?: number;
  type?: string;
  move?: string;
  stats?: PokemonStats;
  color?: string;
};

export type PokemonStats = {
  hp: number;
  attack: number;
  defense: number;
  specialAttack: number;
  specialDefense: number;
  speed: number;
};
