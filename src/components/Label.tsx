import React from "react";
import { StyleSheet, Text } from "react-native";
import colors from "../assets/colors.ts";
import fonts from "../assets/fonts.ts";

interface LabelProps {
  fuel: string;
}

const Label = ({ fuel }: LabelProps): React.JSX.Element => {
  return (
    <Text style={styles.text}>{fuel} price:</Text>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    fontFamily: fonts.text,
    color: colors.text
  }
});

export { Label };
