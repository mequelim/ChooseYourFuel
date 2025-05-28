import React from "react";
import { StyleSheet, Text, View } from "react-native";

//* Components imports...
import { Button } from "../components/Button";
import { Image } from "../components/Image";

import { useNavigation } from "@react-navigation/native";  //* Navigation hook import.

//* Assets imports...
import colors from "../assets/colors";
import fonts from "../assets/fonts";

interface ResultProps {
  ethanolPrice?: number;
  gasolinePrice?: number;
  result: string;
}

const Result = ({ ethanolPrice, gasolinePrice, result }: ResultProps): React.JSX.Element => {
  const navigation = useNavigation();

  //* Functions...
  const goBack = (): void => navigation.goBack();

  //* Component's return...
  return (
    <View style={styles.wrapper}>
      <Image image="gas" />

      <Text style={styles.title}>The best option is: {result}!</Text>

      <View style={styles.pricesWrapper}>
        <Text style={styles.subtitle}>Prices:</Text>

        <Text style={styles.text}>
          Ethanol Price: R$ {ethanolPrice?.toFixed(2)}
        </Text>

        <Text style={styles.text}>
          Gasoline Price: R$ {gasolinePrice?.toFixed(2)}
        </Text>
      </View>

      <Button text="Calculate again" onPress={goBack} />
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
  title: {
    textAlign: "center",
    fontSize: 25,
    fontFamily: fonts.title,
    color: colors.title
  },
  pricesWrapper: {
    gap: 12
  },
  subtitle: {
    fontFamily: fonts.subtitle,
    fontSize: 22,
    color: colors.subtitle
  },
  text: {
    fontSize: 20,
    fontFamily: fonts.text,
    color: colors.text
  }
});

export { Result };
