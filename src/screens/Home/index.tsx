import React, { useEffect, useState } from "react";
import { FlatList, Text, View } from "react-native";

import { styles } from "./styles";
import { Heading } from "../../components/Heading";
import { CardProduct } from "../../components/CardProduct/index";
import { Loading } from "../../components/Loading/index";
import { TotalPoints } from "../../components/TotalPoints";
import { Button } from "../../components/Button/index";
import { useIsFocused, useNavigation } from "@react-navigation/native";
import { numberFormat } from "../../Utils/utils";
import { useProduct } from "../../hooks/useProduct";

export function Home() {
  const isFocused = useIsFocused();
  const navigation = useNavigation();

  const {
    getProducts,
    handleFilterRedeemed,
    handleFilterWon,
    products,
    productsFilter,
    enabledFilterForCategory,
    total,
    isLoading,
    getTotal,
    setEnabledFilterForCategory,
    setProductsFilter,
  } = useProduct();

  const handleOpenDetails = (product: any) => {
    console.log(product);
    navigation.navigate("details", { product });
  };

  useEffect(() => {
    getTotal();
  }, [products]);

  useEffect(() => {
    getProducts();
    setEnabledFilterForCategory(false);
    setProductsFilter([]);
  }, [isFocused]);

  return (
    <View style={styles.container}>
      <Heading title="Bienvenido de vuelta!" subTitle="Ruben Rodriguez" />
      <Text style={styles.text}>TUS PUNTOS</Text>
      <TotalPoints total={total} />

      <Text style={styles.text}>TUS MOVIMIENTOS</Text>
      <View style={styles.flatList}>
        {isLoading ? (
          <Loading />
        ) : (
          <FlatList
            data={productsFilter.length === 0 ? products : productsFilter}
            keyExtractor={(item) => item.id}
            renderItem={({ item, index }) => (
              <CardProduct
                key={index}
                description={item.product}
                urlImage={item.image}
                date={item.createdAt}
                points={numberFormat(item.points)}
                is_redemption={item.is_redemption}
                handleNavigate={() => handleOpenDetails(item)}
              />
            )}
            showsVerticalScrollIndicator={false}
            ListEmptyComponent={() => <Loading />}
          />
        )}
      </View>
      {enabledFilterForCategory ? (
        <View style={styles.buttonContainer}>
          <View style={styles.buttomWon}>
            <Button title="Ganados" onPress={handleFilterWon} />
          </View>
          <View style={styles.buttomRedeemed}>
            <Button title="Canjeados" onPress={handleFilterRedeemed} />
          </View>
        </View>
      ) : (
        <View style={styles.bottom}>
          <Button title="Todos" onPress={getProducts} />
        </View>
      )}
    </View>
  );
}
