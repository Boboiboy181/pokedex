import { Colors } from "../constants/colors";

export const getBackgroundColor = (type: string) => {
  switch (type) {
    case "grass":
      return Colors.grass;
    case "water":
      return Colors.water;
    case "fire":
      return Colors.fire;
    case "electric":
      return Colors.electric;
    case "psychic":
      return Colors.psychic;
    case "poison":
      return Colors.poison;
    case "bug":
      return Colors.bug;
    case "flying":
      return Colors.flying;
    case "fighting":
      return Colors.fighting;
    case "normal":
      return Colors.normal;
    case "rock":
      return Colors.rock;
    case "ground":
      return Colors.ground;
    case "ghost":
      return Colors.ghost;
    case "dark":
      return Colors.dark;
    case "steel":
      return Colors.steel;
    case "fairy":
      return Colors.fairy;
    case "dragon":
      return Colors.dragon;
    case "ice":
      return Colors.ice;
    case "unknown":
      return Colors.unknown;
    default:
      return Colors.black;
  }
};
