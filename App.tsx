// In App.js in a new project

import * as React from "react";
import { View, Text, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DefaultLayout from "./src/layouts/DefaultLayout/index";
import { CategoryContextProvider } from "./src/context/CategoryContext";
import Home from "./src/pages/Home";
import { GroupContextProvider } from "./src/context/GroupContext";

const Stack = createNativeStackNavigator();

function App() {
  return (
    <GroupContextProvider>
      <CategoryContextProvider>
        <DefaultLayout>
          <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
              <Stack.Screen
                options={{ headerShown: false }}
                name="Home"
                component={Home}
              />
            </Stack.Navigator>
          </NavigationContainer>
        </DefaultLayout>
      </CategoryContextProvider>
    </GroupContextProvider>
  );
}

export default App;
