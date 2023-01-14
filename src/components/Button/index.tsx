import React from "react";
import { Text, TouchableOpacity, ButtonProps } from "react-native";

import { styles } from "./styles";

type Props = ButtonProps & {
  title: string;
};

export function Button({ title, ...rest }: Props) {
  return (
    <TouchableOpacity style={styles.container} {...rest}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}
