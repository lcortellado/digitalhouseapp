import React from "react";
import { Text, View } from "react-native";

import { styles } from "./styles";
import { Heading } from "../../components/Heading";

import imageProduct from "./../../assets/default-image.png";
import { Images } from "../../components/Images";
import { Button } from "../../components/Button";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Loading } from "../../components/Loading";
import moment from "moment";
import { numberFormat } from "../../Utils/utils";

type RouteParams = {
  product: {
    product: string;
    points: string;
    image: string;
    createdAt: string;
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
        <Images image={product.image} />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.textDetails}>{product.product}</Text>
        <Text style={styles.textDate}>{`Comprado el ${moment
          .utc(product.createdAt)
          .format("DD [de] MMMM, YYYY")}`}</Text>
        <Text style={styles.textDetails}>Con esta compra acomulaste:</Text>
        <Text style={styles.textPoint}>
          {numberFormat(product.points)} puntos
        </Text>
      </View>

      <View style={styles.bottom}>
        <Button title="Aceptar" onPress={() => navigation.navigate("home")} />
      </View>
    </View>
  );
}
