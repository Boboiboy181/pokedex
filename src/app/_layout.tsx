import { View } from "react-native";
import { Provider } from "react-redux";
import { store } from "../store/store";
import { Slot } from "expo-router";

const Layout = () => {
  return (
    <Provider store={store}>
      <View>
        <Slot />
      </View>
    </Provider>
  );
};

export default Layout;
