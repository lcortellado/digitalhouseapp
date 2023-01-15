import React, { useState } from "react";
import { View, Image } from "react-native";

import { styles } from "./styles";

import imageDefault from "./../../assets/background-image.png";

type Props = {
  image: string;
};

export function Images({ image }: Props) {
  return (
    <View style={styles.container}>
      <Image
        defaultSource={imageDefault}
        source={{ uri: image }}
        style={styles.image}
      />
    </View>
  );
}
