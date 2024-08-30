import { TextInput, TextInputProps, View } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";

import { styles } from "./styles";

type Props = TextInputProps;

export function Search({ ...rest }: Props) {
  return (
    <View style={styles.container}>
      <FontAwesome name="search" size={24} color="black" style={styles.icon} />

      <TextInput style={styles.input} {...rest} />
    </View>
  );
}
