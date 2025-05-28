import React from "react";
import { Image as Img, StyleSheet } from "react-native";

interface ImageProps {
  image: "logo" | "gas";
}

const Image = ({ image }: ImageProps): React.JSX.Element => {
  const images = {
    logo: require("../../assets/img/logo.png"),
    gas: require("../../assets/img/gas.png")
  };

  const imgSource = images[image];

  return (
    <Img
      source={imgSource}
      style={styles.image}
      resizeMode="contain"
    />
  );
};

const styles = StyleSheet.create({
  image: {
    height: 200,
    width: 200
  }
});

export { Image };
