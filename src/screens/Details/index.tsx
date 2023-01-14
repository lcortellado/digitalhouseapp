import React from "react";
import { Text, View } from "react-native";

import { styles } from "./styles";
import { Heading } from "../../components/Heading";

import imageProduct from "./../../assets/default-image.png";
import { Images } from "../../components/Images";
import { Button } from "../../components/Button";
import { useNavigation, useRoute } from "@react-navigation/native";

type RouteParams = {
  product: {
    product: string;
    points: number;
  };
};

export function Details() {
  const route = useRoute();

  const { product } = (route.params as RouteParams) || {};

  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.headingContainer}>
        <Heading title={product.product} />
      </View>

      <View style={styles.imageContainer}>
        <Images />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.textDetails}>{product.product}</Text>
        <Text style={styles.textDate}>Comprado el 26 de enero, 2019</Text>
        <Text style={styles.textDetails}>Con esta compra acomulaste:</Text>
        <Text style={styles.textPoint}>{product.points} puntos</Text>
      </View>

      <View style={styles.bottom}>
        <Button title="Aceptar" onPress={() => navigation.navigate("home")} />
      </View>
    </View>
  );
}
