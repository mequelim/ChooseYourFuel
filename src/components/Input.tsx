import React from "react";
import { StyleSheet, TextInput } from "react-native";
import colors from "../assets/colors";
import fonts from "../assets/fonts";

interface InputProps {
  fuel: string;
  value: string;
  onChange: (value: string) => void;
}

const Input = ({ fuel, value, onChange }: InputProps): React.JSX.Element => {
  //* Functions...
  const handleChange = (text: string) => {
    let val = text.replace(/[^0-9.]/g, "");
    const parts = val.split(".");
    if(parts.length > 2) val = parts[0] + "." + parts.slice(1).join("");
    onChange(val);
  };

  //* Component's return...
  return (
    <TextInput
      value={value}
      onChangeText={handleChange}
      autoFocus={true}
      defaultValue="0"
      editable={true}
      inputMode="decimal"
      keyboardType="numeric"
      numberOfLines={1}
      placeholder={`Type of ${fuel} here...`}
      placeholderTextColor={colors.text}
      selectionColor={colors.subtitle}
      style={styles.input}
      textAlign="left"
      textAlignVertical="center"
    />
  );
};

const styles = StyleSheet.create({
  input: {
    height: 48,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: colors.subtitle,
    paddingHorizontal: 8,
    fontFamily: fonts.text,
    fontSize: 18,
    color: colors.text
  }
});

export { Input };
