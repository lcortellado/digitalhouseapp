import { Image, Text, TouchableOpacity, View } from "react-native";

import { styles } from "./styles";
import { Minus, Plus } from "phosphor-react-native";

import icon from "./../../assets/default-image.png";
import Subtract from "./../../assets/subtract.png";

/* Defining the type of the props that the component will receive. */
interface Props {
  description: string;
  urlImage: string;
  date: string;
  points: string;
  is_redemption:boolean
  handleNavigateView: () => void;
}

export function CardProduct({
  urlImage,
  description,
  points,
  date,
  handleNavigateView,
  is_redemption
}: Props) {
  return (
    <TouchableOpacity style={styles.container} onPress={handleNavigateView}>
      <View style={styles.iconViewLeft}>
        <Image source={icon} style={styles.image} />
      </View>
      <View style={styles.descriptionView}>
        <Text numberOfLines={2} style={styles.description}>
          {description}
        </Text>
        <Text style={styles.date}>{date}</Text>
      </View>

      <View style={styles.iconViewRight}>
        {
        is_redemption ? <Plus size={16} color="#00B833" weight="bold" /> : <Minus size={20} color="#FF0000" weight="bold" />
        }
        
        <Text style={styles.number}>{points}</Text>
        <Image style={styles.icon} source={Subtract} />
      </View>
    </TouchableOpacity>
  );
}
