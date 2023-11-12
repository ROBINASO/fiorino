import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import InputBalance from "./components/PresentetionalComponents/InputBalance";
import ViewBalance from "./components/PresentetionalComponents/ViewBalance";

//Pagina iniziale funzione
export default function App() {
  const [currentBalance, setCurrentBalance] = useState("");
  const handleBalanceSubmit = (balance) => {
    setCurrentBalance(balance);
  };

  return (
    <View style={styles.container}>
      <InputBalance onBalanceSubmit={handleBalanceSubmit} />
      <ViewBalance balance={currentBalance} />
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
