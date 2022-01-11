import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import Colors from "../colors/Colors";

export default ({ isChecked, onChecked, ...props }) => {
  return (
    <TouchableOpacity style={styles.checkbox} onPress={onChecked}>
      <Text style={{ color: Colors.lightGray }}>{isChecked ? "✔" : ""}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  checkbox: {
    width: 20,
    height: 20,
    margin: 5,
    backgroundColor: "white",
    color: "black",
    borderWidth: 1,
    borderRadius: 3,
    alignItems: "center",
    justifyContent: "center",
  },
});
