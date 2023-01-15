import { Image, Text, TouchableOpacity, View } from "react-native";

import { styles } from "./styles";
import moment from "moment";
import "moment/min/locales";

import Subtract from "./../../assets/subtract.png";

moment.locale("es");
/* Defining the type of the props that the component will receive. */
interface Props {
  description: string;
  urlImage: string;
  date: string;
  points: string;
  is_redemption: boolean;
  handleNavigate: () => void;
}

export function CardProduct({
  urlImage,
  description,
  points,
  date,
  handleNavigate,
  is_redemption,
}: Props) {
  return (
    <TouchableOpacity style={styles.container} onPress={handleNavigate}>
      <View style={styles.iconViewLeft}>
        <Image source={{ uri: urlImage }} style={styles.image} />
      </View>
      <View style={styles.descriptionView}>
        <Text numberOfLines={2} style={styles.description}>
          {description}
        </Text>

        <Text style={styles.date}>{`${moment
          .utc(date)
          .format("DD [de] MMMM, YYYY")}`}</Text>
      </View>

      <View style={styles.iconViewRight}>
        {is_redemption ? (
          <Text style={styles.textIcon}>+</Text>
        ) : (
          <Text style={[styles.textIcon, { color: "#FF0000" }]}>-</Text>
        )}

        <Text style={styles.number}>{points}</Text>
        <Image style={styles.icon} source={Subtract} />
      </View>
    </TouchableOpacity>
  );
}
