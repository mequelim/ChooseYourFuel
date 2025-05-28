import React from "react";
import AppNavigator from "./routes/index.routes";
import { enableScreens } from "react-native-screens";

enableScreens();

const App = (): React.JSX.Element => {
  return <AppNavigator />;
};

export default App;
