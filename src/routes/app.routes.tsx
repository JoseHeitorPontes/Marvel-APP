import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

import { Characters } from "@/screens/Characters";
import { CharacterDetails } from "@/screens/CharacterDetails";
import { CharacterComics } from "@/screens/CharacterComics";
import { ComicDetails } from "@/screens/ComicDetails";

export type RootStackProps = {
  Characters: object | undefined;
  CharacterDetails: {
    character: Character;
  };
  CharacterComics: {
    character: Character;
  };
  ComicDetails: {
    comic: Comic;
  };
};

export type NativeScreens = NativeStackNavigationProp<RootStackProps>;

export default function Routes() {
  const Stack = createNativeStackNavigator<RootStackProps>();

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Characters" component={Characters} />
        <Stack.Screen name="CharacterDetails" component={CharacterDetails} />
        <Stack.Screen name="CharacterComics" component={CharacterComics} />
        <Stack.Screen name="ComicDetails" component={ComicDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
