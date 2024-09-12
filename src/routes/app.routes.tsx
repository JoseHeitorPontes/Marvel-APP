import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { RootTabProps, TabRoutes } from "./tab.routes";
import { CharactersStackProps } from "./characters.routes";

import { Characters } from "@/screens/Characters";
import { CharacterDetails } from "@/screens/CharacterDetails";
import { CharacterComics } from "@/screens/CharacterComics";
import { ComicDetails } from "@/screens/ComicDetails";
import { Comics } from "@/screens/Comics";
import { Series } from "@/screens/Series";


export type RootStackProps = {
  Tabs: {
    screen: keyof RootTabProps;
    params: {
      screen: keyof CharactersStackProps;
      params: CharactersStackProps[keyof CharactersStackProps];
    };
  };
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
  Comics: object | undefined;
  Series: object | undefined;
};

export type NativeScreens = NativeStackNavigationProp<RootStackProps>;

export default function Routes() {
  const Stack = createNativeStackNavigator<RootStackProps>();
  const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Tabs" component={TabRoutes} />
        <Stack.Screen name="Characters" component={Characters} />
        <Stack.Screen name="CharacterDetails" component={CharacterDetails} />
        <Stack.Screen name="CharacterComics" component={CharacterComics} />
        <Stack.Screen name="ComicDetails" component={ComicDetails} />
        <Stack.Screen name="Comics" component={Comics} />
        <Stack.Screen name="Series" component={Series} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
