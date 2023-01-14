import React from "react";
import { View, Image } from "react-native";

import { styles } from "./styles";

import imageProduct from "./../../assets/default-image.png";

export function Images() {
  return (
    <View style={styles.container}>
      <Image source={imageProduct} style={styles.image} />
    </View>
  );
}
