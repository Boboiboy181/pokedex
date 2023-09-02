import { StyleSheet } from "react-native";
import { Colors } from "../constants/colors";

export const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    backgroundColor: Colors.fire,
  },
  textContainer: {
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  pokeball: {
    position: "absolute",
    right: 20,
    top: 50,
    width: 200,
    height: 200,
    opacity: 0.1,
  },
  pokemonName: {
    fontSize: 35,
    color: Colors.white,
    fontWeight: "bold",
    textAlign: "left",
    marginLeft: 20,
    letterSpacing: 1.1,
  },
  pokemonImage: {
    width: 200,
    height: 200,
  },
  button: {
    width: 50,
    height: 50,
    backgroundColor: Colors.white + "70",
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
  },
  buttonText: {
    fontSize: 20,
    color: Colors.black,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  pokemonTypeContainer: {
    marginTop: 50,
    height: 30,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  whiteSheet: {
    position: "absolute",
    borderRadius: 25,
    backgroundColor: Colors.white,
    width: "90%",
    height: "42%",
    alignSelf: "center",
    bottom: 210
  },
});
