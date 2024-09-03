import { ActivityIndicator, ActivityIndicatorProps, View } from "react-native";

import { theme } from "@/styles/theme";
import { styles } from "./styles";

type Props = ActivityIndicatorProps;

export function Loading({ ...rest }: Props) {
  return (
    <View style={styles.container}>
      <ActivityIndicator
        color={theme.colors.primary}
        size={rest.size || 30}
        {...rest}
      />
    </View>
  );
}
