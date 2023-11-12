import React, { useState } from "react";

import { TextInput, View, Button } from "react-native";
import { colors } from "../../styles/colors";
import InputButton from "../CustomComponents/InputButton";

const InputBalance = ({ onBalanceSubmit }) => {
  const [balance, setBalance] = useState("");

  const handlerBalanceInput = (text) => {
    setBalance(text);
  };

  const submitBalance = () => {
    onBalanceSubmit(balance);
  };

  return (
    <View>
      <TextInput
        value={balance}
        onChangeText={handlerBalanceInput}
        placeholder="Inserisci il Tuo Saldo"
        keyboardType="numeric"
      />
      <InputButton onPress={submitBalance} title="Conferma" />
    </View>
  );
};

export default InputBalance;
