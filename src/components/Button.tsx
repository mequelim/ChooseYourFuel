import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

//* Importing assets...
import colors from "../assets/colors";
import fonts from "../assets/fonts";

interface ButtonProps {
  text: string;
  onPress?: () => void;
}

const Button = ({ text, onPress }: ButtonProps): React.JSX.Element => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: 24,
    height: 40,
    width: "90%",
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: colors.buttonsBackgroundColor,
    borderRadius: 5,
    backgroundColor: colors.buttonsBackgroundColor
  },
  text: {
    fontFamily: fonts.button,
    fontSize: 18,
    color: colors.text
  }
});

export { Button };
