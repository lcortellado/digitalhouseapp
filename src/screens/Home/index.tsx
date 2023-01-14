import React, { useEffect, useState } from "react";
import { FlatList, Text, View } from "react-native";

import { styles } from "./styles";
import { Heading } from "../../components/Heading";
import { CardProduct } from "../../components/CardProduct/index";
import { Loading } from "../../components/Loading/index";
import { TotalPoints } from "../../components/TotalPoints";
import { Button } from "../../components/Button/index";

export function Home() {
  const [product, setProduct] = useState<any>([]);
  const getProducts = () => {
    fetch("https://6222994f666291106a29f999.mockapi.io/api/v1/products")
      .then((res) => res.json())
      .then((data) => setProduct(data));
  };

  useEffect(() => {
    getProducts();
  }, []);
  return (
    <View style={styles.container}>
      <Heading title="Bienvenido de vuelta!" subtitle="Ruben Rodriguez" />
      <Text style={styles.text}>TUS PUNTOS</Text>
      <TotalPoints />

      <Text style={styles.text}>TUS MOVIMIENTOS</Text>
      <View style={styles.flatList}>
        <FlatList
          data={product}
          keyExtractor={(item) => item.id}
          renderItem={({ item, index }) => (
            <CardProduct
              key={index}
              description={item.product}
              urlImage={item.image}
            />
          )}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={() => <Loading />}
        />
      </View>
      <View style={styles.bottom}>
        <Button />
      </View>
    </View>
  );
}
