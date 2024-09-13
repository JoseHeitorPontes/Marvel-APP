import { useEffect, useState } from "react";
import { View, FlatList } from "react-native";

import { useNavigation, useRoute } from "@react-navigation/native";

import { api } from "@/services/api";
import { NativeScreens } from "@/routes/app.routes";

import { Header } from "@/components/Header";
import { ComicCard } from "@/components/ComicCard";
import { Loading } from "@/components/Loading";
import { styles } from "./styles";

type CharacterComicsParams = {
  character: Character;
};

export function CharacterComics() {
  const { params } = useRoute();
  const { character } = params as CharacterComicsParams;

  const navigation = useNavigation<NativeScreens>();

  const [comicResponseData, setComicResponseData] = useState(
    {} as ComicResponseData,
  );

  const handleBack = () => navigation.goBack();

  async function fetchComics() {
    try {
      const { data } = await api.get<ComicResponseData>(
        `/characters/${character.id}/comics`,
      );

      setComicResponseData(data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchComics();
  }, []);

  return (
    <View style={styles.container}>
      <Header title={character.name} handleBack={handleBack} />

      <View style={styles.content}>
        <FlatList
          keyExtractor={(_, index) => `comic-${index}`}
          data={comicResponseData?.data?.results}
          renderItem={({ item: comic }) => (
            <ComicCard
              comic={comic}
              onPress={() => navigation.navigate("ComicDetails", { comic })}
            />
          )}
          onEndReachedThreshold={0.1}
          ListFooterComponent={<Loading />}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  );
}
