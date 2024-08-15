import { createNativeStackNavigator, NativeStackNavigationProp } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

import { Characters } from "@/screens/Characters";
import { CharacterDetails } from "@/screens/CharacterDetails";

export type RootStackProps = {
  Characters: object | undefined;
  CharacterDetails: {
    characterId: number;
    characterName: string;
  };
};

export type NativeScreens = NativeStackNavigationProp<RootStackProps>;

export default function Routes() {
  const Stack = createNativeStackNavigator<RootStackProps>();

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen
          name="Characters"
          component={Characters}
        />
        <Stack.Screen
          name="CharacterDetails"
          component={CharacterDetails}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
