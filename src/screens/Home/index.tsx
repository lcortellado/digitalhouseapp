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

export function Home() {
  const [products, setProducts] = useState<any[]>([]);
  const [productsFilter, setProductsFilter] = useState<Object[]>([]);
  const [enabledFilterForCategory, setEnabledFilterForCategory] =
    useState<boolean>(false);
  const [total, setTotal] = useState<any>("");
  const [isLoading, setIsLoading] = useState(false);

  const getTotal = () => {
    const result = products.filter((item) => item.is_redemption);
    const total = result.reduce(
      (sum, item) => sum + item.points + item.points,
      0
    );
    setTotal(numberFormat(total));
  };

  const handleFilterRedeemed = () => {
    const result = products.filter((item) => !item.is_redemption);
    const total = result.reduce(
      (sum, item) => sum + item.points + item.points,
      0
    );
    setEnabledFilterForCategory(false);
    setTotal(numberFormat(total));
    setProductsFilter(result);
  };

  const handleFilterWon = () => {
    const result = products.filter((item) => item.is_redemption);
    const total = result.reduce(
      (sum, item) => sum + item.points + item.points,
      0
    );
    setEnabledFilterForCategory(false);
    setTotal(numberFormat(total));
    setProductsFilter(result);
  };

  const isFocused = useIsFocused();
  const navigation = useNavigation();

  const getProducts = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(
        "https://6222994f666291106a29f999.mockapi.io/api/v1/products"
      );
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.warn(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleOpenDetails = (product: string) => {
    navigation.navigate("details", { product });
  };

  const handleGetProducts = () => {
    getProducts();
    setEnabledFilterForCategory(true);
    setProductsFilter([]);
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
      <Heading title="Bienvenido de vuelta!" subtitle="Ruben Rodriguez" />
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
          <Button title="Todos" onPress={handleGetProducts} />
        </View>
      )}
    </View>
  );
}
