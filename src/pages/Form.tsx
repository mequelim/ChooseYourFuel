import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

import { useNavigation } from "@react-navigation/native";  //* Navigation hook import.

//* Importing assets...
import colors from "../assets/colors.ts";
import fonts from "../assets/fonts.ts";

//* Importing components...
import { Button } from "../components/Button.tsx";
import { Image } from "../components/Image.tsx";
import { Input } from "../components/Input.tsx";
import { Label } from "../components/Label.tsx";

import { getBestFuel } from "../utils/calculate.ts";  //* Utility function to calculate the best fuel option.

import { StackNavigationProp } from "@react-navigation/stack";  //* Importing StackNavigationProp for type safety.
import RootStackParamList from "../types/RootStackParamList.ts";

type FormScreenNavigationProp = StackNavigationProp<RootStackParamList, "Form">;

const Form = (): React.JSX.Element => {
  //* Hooks...
  const navigation = useNavigation<FormScreenNavigationProp>();

  const [ gasoline, setGasoline ] = useState<string>("");
  const [ ethanol, setEthanol ] = useState<string>("");

  //* Functions...
  const handleCalculate = () => {
    const gasolineValue = parseFloat(gasoline) || 0;
    const ethanolValue = parseFloat(ethanol) || 0;
    const result = getBestFuel({ gasolineValue, ethanolValue });

    navigation.navigate("Result", {
      gasolinePrice: gasolineValue,
      ethanolPrice: ethanolValue,
      result: typeof result === "string" ? result : "Error"
    });
  };

  return (
    <View style={styles.wrapper}>
      <View style={styles.imageWrapper}>
        <Image image="logo" />
      </View>

      <Text style={styles.title}>What is the best option for you?</Text>

      <View style={styles.inputWrapper}>
        <Label fuel="Gasoline" />
        <Input fuel="Gasoline" value={gasoline} onChange={setGasoline} />
      </View>

      <View style={styles.inputWrapper}>
        <Label fuel="Ethanol" />
        <Input fuel="Ethanol" value={ethanol} onChange={setEthanol} />
      </View>

      <Button text="Calculate" onPress={handleCalculate} />
    </View>
  );
};


const styles = StyleSheet.create({
  wrapper: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: 32,
    height: "100%",
    width: "100%",
    backgroundColor: colors.backgroundColor
  },
  imageWrapper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%"
  },
  title: {
    textAlign: "center",
    fontSize: 25,
    fontFamily: fonts.title,
    color: colors.title
  },
  inputWrapper: {
    gap: 16,
    width: "90%"
  }
});

export { Form };
