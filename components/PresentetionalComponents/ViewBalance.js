import React from "react";
import { Text, View } from "react-native";

const ViewBalance = ({ balance }) => {
  return (
    <View>
      <Text>Saldo Attuale: {balance}</Text>
    </View>
  );
};

export default ViewBalance;
