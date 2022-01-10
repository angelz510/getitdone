import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import Checkbox from "./Checkbox";
import Colors from "../colors/Colors";

export default ({ text, isChecked, onChecked }) => {
  return (
    <View style={StyleSheet.container}>
      <View style={{ flexDirection: "row", flex: 1 }}>
        <Checkbox isChecked={isChecked} onChecked={onChecked} />
        <Text>{text}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
  },
  icon: {
    padding: 5,
    fontSize: 16,
  },
});
