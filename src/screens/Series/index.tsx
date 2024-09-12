import { View } from "react-native";

import { useNavigation } from "@react-navigation/native";

import { Header } from "@/components/Header";

import { styles } from "./styles";

export function Series() {
  const navigation = useNavigation();

  function handleBack() {
    navigation.goBack();
  }
  
  return (
    <View style={styles.container}>
      <Header title="Series" handleBack={handleBack} />
    </View>
  );
}
