import {
  AntDesign,
  Entypo,
  EvilIcons,
  Feather,
  FontAwesome,
  FontAwesome5,
  FontAwesome6,
  Fontisto,
  Foundation,
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
  Octicons,
  SimpleLineIcons,
  Zocial,
} from "@expo/vector-icons";

import { theme } from "@/styles/theme";

type Props = {
  focused: boolean;
  iconName: string;
  iconLibrary: IconLibraries;
};

type IconLibraries = keyof typeof IconMapper;

const IconMapper = {
  AntDesign,
  Entypo,
  EvilIcons,
  Feather,
  FontAwesome,
  FontAwesome5,
  FontAwesome6,
  Fontisto,
  Foundation,
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
  Octicons,
  SimpleLineIcons,
  Zocial,
};

export function TabBarIcon({ iconLibrary, iconName, focused }: Props) {
  const Icon = IconMapper[iconLibrary];
  const color = focused ? theme.colors.secondary : theme.colors.dark;

  return <Icon name={iconName} color={color} size={20} />;
}
