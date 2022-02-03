import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Colors from "../colors/Colors";
import Button from "../components/Button";
import LabeledInput from "../components/LabeledInput";

export default () => {
  const [isCreateMode, setIsCreateMode] = useState(true);
  const [emailField, setEmailField] = useState({ text: "", errorMessage: "" });
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
        {/* login toggle */}
      </View>
      <Button
        onPress={() => {}}
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
    color: Colors.lightGray,
    alignSelf: "center",
    marginTop: 20,
  },
});
