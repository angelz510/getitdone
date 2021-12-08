import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const ListButton = (props) => {
  return (
    <TouchableOpacity style={styles.todoContainer} onPress={() => {}}>
      <View>
        <Text style={styles.todoTitle}>{props.title}</Text>
      </View>
      <View style={{ flexDirection: "row" }}>
        <TouchableOpacity onPress={() => {}}>
          <Ionicons name="options-outline" size={24} color="white" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {}}>
          <Ionicons name="trash-outline" size={24} color="white" />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

export default () => {
  return (
    <View style={styles.container}>
      <ListButton title="School" />
      <ListButton title="Work" />
      <ListButton title="Fun" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  todoContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 100,
    flex: 1,
    borderRadius: 20,
    marginHorizontal: 20,
    marginVertical: 10,
    padding: 15,
    backgroundColor: "salmon",
  },
  todoTitle: {
    fontSize: 24,
    padding: 5,
    color: "white",
  },
});
