import React, { useState } from "react";
import { Button, View, Text, TouchableOpacity, FlatList } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { globalStyles } from "./styles/global";
import HomeScreen from "./screens/home";
import DetailsScreen from "./screens/details";
import AboutScreen from "./screens/about";

const Stack = createNativeStackNavigator();

const StackNavigator = (
  <Stack.Navigator>
    <Stack.Screen
      name="Home"
      component={HomeScreen} // <----
    />
    <Stack.Screen
      name="Details"
      component={DetailsScreen} // <----
    />
    <Stack.Screen
      name="About"
      component={AboutScreen} // <----
    />
  </Stack.Navigator>
);

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: "Overview" }}
        />
        {/*<Stack.Screen name="Home">
          {(props) => <HomeScreen {...props} extraData={someData} />}
</Stack.Screen>*/}
        <Stack.Screen
          name="Details"
          component={DetailsScreen}
          initialParams={{ itemId: 42 }}
        />
        <Stack.Screen
          name="About"
          component={AboutScreen}
          options={{ title: "About Screen" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
