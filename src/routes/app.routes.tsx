import { createNativeStackNavigator, NativeStackNavigationProp } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

import { Characters } from "@/screens/Characters";
import { CharacterDetails } from "@/screens/CharacterDetails";

export type RootStackProps = {
  Characters: object | undefined;
  CharacterDetails: object | undefined;
};

export type NativeScreens = NativeStackNavigationProp<RootStackProps>;

export default function Routes() {
  const Stack = createNativeStackNavigator<RootStackProps>();

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerTintColor: "#b30707",
        headerStyle: {
          backgroundColor: "#111",
        }
      }}>
        <Stack.Screen
          name="Characters"
          component={Characters}
        />
        <Stack.Screen
          name="CharacterDetails"
          component={CharacterDetails}
          options={{ title: "Details" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
