import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./containers/Home";
import ToDoList from "./containers/ToDoList";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Get It Done"
          component={Home}
          options={() => {
            return {
              headerStyle: {
                backgroundColor: "#161b22",
              },
              headerTintColor: "white",
              headerTitleStyle: {
                fontSize: 20,
              },
            };
          }}
        />
        <Stack.Screen
          name="ToDoList"
          component={ToDoList}
          options={({ route }) => {
            return {
              title: route.params.title,
              headerStyle: {
                backgroundColor: route.params.color,
              },
              headerTintColor: "white",
            };
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
