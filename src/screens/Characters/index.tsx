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

  const [isLoading, setIsLoading] = useState(true);
  const [isLoadingRefreshControl, setIsLoadingRefreshControl] = useState(false);

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
      setIsLoading(false);
      setIsLoadingRefreshControl(false);
    }
  }

  function LoadingContainer() {
    const totalCharacters = characterResponseData?.data?.total;
    const currentTotalCharacters = characterResponseData?.data?.results?.length;

    const hasMoreCharacters = totalCharacters > currentTotalCharacters;

    if (isLoading) {
      return <Loading />;
    }

    if (hasMoreCharacters) {
      return <Loading />;
    }

    return null;
  }

  return (
    <View style={styles.container}>
      <Header showLogo />

      <View style={styles.content}>
        <View style={styles.containerSearch}>
          <Search placeholder="Search character" />
        </View>

        <FlatList
          numColumns={2}
          keyExtractor={(_, index) => `character-${index}`}
          data={characterResponseData?.data?.results}
          showsVerticalScrollIndicator={false}
          columnWrapperStyle={{ justifyContent: "space-between" }}
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
          refreshControl={
            <RefreshControl
              refreshing={isLoadingRefreshControl}
              colors={[theme.colors.secondary]}
              progressBackgroundColor={theme.colors.light}
              onRefresh={() => fetchCharacters(true)}
            />
          }
        />
      </View>
    </View>
  );
}
