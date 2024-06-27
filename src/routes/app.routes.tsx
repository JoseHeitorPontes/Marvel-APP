import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

import { Characters } from "../screens/Characters";
import { CharacterDetails } from "../screens/CharacterDetails";


const Stack = createNativeStackNavigator();

export default function Routes() {
  
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
