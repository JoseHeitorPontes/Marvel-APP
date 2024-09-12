import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { CharactersStackProps } from "./characters.routes";
import { Characters } from "@/screens/Characters";
import { Comics } from "@/screens/Comics";
import { Series } from "@/screens/Series";
import { TabBarLabel } from "@/components/TabBarLabel";
import { TabBarIcon } from "@/components/TabBarIcon";

export type RootTabProps = {
  Characters: {
    params: {
      screen: keyof CharactersStackProps;
    };
  };
};

export function TabRoutes() {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="Characters"
        component={Characters}
        options={{
          tabBarLabel: ({ focused }) => (
            <TabBarLabel focused={focused}>Characters</TabBarLabel>
          ),
          tabBarIcon: ({ focused }) => (
            <TabBarIcon
              iconLibrary="FontAwesome"
              iconName="users"
              focused={focused}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Comics"
        component={Comics}
        options={{
          tabBarLabel: ({ focused }) => (
            <TabBarLabel focused={focused}>Comics</TabBarLabel>
          ),
          tabBarIcon: ({ focused }) => (
            <TabBarIcon
              iconLibrary="Entypo"
              iconName="open-book"
              focused={focused}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Series"
        component={Series}
        options={{
          tabBarLabel: ({ focused }) => (
            <TabBarLabel focused={focused}>Series</TabBarLabel>
          ),
          tabBarIcon: ({ focused }) => (
            <TabBarIcon
              iconLibrary="MaterialCommunityIcons"
              iconName="movie-open"
              focused={focused}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
