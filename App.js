import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Colors from "./colors/Colors";
import Home from "./containers/Home";
import Settings from "./containers/Settings";
import ToDoList from "./containers/ToDoList";
import EditList from "./containers/EditList";
import Login from "./containers/Login";
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";

const firebaseApp = initializeApp({
  apiKey: "AIzaSyD0FbAxw4wSsy7qcX3KDZ3eRiy9HN2S4S4",
  authDomain: "getitdone-e2ad2.firebaseapp.com",
  projectId: "getitdone-e2ad2",
  storageBucket: "getitdone-e2ad2.appspot.com",
  messagingSenderId: "693524893315",
  appId: "1:693524893315:web:a98e2489916cfb326a55b6",
});

const auth = getAuth(firebaseApp);

const login = async (email, password) => {
  const userCredential = await signInWithEmailAndPassword(
    auth,
    email,
    password
  );
  console.log(userCredential.user);
};

const createAccount = async (email, password) => {
  const userCredential = await createUserWithEmailAndPassword(
    auth,
    email,
    password
  );
  console.log(userCredential.user);
};

const Stack = createStackNavigator();
const AuthStack = createStackNavigator();

const AuthScreens = () => {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen
        name="Login"
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
      >
        {(props) => (
          <Login {...props} createAccount={createAccount} login={login} />
        )}
      </AuthStack.Screen>
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
      <Stack.Screen name="Settings" component={Settings} />
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
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsAuthenticated(true);
      } else {
        setIsAuthenticated(false);
      }
    });
  }, []);
  return (
    <NavigationContainer>
      {isAuthenticated ? <Screens /> : <AuthScreens />}
    </NavigationContainer>
  );
}
