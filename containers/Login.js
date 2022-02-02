import React, { useLayoutEffect, useState } from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";
import Colors from "../colors/Colors";
import Button from "../components/Button";

export default () => {
  const [isCreateMode, setIsCreateMode] = useState(true);
  return (
    <View style={styles.container}>
      <Text style={styles.header}>📝 Get It Done!</Text>
      <View style={{ flex: 1 }}>
        {/* Email input */}
        {/* password input */}
        {/* password confirmation */}
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
  label: { fontSize: 24, fontWeight: "bold", color: "white" },
  header: {
    fontSize: 30,
    color: Colors.lightGray,
    alignSelf: "center",
    marginTop: 20,
  },
});
