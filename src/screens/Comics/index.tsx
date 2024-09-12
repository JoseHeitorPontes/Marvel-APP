import { useEffect, useState } from "react";
import { View, FlatList } from "react-native";

import { useNavigation } from "@react-navigation/native";

import { api } from "@/services/api";
import { NativeScreens } from "@/routes/app.routes";

import { Header } from "@/components/Header";
import { Search } from "@/components/Search";
import { ComicCard } from "@/components/ComicCard";

import { styles } from "./styles";

export function Comics() {
  const [comicResponseData, setComicResponseData] = useState(
    {} as ComicResponseData,
  );

  const navigation = useNavigation<NativeScreens>();

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
    <View style={styles.container}>
      <Header title="Comics" handleBack={handleBack} />

      <View style={styles.content}>
        <View style={styles.containerSearch}>
          <Search placeholder="Search comic" />
        </View>

        <FlatList
          keyExtractor={(_, index) => `comic-${index}`}
          data={comicResponseData?.data?.results}
          renderItem={({ item: comic }) => (
            <ComicCard
              comic={comic}
              onPress={() => navigation.navigate("ComicDetails", { comic })}
            />
          )}
          onEndReached={() => fetchComics()}
          onEndReachedThreshold={0.1}
        />
      </View>
    </View>
  );
}
