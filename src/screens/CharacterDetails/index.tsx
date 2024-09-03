import { View, Text, Image, ScrollView } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";

import { NativeScreens } from "@/routes/app.routes";

import { Header } from "@/components/Header";
import { Button } from "@/components/Button";

import { styles } from "./styles";

type CharacterDetailsParams = {
  character: Character;
};

export function CharacterDetails() {
  const navigation = useNavigation<NativeScreens>();
  const { params } = useRoute();
  const { character } = params as CharacterDetailsParams;

  const hasImageNotFound = character?.thumbnail?.path?.includes(
    "image_not_available",
  );
  const characterImageUrl = `${character?.thumbnail?.path}.${character?.thumbnail?.extension}`;

  function handleBack() {
    navigation.goBack();
  }

  return (
    <View style={styles.container}>
      <Header title={character.name} handleBack={handleBack} />

      <ScrollView style={styles.scrollView}>
        <View style={styles.detailsContainer}>
          <Image
            style={styles.image}
            {...(hasImageNotFound
              ? { source: require("@/img/image-not-found.png") }
              : { source: { uri: characterImageUrl } })}
          />

          <Text style={styles.title}>{character?.name}</Text>

          <Text style={styles.description}>
            {character?.description || "No description."}
          </Text>

          <View style={styles.buttonsContainer}>
            <Button
              title="Comics"
              onPress={() =>
                navigation.navigate("CharacterComics", {
                  character,
                })
              }
            />

            <Button title="Events" />

            <Button title="Series" />

            <Button
              title="Stories"
              onPress={() =>
                navigation.navigate("CharacterComics", {
                  character,
                })
              }
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
