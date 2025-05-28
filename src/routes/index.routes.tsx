import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

//* Import pages...
import { Form } from "../pages/Form";
import { Result } from "../pages/Result";

//* Import types...
import RootStackParamList from "../types/RootStackParamList";

const Stack = createStackNavigator<RootStackParamList>();  //* Initialize the stack navigator with the RootStackParamList type.

function ResultScreen({ route }: { route: { params: RootStackParamList["Result"] } }) {
  return <Result {...route.params} />;
}

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Form" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Form" component={Form} />
        <Stack.Screen name="Result" component={ResultScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
