import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Characters } from "@/screens/Characters";

export type CharactersStackProps = {
  Characters: object | undefined;
  CharacterDetails: object | undefined;
};

export function CharactersRoute() {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen name="Characters" component={Characters} />
    </Stack.Navigator>
  );
}
