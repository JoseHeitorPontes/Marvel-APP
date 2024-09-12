import { useEffect, useState } from "react";
import { View, FlatList } from "react-native";

import { useNavigation } from "@react-navigation/native";

import { api } from "@/services/api";

import { Header } from "@/components/Header";
import { ComicCard } from "@/components/ComicCard";

import { styles } from "./styles";

export function Comics() {
  const [comicResponseData, setComicResponseData] = useState(
    {} as ComicResponseData,
  );

  const navigation = useNavigation();

  async function fetchComics() {
    try {
      const { data } = await api.get<ComicResponseData>("/comics");

      setComicResponseData(data);
    } catch (error) {
      console.log(error);
    }
  }

  function handleBack() {
    navigation.goBack();
  }

  useEffect(() => {
    fetchComics();
  }, []);

  return (
    <View>
      <Header title="Comics" handleBack={handleBack} />

      <View style={styles.content}>
        <FlatList
          keyExtractor={(_, index) => `comic-${index}`}
          data={comicResponseData?.data?.results}
          renderItem={({ item: comic }) => <ComicCard comic={comic} />}
          onEndReached={() => fetchComics()}
          onEndReachedThreshold={0.1}
        />
      </View>
    </View>
  );
}
