import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

import { styles } from "./styles";

export function Button() {
  return (
    <TouchableOpacity style={styles.container}>
      <Text style={styles.text}>Todos</Text>
    </TouchableOpacity>
  );
}
