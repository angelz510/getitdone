import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Colors from "./colors/Colors";
import Home from "./containers/Home";
import ToDoList from "./containers/ToDoList";
import EditList from "./containers/EditList";
import Login from "./containers/Login";

const Stack = createStackNavigator();
const AuthStack = createStackNavigator();

const AuthScreens = () => {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen
        name="Login"
        component={Login}
        options={() => {
          return {
            headerStyle: {
              backgroundColor: "#161b22",
            },
            headerTintColor: "white",
            headerTitleAlign: "center",
            headerTitleStyle: {
              fontSize: 25,
            },
          };
        }}
      />
    </AuthStack.Navigator>
  );
};
const Screens = () => {
  return (
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
      <Stack.Screen
        name={"Edit"}
        component={EditList}
        options={({ route }) => {
          return {
            title: route.params.title
              ? `Edit ${route.params.title} list`
              : "Create New List",
            headerStyle: {
              backgroundColor: route.params.color || Colors.blue,
            },
            headerTintColor: "white",
          };
        }}
      />
    </Stack.Navigator>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      {isAuthenticated ? <Screens /> : <AuthScreens />}
    </NavigationContainer>
  );
}
