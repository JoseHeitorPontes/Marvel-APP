import { useEffect, useState } from "react";
import { View, FlatList } from "react-native";

import { useNavigation, useRoute } from "@react-navigation/native";

import { api } from "@/services/api";
import { NativeScreens } from "@/routes/app.routes";

import { Header } from "@/components/Header";
import { ComicCard } from "@/components/ComicCard";
import { Loading } from "@/components/Loading";

type CharacterComicsParams = {
    character: Character;
};

export function CharacterComics() {
    const { params } = useRoute();
    const { character } = params as CharacterComicsParams;

    const navigation = useNavigation<NativeScreens>();

    const [comicResponseData, setComicResponseData] = useState({} as ComicResponseData);

    const handleBack = () => navigation.goBack();

    async function fetchComics() {
        try {
            const { data } = await api.get<ComicResponseData>(`/characters/${character.id}/comics`);

            setComicResponseData(data);
        } catch(error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchComics();
    }, []);

    return (
        <View>
            <Header title={character.name} handleBack={handleBack} />

            <FlatList
                keyExtractor={(_, index) => `comic-${index}`}
                data={comicResponseData?.data?.results}
                renderItem={({ item: comic }) => <ComicCard comic={comic} />}
                ListFooterComponent={<Loading />}
                
            />
        </View>
    );
}