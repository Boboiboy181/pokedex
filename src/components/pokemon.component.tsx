import { PokemonClient } from "pokenode-ts";
import { useEffect } from "react";
import {
  Image,
  SafeAreaView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import { Pokemon, PokemonStats } from "../store/pokemon/pokemon.type";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { selectCurrentPokemon } from "../store/pokemon/pokemon.selector";
import { selectCurrentCounter } from "../store/counter/counter.selector";
import { setPokemon } from "../store/pokemon/pokemon.reducer";
import { getBackgroundColor } from "../utils/getBackgroundColor";

import { styles } from "./pokemon.styles";
import {
  decrement,
  decrementByAmount,
  increment,
  incrementByAmount,
} from "../store/counter/counter.reducer";
import { Colors } from "../constants/colors";

const PokemonInfo = () => {
  const dispatch = useDispatch();
  const currentPokemon = useSelector(selectCurrentPokemon);
  const currentCounter = useSelector(selectCurrentCounter);

  useEffect(() => {
    const fetchPokemon = async () => {
      const api = new PokemonClient();
      await api
        .getPokemonById(currentCounter.value)
        .then((pokemon) => {
          const currenPokemonStats: PokemonStats = {
            hp: pokemon.stats[0].base_stat,
            attack: pokemon.stats[1].base_stat,
            defense: pokemon.stats[2].base_stat,
            specialAttack: pokemon.stats[3].base_stat,
            specialDefense: pokemon.stats[4].base_stat,
            speed: pokemon.stats[5].base_stat,
          };
          const curretPokemon: Pokemon = {
            id: pokemon.id,
            name: pokemon.name,
            image: pokemon.sprites?.front_default?.toString(),
            height: pokemon.height,
            weight: pokemon.weight,
            type: pokemon?.types[0]?.type?.name?.toString(),
            move: pokemon?.moves[0]?.move?.name?.toString(),
            stats: currenPokemonStats,
            color: getBackgroundColor(
              pokemon?.types[0]?.type?.name?.toString()
            ),
          };
          dispatch(setPokemon(curretPokemon));
        })
        .catch((err) => {
          console.log(err);
        });
    };
    fetchPokemon();
  }, [currentCounter, dispatch]);

  const handleIncrement = () => {
    dispatch(increment());
  };

  const handleIncrementByAmout = () => {
    dispatch(incrementByAmount(10));
  };

  const handleDecrement = () => {
    dispatch(decrement());
  };

  const handleDecrementByAmout = () => {
    dispatch(decrementByAmount(10));
  };

  const StatLine = (props: {
    number: number | undefined;
    color: string | undefined;
  }) => {
    return (
      <View
        style={{
          width: props.number,
          marginVertical: 6,
          height: 5,
          marginLeft: 10,
          borderRadius: 5,
          backgroundColor: props.color,
        }}
      />
    );
  };

  return (
    <View style={[styles.container, { backgroundColor: currentPokemon.color }]}>
      <StatusBar barStyle="light-content" />
      <Image
        style={styles.pokeball}
        source={require("../assets/images/pokeball.png")}
      />
      <View style={styles.whiteSheet} />
      <SafeAreaView
        style={{
          justifyContent: "center",
        }}
      >
        <View style={styles.row}>
          <Text style={styles.pokemonName}>
            {currentPokemon.name.charAt(0).toUpperCase() +
              currentPokemon.name.slice(1)}
          </Text>
          <Text
            style={[
              styles.pokemonName,
              { textAlign: "right", marginRight: 20, fontSize: 25 },
            ]}
          >
            #{currentPokemon.id}
          </Text>
        </View>
        <View style={styles.row}>
          <View>
            <TouchableOpacity style={styles.button} onPress={handleDecrement}>
              <Text style={styles.buttonText}>
                <AntDesign
                  size={15}
                  color={Colors.mediumGray}
                  name="caretleft"
                />
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={handleDecrementByAmout}
            >
              <Text style={styles.buttonText}>
                <AntDesign
                  size={15}
                  color={Colors.mediumGray}
                  name="banckward"
                />
              </Text>
            </TouchableOpacity>
          </View>
          <Image
            style={styles.pokemonImage}
            source={{ uri: currentPokemon.image }}
          />
          <View>
            <TouchableOpacity style={styles.button} onPress={handleIncrement}>
              <Text style={styles.buttonText}>
                <AntDesign
                  size={15}
                  color={Colors.mediumGray}
                  name="caretright"
                />
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={handleIncrementByAmout}
            >
              <Text style={styles.buttonText}>
                <AntDesign size={15} color={Colors.mediumGray} name="forward" />
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={[
            styles.pokemonTypeContainer,
            { alignSelf: "center", backgroundColor: currentPokemon.color },
          ]}
        >
          <Text
            style={{
              color: Colors.white,
              fontWeight: "bold",
              fontSize: 16,
              textAlign: "center",
              paddingHorizontal: 15,
            }}
          >
            {currentPokemon.type}
          </Text>
        </View>
        <View style={{ justifyContent: "center" }}>
          <Text
            style={{
              textAlign: "center",
              fontWeight: "bold",
              fontSize: 24,
              marginTop: 20,
              color: currentPokemon.color,
            }}
          >
            About
          </Text>
          <View
            style={[
              styles.row,
              { justifyContent: "center", marginTop: 20, gap: 20 },
            ]}
          >
            <View style={{ alignItems: "center" }}>
              <Text>
                🏋️‍♀️
                {currentPokemon.weight
                  ?.toString()
                  .slice(0, currentPokemon.weight.toString().length - 1)}
                .
                {currentPokemon.weight
                  ?.toString()
                  .slice(
                    currentPokemon.weight.toString().length - 1,
                    currentPokemon.weight.toString().length
                  )}
                kg
              </Text>
              <Text
                style={{
                  color: Colors.mediumGray,
                  fontSize: 12,
                  marginTop: 10,
                }}
              >
                Weight
              </Text>
            </View>
            <View style={{ alignItems: "center" }}>
              <Text>
                📏
                {currentPokemon.height
                  ?.toString()
                  .slice(0, currentPokemon.height.toString().length - 1)}
                .
                {currentPokemon.height
                  ?.toString()
                  .slice(
                    currentPokemon.height.toString().length - 1,
                    currentPokemon.height.toString().length
                  )}
                m
              </Text>
              <Text
                style={{
                  color: Colors.mediumGray,
                  fontSize: 12,
                  marginTop: 10,
                }}
              >
                Height
              </Text>
            </View>
            <View style={{ alignItems: "center" }}>
              <Text>{currentPokemon.move?.toString()}</Text>
              <Text
                style={{
                  color: Colors.mediumGray,
                  fontSize: 12,
                  marginTop: 10,
                }}
              >
                Move
              </Text>
            </View>
          </View>
        </View>
        <View>
          <Text
            style={{
              textAlign: "center",
              fontWeight: "bold",
              fontSize: 24,
              marginTop: 20,
              color: currentPokemon.color,
            }}
          >
            Base Stats
          </Text>
          <View
            style={[
              styles.row,
              {
                justifyContent: "flex-start",
                marginHorizontal: 30,
                marginTop: 20,
              },
            ]}
          >
            <View
              style={{
                alignItems: "flex-end",
                marginRight: 15,
                marginLeft: 15,
              }}
            >
              <Text>HP</Text>
              <Text>Attack</Text>
              <Text>Defense</Text>
              <Text>Special Attack</Text>
              <Text>Special Defense</Text>
              <Text>Speed</Text>
            </View>
            <View
              style={{
                height: 100,
                width: 2,
                backgroundColor: Colors.lightGray,
                marginRight: 15,
              }}
            />
            <View>
              <Text>{currentPokemon.stats?.hp}</Text>
              <Text>{currentPokemon.stats?.attack}</Text>
              <Text>{currentPokemon.stats?.defense}</Text>
              <Text>{currentPokemon.stats?.specialAttack}</Text>
              <Text>{currentPokemon.stats?.specialDefense}</Text>
              <Text>{currentPokemon.stats?.speed}</Text>
            </View>
            <View>
              <StatLine
                number={currentPokemon.stats?.hp}
                color={currentPokemon.color}
              />
              <StatLine
                number={currentPokemon.stats?.attack}
                color={currentPokemon.color}
              />
              <StatLine
                number={currentPokemon.stats?.defense}
                color={currentPokemon.color}
              />
              <StatLine
                number={currentPokemon.stats?.specialAttack}
                color={currentPokemon.color}
              />
              <StatLine
                number={currentPokemon.stats?.specialDefense}
                color={currentPokemon.color}
              />
              <StatLine
                number={currentPokemon.stats?.speed}
                color={currentPokemon.color}
              />
            </View>
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default PokemonInfo;
