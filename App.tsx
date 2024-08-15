import { StatusBar } from "react-native";
import Routes from "./src/routes/app.routes";

export default function App() {
  return (
    <>
      <Routes />

      <StatusBar translucent />
    </>
  );
}
