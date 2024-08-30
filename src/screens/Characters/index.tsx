import { useEffect, useRef, useState } from "react";
import { View, FlatList, RefreshControl } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { api } from "@/services/api";
import { useDebounce } from "@/hooks/useDebounce";
import { NativeScreens } from "@/routes/app.routes";

import { Search } from "@/components/Search";
import { Header } from "@/components/Header";
import { Loading } from "@/components/Loading";
import { CharacterCard } from "@/components/CharacterCard";

import { theme } from "@/styles/theme";
import { styles } from "./styles";

export function Characters() {
  const navigation = useNavigation<NativeScreens>();

  const isFirstRender = useRef(true);

  const [loading, setLoading] = useState(true);

  const offset = useRef<number>(0);

  const [search, setSearch] = useState("");
  const debouncedSearch = useDebounce(search, 1000);

  const [characterResponseData, setCharacterResponseData] =
    useState<ResponseDataCharacter>({} as ResponseDataCharacter);

  async function fetchCharacters(isFirstPage = false, nameCharacter?: string) {
    try {
      const response = await api.get<ResponseDataCharacter>("/characters", {
        params: {
          offset: isFirstPage ? 0 : offset.current,
          ...(nameCharacter && { name: nameCharacter }),
        },
      });

      if (isFirstPage) {
        offset.current = 0 + 20;

        setCharacterResponseData(response.data);
      } else {
        const newOffsetNumber = offset.current + 20;
        offset.current = newOffsetNumber;

        setCharacterResponseData({
          ...response.data,
          data: {
            ...response.data.data,
            results: [
              ...(characterResponseData?.data?.results || []),
              ...response.data.data.results,
            ],
          },
        });
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  function LoadingContainer() {
    const totalCharacters = characterResponseData?.data?.total;
    const currentTotalCharacters = characterResponseData?.data?.results?.length;

    const hasMoreCharacters = currentTotalCharacters > totalCharacters;

    if (hasMoreCharacters) {
      return null;
    }

    return <Loading />;
  }

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;

      return;
    }

    fetchCharacters(true, debouncedSearch);
  }, [debouncedSearch]);

  return (
    <View style={styles.container}>
      <Header showLogo />

      <View style={styles.containerSearch}>
        <Search placeholder="Search character" />
      </View>

      {loading ? (
        <Loading />
      ) : (
        <FlatList
          numColumns={2}
          keyExtractor={(_, index) => `character-${index}`}
          data={characterResponseData?.data?.results}
          renderItem={({ item: character }) => (
            <CharacterCard
              character={character}
              onPressButton={() =>
                navigation.navigate("CharacterDetails", { character })
              }
            />
          )}
          onEndReached={() => fetchCharacters()}
          onEndReachedThreshold={0.1}
          ListFooterComponent={<LoadingContainer />}
          showsVerticalScrollIndicator={false}
          columnWrapperStyle={{ justifyContent: "space-around" }}
          refreshControl={
            <RefreshControl
              refreshing={loading}
              colors={[theme.colors.primary]}
              progressBackgroundColor={theme.colors.light}
              onRefresh={() => fetchCharacters(true)}
            />
          }
        />
      )}
    </View>
  );
}
