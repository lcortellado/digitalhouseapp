import {
  Image,
  Text,
  TouchableOpacity,
  View,
  ImageSourcePropType,
} from "react-native";

import { styles } from "./styles";
import { CaretRight, Plus } from "phosphor-react-native";

import icon from "./../../assets/default-image.png";
import Subtract from "./../../assets/subtract.png";

/* Defining the type of the props that the component will receive. */
interface Props {
  description: string;
  urlImage: string;
}

export function CardProduct({ urlImage, description }: Props) {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.iconViewLeft}>
        <Image source={icon} style={styles.image} />
      </View>
      <View style={styles.descriptionView}>
        <Text numberOfLines={2} style={styles.description}>
          {description}
        </Text>
        <Text style={styles.date}>26 de enero, 2019</Text>
      </View>

      <View style={styles.iconViewRight}>
        <Plus size={16} color="#00B833" weight="bold" />
        <Text style={styles.number}>100</Text>
        <Image style={styles.icon} source={Subtract} />
      </View>
    </TouchableOpacity>
  );
}
