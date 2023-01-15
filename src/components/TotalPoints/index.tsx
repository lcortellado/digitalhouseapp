import React from "react";
import { Text, View } from "react-native";

import { styles } from "./styles";

interface Props {
  total: number;
}

export function TotalPoints({ total }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.date}> Diciembre</Text>
      <Text style={styles.points}>{total} pts</Text>
    </View>
  );
}
