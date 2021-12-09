import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Colors from "../colors/Colors";

const TodoButton = ({ title, color, navigation }) => {
  return (
    <TouchableOpacity
      style={[styles.todoContainer, { backgroundColor: color }]}
      onPress={() => {
        navigation.navigate("ToDoList", { title, color });
      }}
    >
      <View>
        <Text style={styles.todoTitle}>{title}</Text>
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

export default ({ navigation }) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={[
          { title: "School", color: Colors.red },
          { title: "Work", color: Colors.green },
          { title: "Fun", color: Colors.blue },
        ]}
        renderItem={({ item: { title, color }, index }) => {
          return (
            <TodoButton title={title} color={color} navigation={navigation} />
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#222",
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
  },
  todoTitle: {
    fontSize: 24,
    padding: 5,
    color: "white",
  },
});
