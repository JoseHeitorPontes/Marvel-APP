import { ReactNode } from "react";

import { Text } from "react-native";

import { theme } from "@/styles/theme";

type Props = {
  children: ReactNode;
  focused: boolean;
};

export function TabBarLabel({ children, focused }: Props) {
  const color = focused ? theme.colors.secondary : theme.colors.dark;

  return <Text style={{ color }}>{children}</Text>;
}
