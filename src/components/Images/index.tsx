import React, { useState } from "react";
import { View, Image } from "react-native";

import { styles } from "./styles";
import { Loading } from "../Loading";

import imageDefault from "./../../assets/default-image.png";

type Props = {
  image: string;
};

export function Images({ image }: Props) {
  const [isLoading, setIsLoading] = useState(true);

  setTimeout(() => {
    setIsLoading(false);
  }, 4000);
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
