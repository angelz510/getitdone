import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import Colors from "../colors/Colors";
import Button from "../components/Button";
import LabeledInput from "../components/LabeledInput";
import validator from "validator";
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
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
  console.log(userCredential);
};

const createAccount = async (email, password) => {
  const userCredential = await createUserWithEmailAndPassword(
    auth,
    email,
    password
  );
  console.log(userCredential);
};

const validateFields = (email, password) => {
  const isValid = {
    email: validator.isEmail(email),
    password: validator.isStrongPassword(password, {
      minLength: 8,
      minLowercase: 1,
      minUppercase: 1,
      minNumbers: 1,
      minSymbols: 1,
    }),
  };
  return isValid;
};

export default () => {
  const [isCreateMode, setCreateMode] = useState(false);
  const [emailField, setEmailField] = useState({
    text: "",
    errorMessage: "",
  });
  const [passwordField, setPasswordField] = useState({
    text: "",
    errorMessage: "",
  });
  const [passwordConfirmationField, setPasswordConfirmationField] = useState({
    text: "",
    errorMessage: "",
  });
  return (
    <View style={styles.container}>
      <Text style={styles.header}>📝 Get It Done!</Text>
      <View style={{ flex: 1 }}>
        <LabeledInput
          label="Email"
          text={emailField.text}
          onChangeText={(text) => {
            setEmailField({ text });
          }}
          errorMessage={emailField.errorMessage}
          labelStyle={styles.label}
          autoCompleteType="email"
        />
        <LabeledInput
          label="Password"
          text={passwordField.text}
          onChangeText={(text) => {
            setPasswordField({ text });
          }}
          secureTextEntry={true}
          errorMessage={passwordField.errorMessage}
          labelStyle={styles.label}
          autoCompleteType="password"
        />
        {isCreateMode && (
          <LabeledInput
            label="Re-enter Password"
            text={passwordConfirmationField.text}
            onChangeText={(text) => {
              setPasswordConfirmationField({ text });
            }}
            secureTextEntry={true}
            errorMessage={passwordConfirmationField.errorMessage}
            labelStyle={styles.label}
          />
        )}
        <TouchableOpacity
          onPress={() => {
            setCreateMode(!isCreateMode);
          }}
        >
          <Text
            style={{
              alignSelf: "center",
              color: Colors.blue,
              fontSize: 16,
              margin: 4,
            }}
          >
            {isCreateMode ? "Already have an account?" : "Create Account"}
          </Text>
        </TouchableOpacity>
      </View>
      <Button
        onPress={() => {
          const isValid = validateFields(emailField.text, passwordField.text);
          let isAllValid = true;
          if (!isValid.email) {
            emailField.errorMessage = "Please enter a valid email";
            setEmailField({ ...emailField });
            isAllValid = false;
          }
          if (!isValid.password) {
            passwordField.errorMessage =
              "Password must be at least 8 characters and include a number, lowercase, uppercase, number, and symbol.";
            setPasswordField({ ...passwordField });
            isAllValid = false;
          }
          if (
            isCreateMode &&
            passwordConfirmationField.text != passwordField.text
          ) {
            passwordConfirmationField.errorMessage = "Passwords do not match";
            setPasswordConfirmationField({ ...passwordConfirmationField });
            isAllValid = false;
          }
          if (isAllValid) {
            isCreateMode
              ? createAccount(emailField.text, passwordField.text)
              : login(emailField.text, passwordField.text);
          }
        }}
        buttonStyle={{ backgroundColor: Colors.red }}
        text={isCreateMode ? "Create Account" : "Login"}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#040208",
    justifyContent: "space-between",
    alignItems: "stretch",
  },
  label: { fontSize: 24, fontWeight: "bold", color: "whitesmoke" },
  header: {
    fontSize: 30,
    color: "whitesmoke",
    alignSelf: "center",
    marginTop: 20,
  },
});
