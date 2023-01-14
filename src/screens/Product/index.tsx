import React from "react";
import { Text, View } from "react-native";

import { styles } from "./styles";
import { Heading } from "../../components/Heading";

import imageProduct from "./../../assets/default-image.png";
import { Images } from "../../components/Images";
import { Button } from "../../components/Button";

export function Product() {
  return (
    <View style={styles.container}>
      <View style={styles.headingContainer}>
        <Heading title="Nombre del Producto" />
      </View>

      <View style={styles.imageContainer}>
        <Images />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.textDetails}>Detalles del producto:</Text>
        <Text style={styles.textDate}>Comprado el 26 de enero, 2019</Text>
        <Text style={styles.textDetails}>Con esta compra acomulaste:</Text>
        <Text style={styles.textPoint}>100 puntos</Text>
      </View>

      <View style={styles.bottom}>
        <Button />
      </View>
    </View>
  );
}
