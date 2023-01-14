import React from "react";
import { Text, View } from "react-native";

import { styles } from "./styles";

export function TotalPoints() {
  return (
    <View style={styles.container}>
      <Text style={styles.date}> Diciembre</Text>
      <Text style={styles.points}>10,00.00 pts</Text>
    </View>
  );
}
