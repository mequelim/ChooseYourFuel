import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Form } from "../pages/Form";
import { Result } from "../pages/Result";

type RootStackParamList = {
  Form: React.JSX.Element;
  Result: {
    ethanolPrice: number;
    gasolinePrice: number;
    result: string;
  };
};

const Stack = createStackNavigator<RootStackParamList>();

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
