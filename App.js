import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import InputBalance from "./components/InputBalance";

//Pagina iniziale funzione
export default function App() {
  return (
    <View style={styles.container}>
      <Text>FIORINO</Text>
      <StatusBar style="auto" />
    </View>
  );
}
//Stili
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#333",
    alignItems: "center",
    justifyContent: "center",
  },
});
