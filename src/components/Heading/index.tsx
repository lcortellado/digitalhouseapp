import { SafeAreaView, Text, ViewProps } from "react-native";

import { styles } from "./styles";

interface Props extends ViewProps {
  title: string;
  subTitle?: string;
}

export function Heading({ title, subTitle, ...rest }: Props) {
  return (
    <SafeAreaView style={styles.container} {...rest}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>{subTitle}</Text>
    </SafeAreaView>
  );
}
