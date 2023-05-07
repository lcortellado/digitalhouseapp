import { StatusBar } from "react-native";
import { View } from "react-native";
import { useFonts } from "expo-font";
import { Loading } from "./src/components/Loading/index";
import { Routes } from "./src/routes";

export default function App() {
  const [fontsLoaded] = useFonts({
    "Avenir-Black": require("./assets/fonts/AvenirLTStd-Black.otf"),
    "Avenir-Book": require("./assets/fonts/AvenirLTStd-Book.otf"),
    "Avenir-Roman": require("./assets/fonts/AvenirLTStd-Roman.otf"),
  });
  return (
    <View style={{ flex: 1, backgroundColor: "red" }}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />
      {fontsLoaded ? <Routes /> : <Loading />}
    </View>
  );
}
