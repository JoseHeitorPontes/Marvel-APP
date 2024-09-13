import { useEffect, useState } from "react";
import { FlatList, View, Text } from "react-native";

import { useNavigation } from "@react-navigation/native";

import { api } from "@/services/api";

import { Header } from "@/components/Header";
import { Search } from "@/components/Search";
import { SerieCard } from "@/components/SerieCard";
import { Loading } from "@/components/Loading";

import { styles } from "./styles";

export function Series() {
  const navigation = useNavigation();

  const [serieResponseData, setSerieResponseData] = useState<SerieResponseData>(
    {} as SerieResponseData,
  );

  async function fetchSeries() {
    try {
      const { data } = await api.get("/series");

      setSerieResponseData(data);
    } catch (error) {
      console.log(error);
    }
  }

  function handleBack() {
    navigation.goBack();
  }

  function LoadingContainer() {
    const totalSeries = serieResponseData?.data?.total;
    const currentTotalSeries = serieResponseData?.data?.results?.length;

    const hasMoreSeries = totalSeries > currentTotalSeries;

    if (hasMoreSeries) {
      return <Loading />;
    }

    return null;
  }

  useEffect(() => {
    fetchSeries();
  }, []);

  return (
    <View style={styles.container}>
      <Header title="Series" handleBack={handleBack} />

      <View style={styles.content}>
        <View style={styles.containerSearch}>
          <Search placeholder="Search serie" />
        </View>

        <FlatList
          keyExtractor={(_, index) => `serie-${index}`}
          data={serieResponseData?.data?.results}
          renderItem={({ item: serie }) => <SerieCard serie={serie} />}
          ListFooterComponent={<LoadingContainer />}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  );
}
