import { View, Text, Image } from "react-native";

import { BorderlessButton } from "react-native-gesture-handler";

import { Ionicons } from "@expo/vector-icons";

import { styles } from "./styles";

type Props = {
  showLogo?: boolean;
  title?: string;
  handleBack?: () => void;
};

export function Header({ showLogo, title, handleBack }: Props) {
  return (
    <View style={styles.container}>
      {showLogo ? (
        <View style={styles.logoContainer}>
          <Image
            style={styles.image}
            source={require("../../../assets/images/marvel.png")}
          />
        </View>
      ) : (
        <>
          {handleBack && (
            <BorderlessButton onPress={handleBack}>
              <Ionicons name="chevron-back" size={32} color="#b30707" />
            </BorderlessButton>
          )}

          {title && <Text style={styles.title}>{title}</Text>}
        </>
      )}
    </View>
  );
}
