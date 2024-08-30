import { StatusBar } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";

import Routes from "./src/routes/app.routes";

export default function App() {
  return (
    <GestureHandlerRootView>
      <Routes />

      <StatusBar translucent />
    </GestureHandlerRootView>
  );
}
